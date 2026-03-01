import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function SectionContainer({ children, className = '', innerClassName = '' }: SectionContainerProps) {
  return (
    <section className={`w-full flex justify-center ${className}`}>
      <div className={`w-[92%] lg:w-[85%] xl:w-[75%] 2xl:w-[70%] flex flex-col items-center ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
