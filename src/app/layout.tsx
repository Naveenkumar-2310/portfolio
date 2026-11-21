import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ThreeCanvas from "@/components/ThreeCanvas";
import CustomCursor from "@/components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen Kumar P — Software Consultant & Full-Stack AI Engineer",
  description:
    "Portfolio of Naveen Kumar P: Engineering responsive web platforms, complex Node.js backends, and structured generative AI pipelines.",
  keywords: [
    "Naveen Kumar P",
    "Naveen Kumar",
    "Portfolio",
    "Software Consultant",
    "Full Stack Developer",
    "AI Prompt Engineer",
    "React",
    "Next.js",
    "Chennai",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full w-full overflow-x-hidden bg-[#070709] text-zinc-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200"
      >
        <ThreeCanvas />
        <BackgroundCanvas />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
