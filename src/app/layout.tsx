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
  title: "Zachary Neumann | Founder & CEO, Audio Alchemy | AI Pioneer",
  description: "Founder building the future of human potential through AI. Former U.S. Government tech lead. Artist performing at Burning Man & Envision Festival. Scaling AI products to millions.",
  keywords: [
    "Zachary Neumann",
    "Audio Alchemy",
    "AI startup founder",
    "tech entrepreneur",
    "Akriza",
    "artificial intelligence",
    "startup CEO",
    "AI products",
    "transformative technology",
    "human potential",
    "burning man artist",
    "electronic music producer"
  ],
  authors: [{ name: "Zachary Neumann", url: "https://zacharyneumann.com" }],
  creator: "Zachary Neumann",
  publisher: "Zachary Neumann",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Zachary Neumann | Founder & CEO, Audio Alchemy",
    description: "Building AI that transforms human potential. Tech leader. Artist. Visionary.",
    url: "https://zacharyneumann.com",
    siteName: "Zachary Neumann",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zachary Neumann - Founder & CEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachary Neumann | Founder & CEO",
    description: "Building AI that transforms human potential. Tech leader. Artist. Visionary.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://zacharyneumann.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zachary Neumann",
  url: "https://zacharyneumann.com",
  image: "https://zacharyneumann.com/profile.jpg",
  sameAs: [
    "https://linkedin.com/in/zneumann",
    "https://github.com/zneu",
    "https://instagram.com/akrizamusic",
    "https://open.spotify.com/artist/akriza",
    "https://soundcloud.com/akriza"
  ],
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    name: "Audio Alchemy",
    description: "AI product studio focused on human transformation"
  },
  alumniOf: {
    "@type": "Organization",
    name: "U.S. Forest Service - Washington Office"
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Software Engineering",
    "GIS Systems",
    "Music Production",
    "Entrepreneurship"
  ],
  description: "Founder building AI products that transform human potential. Former U.S. Federal Government technology lead. Festival artist performing as Akriza."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
