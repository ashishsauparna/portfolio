"use client"

import Link from "next/link";
import { ArrowUpRight, FigmaLogo } from "@phosphor-icons/react";

interface FigmaLinkProps {
  /** Document name shown after "Figma:" (e.g. "Foundational Style Guide") */
  label: string;
  /** Full Figma file URL - opens in new tab */
  href: string;
  /** Optional className for the container */
  className?: string;
}

export default function FigmaLink({ label, href, className = "" }: FigmaLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex max-w-full items-center gap-2 whitespace-nowrap border border-[#D2D2D2] bg-[#F3F3F3] px-3 py-2 text-[#232122] transition-colors hover:bg-[#ECECEC] ${className}`}
    >
      <FigmaLogo
        size={18}
        weight="duotone"
        className="shrink-0 text-[#232122]"
        aria-hidden="true"
      />

      <span className="token-body-sm text-[#232122]">
        <span className="token-weight-semibold">Figma:</span>{" "}
        <span className="token-weight-regular">{label}</span>
      </span>

      <ArrowUpRight
        size={16}
        weight="duotone"
        className="shrink-0 text-[#232122]"
        aria-hidden="true"
      />
    </Link>
  );
}
