import Image from 'next/image';

interface SkillItemProps {
  label: string;
  frame: string;
  image: string;
  imageAlt: string;
  imageClass: string;
  rotate?: string;
  swingClass?: string;
}

export default function SkillItem({
  label,
  frame,
  image,
  imageAlt,
  imageClass,
  rotate,
  swingClass,
}: SkillItemProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div
        className="relative w-[200px] h-[242px] transition-transform duration-300"
        style={rotate ? { transform: rotate } : undefined}
      >
        <div className={`relative w-full h-full ${swingClass ?? ""}`}>
          <Image src={frame} alt="Frame" width={200} height={242} className="absolute inset-0 w-full h-full" />
          <Image src={image} alt={imageAlt} width={172} height={176} className={imageClass} />
        </div>
      </div>
      <p className="token-body text-[#1A1A1A] text-center">{label}</p>
    </div>
  );
}
