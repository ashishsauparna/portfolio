import Image from 'next/image';
import Link from 'next/link';

interface CaseStudyCardProps {
  href: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}

export default function CaseStudyCard({ href, image, alt, title, description }: CaseStudyCardProps) {
  return (
    <Link href={href} className="flex flex-col gap-2 group">
      <div className="h-[256px] md:h-[270px] rounded-[8px] overflow-hidden relative border border-black/5">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <p className="token-heading-md text-[#232122]">{title}</p>
      <p className="token-body text-[#1A1A1A]">{description}</p>
    </Link>
  );
}
