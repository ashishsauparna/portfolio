"use client";

import Image from "next/image";
import Link from "next/link";

const people = [
  {
    img: "/inspiration/chris_do.jpeg",
    alt: "Chris Do",
    name: "Chris Do",
    social: "Instagram",
    href: "https://instagram.com/thechrisdo?igshid=MzRlODBiNWFlZA==",
  },
  {
    img: "/inspiration/mat_kal.jpeg",
    alt: "Maitreyee Kalaskar",
    name: "Maitreyee Kalaskar",
    social: "Instagram",
    href: "https://instagram.com/maitreyee_kal?igshid=MzRlODBiNWFlZA==",
  },
  {
    img: "/inspiration/femke.jpeg",
    alt: "Femke",
    name: "Femke",
    social: "Instagram",
    href: "https://instagram.com/femkedotdesign?igshid=MzRlODBiNWFlZA==",
  },
  {
    img: "/inspiration/kimya.jpeg",
    alt: "Kimya Gandhi",
    name: "Kimya Gandhi",
    social: "Instagram",
    href: "https://instagram.com/kimyagandhi?igshid=MzRlODBiNWFlZA==",
  },
  {
    img: "/inspiration/sapta.jpeg",
    alt: "Saptarshi Prakash",
    name: "Saptarshi Prakash",
    social: "Instagram",
    href: "https://instagram.com/saptarshiux?igshid=MzRlODBiNWFlZA==",
  },
  {
    img: "/inspiration/ashwini.jpeg",
    alt: "Ashwini Deshpande",
    name: "Ashwini Deshpande",
    social: "Instagram",
    href: "https://instagram.com/ashwinielephant?igshid=MzRlODBiNWFlZA==",
  },
  {
    img: "/inspiration/Phoebe_Yu.jpg",
    alt: "Phoebe Yu",
    name: "Phoebe Yu",
    social: "YouTube",
    href: "https://www.youtube.com/@phoebeyutbt",
  },
];

export default function Inspirations() {
  return (
    <div className="grid w-full grid-cols-1 gap-y-0">
      {people.map((person) => (
        <Link
          key={person.name}
          href={person.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[88px] items-center gap-4 border-t border-[#E6E6E6] py-3"
        >
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[8px]">
            <Image
              src={person.img}
              alt={person.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid min-w-0 gap-0.5">
            <p className="token-body-emphasis truncate text-black">{person.name}</p>
            <p className="token-body-sm truncate text-[#5E5E5E]">{person.social}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
