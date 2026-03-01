"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { books } from "./books-data";

export default function Books() {
  return (
    <div className="grid w-full grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <Link
          key={book.name}
          href={book.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid gap-3"
        >
          <div className="relative aspect-[3/4.2] overflow-hidden rounded-[14px] bg-[#F3F3F3] shadow-[0_12px_30px_rgba(17,17,17,0.06)]">
            <Image
              src={book.src}
              alt={book.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <div className="grid gap-1.5">
            <p className="token-body-emphasis text-black">{book.name}</p>
            <div className="inline-flex items-center gap-1.5">
              <span className="token-body-sm text-[#5E5E5E]">
                {book.cta ?? "Buy on Amazon"}
              </span>
              <ArrowUpRight
                size={14}
                weight="duotone"
                className="text-[#232122] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
