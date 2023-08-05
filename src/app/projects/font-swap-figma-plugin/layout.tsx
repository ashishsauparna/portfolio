import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Font Swap: Effortless Figma Plugin for Easy Font Changes',
    openGraph: {
        title: 'Font Swap: Effortless Figma Plugin for Easy Font Changes',
      },
    description: 'Font Swap: Effortless Figma plugin for UI designers. Easily change fonts, handle mixed styles, and optimize your design workflow. Try it now for a seamless font-changing experience.',
  }

export default function FontSwapLayout({
children,
}: {
children: React.ReactNode
}) {
return <section>{children}</section>
}