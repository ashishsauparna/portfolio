import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Footer from "../../components/ui/footer";
import Inspirations from "../inspirations";
import { books } from "../books-data";
import SectionContainer from "../../components/ui/section-container";

export const metadata: Metadata = {
  title: "Inspirations",
  openGraph: {
    title: "Inspirations",
  },
  description:
    "Its a space of all my favourite books, podcasts, articles, people I am inspired by and things that I enjoy and love, that I hope you might like as well.",
};

const quickLinks = [
  { label: "Books shelf", href: "#reads" },
];

const shelfOrder = [
  "Lean UX",
  "Steal Like an Artist",
  "Inner Engineering",
  "Logo Design Love",
  "Sprint",
  "Wings of Fire",
  "Pocket Full of Do",
  "Thinking with Type",
  "The 5 AM Club",
] as const;

const booksByName = new Map(books.map((book) => [book.name, book]));

const shelfBooks = shelfOrder
  .map((name) => {
    const book = booksByName.get(name);

    if (!book) {
      return null;
    }

    return book;
  })
  .filter((book): book is (typeof books)[number] => Boolean(book));

const shelfLayout: Record<
  string,
  { width: number; height: number; tilt: number; overlap: number; xOffset: number }
> = {
  "Lean UX": { width: 76, height: 462, tilt: 0, overlap: 0, xOffset: 0 },
  "Steal Like an Artist": { width: 162, height: 416, tilt: 0, overlap: -12, xOffset: 0 },
  "Inner Engineering": { width: 116, height: 394, tilt: -11, overlap: -24, xOffset: 0 },
  "Logo Design Love": { width: 138, height: 442, tilt: 0, overlap: 14, xOffset: 0 },
  Sprint: { width: 166, height: 490, tilt: 0, overlap: -10, xOffset: 0 },
  "Wings of Fire": { width: 98, height: 400, tilt: -4, overlap: -24, xOffset: 0 },
  "Pocket Full of Do": { width: 134, height: 462, tilt: 14, overlap: -12, xOffset: -18 },
  "Thinking with Type": { width: 118, height: 458, tilt: 0, overlap: -16, xOffset: 6 },
  "The 5 AM Club": { width: 118, height: 420, tilt: 10, overlap: -14, xOffset: 0 },
};

export default function MyReads() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#FAFAFA]">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2N9F9N8KHK" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2N9F9N8KHK');
        `}
      </Script>

      <SectionContainer
        className="pb-16 pt-16 md:pb-24 md:pt-24"
        innerClassName="items-start gap-12 md:gap-16"
      >
        <section className="grid w-full grid-cols-1 gap-10 xl:grid-cols-3 xl:gap-12 xl:items-start">
          <div className="relative h-[520px] w-full max-w-[360px] overflow-hidden rounded-[8px] md:h-[560px] xl:h-[600px]">
            <Image
              src="/books_story.jpg"
              alt="A stack of books"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="grid max-w-[560px] gap-3">
            <div className="grid gap-2">
              <h1 className="token-heading-xl max-w-[560px] text-black">
                What am I reading and listening to?
              </h1>
              <p className="token-body max-w-[560px] text-[#1A1A1A]">
                A living shelf of people and books I keep returning to. These
                are the inputs that sharpen my taste, improve my judgment, and
                reset how I think about craft.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="token-body-sm border-b border-transparent pb-1 text-black transition-colors hover:border-[#1A1A1A]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div id="people" className="grid scroll-mt-28">
            <Inspirations />
          </div>
        </section>

        <section id="reads" className="mt-4 grid w-full gap-6 scroll-mt-28 md:mt-6">
          <div className="px-0 pb-2 pt-1">
            <div className="flex items-center gap-3">
              <span className="text-[24px] leading-none md:text-[30px]">📚</span>
              <h2 className="token-heading-lg text-black">
                Books-shelf
              </h2>
            </div>

            <p className="token-body-sm mt-1 max-w-[420px] text-[#5E5E5E]">
              Hover any book to lift it from the shelf. Click to open it.
            </p>

            <div className="mt-6 w-full [--shelf-scale:0.26] sm:[--shelf-scale:0.38] md:[--shelf-scale:0.54] lg:[--shelf-scale:0.72] xl:[--shelf-scale:0.9] 2xl:[--shelf-scale:1]">
              <div className="relative z-10 flex w-full items-end justify-center px-2 pt-8 md:px-3 md:pt-10">
                {shelfBooks.map((book, index) => {
                  const layout = shelfLayout[book.name] ?? {
                    width: 118,
                    height: 424,
                    tilt: 0,
                    overlap: -6,
                    xOffset: 0,
                  };

                  return (
                    <Link
                      key={book.name}
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${book.name}`}
                      className="group relative block shrink-0 origin-bottom transition-transform duration-300 ease-out hover:z-20 hover:-translate-y-6 md:hover:-translate-y-8"
                      style={{
                        width: `calc(${layout.width}px * var(--shelf-scale))`,
                        height: `calc(${layout.height}px * var(--shelf-scale))`,
                        marginLeft:
                          index === 0
                            ? "0px"
                            : `calc(${layout.overlap}px * var(--shelf-scale))`,
                      }}
                    >
                      <div
                        className="absolute inset-x-0 top-0 translate-x-[var(--book-x)]"
                        style={{
                          ["--book-x" as string]: `calc(${layout.xOffset}px * var(--shelf-scale))`,
                          bottom: `calc(-10px * var(--shelf-scale))`,
                        }}
                      >
                        <div
                          className="relative h-full w-full origin-bottom rotate-[var(--book-tilt)] transition-transform duration-300 ease-out group-hover:rotate-0"
                          style={{ ["--book-tilt" as string]: `${layout.tilt}deg` }}
                        >
                          <Image
                            src={book.src}
                            alt={book.alt}
                            fill
                            sizes={`${layout.width}px`}
                            className="object-contain object-bottom transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                          />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div
                className="relative z-30 mt-3 h-px w-full bg-[#D6D6D6]"
              />
            </div>

          </div>
        </section>
      </SectionContainer>

      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
