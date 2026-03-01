"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { X } from "@phosphor-icons/react";
import ArrowHeading from "@/app/components/ui/arrowheading";

export type CaseStudyNavItem = {
  id: string;
  label: string;
};

export type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function useCaseStudyActiveSection(defaultSectionId: string) {
  const [activeSection, setActiveSection] = useState(defaultSectionId);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      setActiveSection(hash);
    }

    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [defaultSectionId]);

  return { activeSection, setActiveSection };
}

export function CaseStudyStickyNav({
  items,
  activeSection,
}: {
  items: CaseStudyNavItem[];
  activeSection: string;
}) {
  const router = useRouter();

  const handleScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      router.replace(`#${sectionId}`);
    }
  };

  return (
    <div className="sticky top-4 z-50 mt-4 flex w-[92%] justify-center gap-3 lg:w-[85%] xl:w-[75%] 2xl:w-[70%]">
      <button onClick={() => router.back()} className="goback_button" type="button">
        <Image
          src="/arrow_back.svg"
          alt="Back"
          width={20}
          height={20}
          className="arrow-back-icon"
        />
      </button>

      <div className="sticky_navigation flex flex-wrap justify-center gap-1">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) => handleScroll(event, item.id)}
            className={`nav_link ${activeSection === item.id ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CaseStudySectionFrame({
  id,
  title,
  number,
  children,
}: {
  id: string;
  title: string;
  number: string;
  children: ReactNode;
}) {
  return (
    <section id={id} data-section className="scroll-mt-32 w-full">
      <div className="grid w-full gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="token-label text-[#0069E5] uppercase">{number}</p>
          <div className="mt-4">
            <ArrowHeading
              heading={title}
              headingClassName="token-project-section-heading"
            />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function CaseStudyOverviewCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
      <p className="token-label text-[#0069E5] uppercase">{label}</p>
      <p className="token-body mt-2 text-black">{value}</p>
    </div>
  );
}

export function CaseStudyHeroImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className="w-full overflow-hidden rounded-[8px] border border-[#E3E3E3] bg-white">
      <Image
        src={src}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        className={`w-full object-cover ${className ?? ""}`}
        priority={priority}
      />
    </div>
  );
}

export function ZoomableCaseImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  priority = false,
  onOpen,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
  onOpen: (image: LightboxImage) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen({ src, alt, width, height })}
      className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[8px] border border-[#E3E3E3] bg-white text-left"
      aria-label={`Open full view: ${alt}`}
    >
      <Image
        src={src}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        className={`w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02] group-hover:brightness-[0.98] ${className ?? ""}`}
        priority={priority}
      />
      <span className="pointer-events-none absolute right-3 top-3 rounded-[4px] border border-white/80 bg-white/90 px-2 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#232122] opacity-0 transition duration-200 group-hover:opacity-100">
        View full
      </span>
    </button>
  );
}

export function CaseStudyLightbox({
  image,
  onClose,
}: {
  image: LightboxImage | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!image) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-[1400px] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <Image
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            sizes="90vw"
            aria-hidden="true"
            className="max-h-[90vh] w-auto max-w-full scale-[1.06] object-contain opacity-35 blur-3xl"
          />
        </div>

        <button
          type="button"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#232122] transition hover:bg-white"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          <X size={18} weight="bold" />
        </button>

        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="90vw"
          className="relative z-10 max-h-[90vh] w-auto max-w-full rounded-[8px] object-contain shadow-2xl"
        />
      </div>
    </div>
  );
}
