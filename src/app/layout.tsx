import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zachary Neumann | CEO, Software Engineer & Music Artist",
  description: "CEO building AI-powered products at Audio Alchemy. Software Engineer with 6+ years experience. World-fusion electronic music artist performing as Akriza.",
  keywords: ["Zachary Neumann", "Audio Alchemy", "Akriza", "Software Engineer", "GIS", "AI", "Music Producer"],
  authors: [{ name: "Zachary Neumann" }],
  openGraph: {
    title: "Zachary Neumann",
    description: "CEO, Software Engineer & Music Artist",
    url: "https://zacharyneumann.com",
    siteName: "Zachary Neumann",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachary Neumann",
    description: "CEO, Software Engineer & Music Artist",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
