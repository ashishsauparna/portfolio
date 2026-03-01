#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const cwd = process.cwd();
const args = new Set(process.argv.slice(2));
const applyChanges = args.has("--apply");
const configPath = path.join(cwd, "framer-sync.config.json");
const reportDir = path.join(cwd, ".framer-sync");
const reportPath = path.join(reportDir, "last-report.md");
const snapshotPath = path.join(reportDir, "last-snapshot.json");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function decodeHtml(text) {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function toJsxSafeText(value) {
  return value.replace(/'/g, "&apos;");
}

function normalizeTextFromHtml(html) {
  const noScripts = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ");
  const noTags = noScripts.replace(/<[^>]+>/g, " ");
  return decodeHtml(noTags).replace(/\s+/g, " ").trim();
}

function toHash(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

async function loadConfig() {
  let raw;
  try {
    raw = await fs.readFile(configPath, "utf8");
  } catch {
    throw new Error(
      "Missing framer-sync.config.json. Copy framer-sync.config.example.json to framer-sync.config.json and fill your Framer URL."
    );
  }

  let config;
  try {
    config = JSON.parse(raw);
  } catch {
    throw new Error("Invalid JSON in framer-sync.config.json.");
  }

  if (!config.framerUrl || config.framerUrl.includes("YOUR_FRAMER_URL")) {
    throw new Error("Set framerUrl in framer-sync.config.json first.");
  }
  if (!Array.isArray(config.rules) || config.rules.length === 0) {
    throw new Error("Add at least one rule in framer-sync.config.json.");
  }
  return config;
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "portfolio-framer-sync/1.0" },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch Framer page: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function loadSnapshot() {
  try {
    const raw = await fs.readFile(snapshotPath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function makeRegex(raw, flags = "") {
  return new RegExp(raw, flags);
}

function resolveMatchText(match, captureGroup) {
  if (captureGroup !== undefined && captureGroup !== null) {
    return match[captureGroup] ?? "";
  }
  if (match.length > 1) {
    return match[1] ?? "";
  }
  return match[0] ?? "";
}

function applyTransforms(value, transforms = []) {
  let result = value;
  for (const transform of transforms) {
    if (transform === "trim") {
      result = result.trim();
      continue;
    }
    if (transform === "collapseWhitespace") {
      result = result.replace(/\s+/g, " ").trim();
      continue;
    }
    if (transform === "jsxEscape") {
      result = toJsxSafeText(result);
      continue;
    }
  }
  return result;
}

async function run() {
  const config = await loadConfig();
  const html = await fetchHtml(config.framerUrl);
  const framerText = normalizeTextFromHtml(html);

  const previous = await loadSnapshot();
  const snapshot = {
    createdAt: new Date().toISOString(),
    framerUrl: config.framerUrl,
    framerHash: toHash(framerText),
  };

  const results = [];
  for (const rule of config.rules) {
    const sourceKind = rule.sourceKind === "html" ? "html" : "text";
    const sourceText = sourceKind === "html" ? html : framerText;
    const sourceRegex = makeRegex(rule.sourceRegex, rule.sourceFlags ?? "i");
    const sourceMatch = sourceText.match(sourceRegex);
    if (!sourceMatch) {
      results.push({
        name: rule.name,
        status: "source_not_found",
        file: rule.targetFile,
      });
      continue;
    }

    const extracted = resolveMatchText(sourceMatch, rule.captureGroup);
    const transformed = applyTransforms(extracted, rule.transforms ?? ["trim"]);
    const targetFilePath = path.join(cwd, rule.targetFile);
    const targetRaw = await fs.readFile(targetFilePath, "utf8");
    const targetRegex = makeRegex(rule.targetRegex, rule.targetFlags ?? "");
    const targetMatch = targetRaw.match(targetRegex);
    if (!targetMatch) {
      results.push({
        name: rule.name,
        status: "target_not_found",
        file: rule.targetFile,
      });
      continue;
    }

    const replacementTemplate = rule.targetTemplate ?? "$VALUE";
    const replacement = replacementTemplate.replace(/\$VALUE/g, transformed);
    const nextFile = targetRaw.replace(targetRegex, replacement);

    if (nextFile === targetRaw) {
      results.push({
        name: rule.name,
        status: "unchanged",
        file: rule.targetFile,
      });
      continue;
    }

    if (applyChanges) {
      await fs.writeFile(targetFilePath, nextFile, "utf8");
    }

    results.push({
      name: rule.name,
      status: applyChanges ? "updated" : "change_detected",
      file: rule.targetFile,
      preview: transformed.slice(0, 120),
    });
  }

  await ensureDir(reportDir);
  await fs.writeFile(snapshotPath, JSON.stringify(snapshot, null, 2), "utf8");

  const lines = [];
  lines.push(`# Framer Sync Report`);
  lines.push("");
  lines.push(`- Timestamp: ${snapshot.createdAt}`);
  lines.push(`- Framer URL: ${snapshot.framerUrl}`);
  lines.push(`- Framer content hash: \`${snapshot.framerHash}\``);
  lines.push(`- Previous hash: \`${previous?.framerHash ?? "none"}\``);
  lines.push(`- Framer changed since last run: ${previous?.framerHash !== snapshot.framerHash ? "yes" : "no"}`);
  lines.push(`- Mode: ${applyChanges ? "apply" : "check"}`);
  lines.push("");
  lines.push("## Rules");
  lines.push("");

  for (const item of results) {
    lines.push(`- ${item.name}: ${item.status} (${item.file})`);
    if (item.preview) {
      lines.push(`  Preview: ${item.preview}`);
    }
  }

  await fs.writeFile(reportPath, lines.join("\n"), "utf8");

  const updated = results.filter((r) => r.status === "updated").length;
  const pending = results.filter((r) => r.status === "change_detected").length;
  const missing = results.filter((r) => r.status === "source_not_found" || r.status === "target_not_found").length;

  console.log(`Framer sync complete (${applyChanges ? "apply" : "check"} mode).`);
  console.log(`Updated: ${updated} | Pending: ${pending} | Missing matches: ${missing}`);
  console.log(`Report: ${path.relative(cwd, reportPath)}`);
}

run().catch((error) => {
  console.error(`Framer sync failed: ${error.message}`);
  process.exit(1);
});
