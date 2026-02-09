import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gowthaman S - AI/ML Engineer & Research Associate",
  description: "AI/ML Engineer and Research Associate with expertise in LLMs, RAG, Computer Vision, and Deep Learning. Smart India Hackathon 2025 Grand Finale participant.",
  keywords: ["AI Engineer", "ML Engineer", "Research Associate", "LLMs", "RAG", "Computer Vision", "Deep Learning", "Python", "Next.js"],
  authors: [{ name: "Gowthaman Sivasubramanian" }],
  openGraph: {
    type: "website",
    title: "Gowthaman S - AI/ML Engineer & Research Associate",
    description: "AI/ML Engineer with expertise in LLMs, RAG, Computer Vision, and Deep Learning. Smart India Hackathon 2025 Grand Finale participant.",
    url: "https://gowthaman.dev",
    siteName: "Gowthaman S",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gowthaman S - AI/ML Engineer & Research Associate",
    description: "AI/ML Engineer with expertise in LLMs, RAG, Computer Vision, and Deep Learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import TargetCursor from "@/components/TargetCursor";

import ClickSpark from "@/components/ClickSpark";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} font-display antialiased`}
      >
        <TargetCursor
          targetSelector="a, button, .cursor-target"
          hideDefaultCursor={true}
          spinDuration={4}
        />
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
