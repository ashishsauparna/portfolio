export type BookItem = {
  href: string;
  alt: string;
  src: string;
  name: string;
  cta?: string;
};

export const books: BookItem[] = [
  {
    href: "https://www.amazon.in/Lean-UX-Applying-Principles-Experience/dp/9352132785/ref=sr_1_3?crid=3W3CQ2YA1WSRE&keywords=lean+ux&qid=1654286399&sprefix=lean+ux%2Caps%2C309&sr=8-3",
    alt: "Lean UX book cover",
    src: "/books/Leanux.jpg",
    name: "Lean UX",
  },
  {
    href: "https://www.amazon.in/Sprint-Solve-Problems-Test-Ideas/dp/150112174X",
    alt: "Sprint book cover",
    src: "/books/sprint.png",
    name: "Sprint",
  },
  {
    href: "https://thefutur.com/pocket-full-of-do",
    alt: "Pocket Full of Do book cover",
    src: "/books/do.png",
    name: "Pocket Full of Do",
    cta: "View Resource",
  },
  {
    href: "https://www.amazon.in/Steal-Like-Artist-Austin-Kleon/dp/0761169253",
    alt: "Steal Like an Artist book cover",
    src: "/books/steal.png",
    name: "Steal Like an Artist",
  },
  {
    href: "https://www.amazon.in/Logo-Design-Love-creating-identities/dp/0321985206",
    alt: "Logo Design Love book cover",
    src: "/books/logo.png",
    name: "Logo Design Love",
  },
  {
    href: "https://www.amazon.in/Thinking-Type-2nd-revised-expanded/dp/1568989695",
    alt: "Thinking with Type book cover",
    src: "/books/type.png",
    name: "Thinking with Type",
  },
  {
    href: "https://www.amazon.in/AM-Club-Your-Morning-Elevate/dp/9387944891/ref=sr_1_1?keywords=5+am+club&qid=1642891301&sprefix=5+%2Caps%2C620&sr=8-1",
    alt: "The 5 AM Club book cover",
    src: "/books/5am.png",
    name: "The 5 AM Club",
  },
  {
    href: "https://www.amazon.in/Wings-Fire-Autobiography-Abdul-Kalam/dp/8173711461",
    alt: "Wings of Fire book cover",
    src: "/books/wings.png",
    name: "Wings of Fire",
  },
  {
    href: "https://www.amazon.in/Inner-Engineering-Yogis-Guide-Joy/dp/0143428845/ref=sr_1_3?crid=4SB2S3B6NQM1&keywords=inner+engineering+by+sadhguru+in+english&qid=1642891150&sprefix=inner+en%2Caps%2C294&sr=8-3",
    alt: "Inner Engineering book cover",
    src: "/books/inner.png",
    name: "Inner Engineering",
  },
];
