import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Akshay Kale ",
  description:
    "Frontend Engineer and Web Designer, currently in India. Focused on interfaces and experiences and Cybersecurity and infrastructure protection, working remotely from chhatrapati Sambhajinagar, Maharashtra.",
  generator: "Next.js",
  applicationName: "Akshay Kale",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "india",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Akshay Kale — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently in India. Focused on interfaces and experiences and Cybersecurity and infrastructure protection, working remotely from chhatrapati Sambhajinagar, Maharashtra.",
    url: "https://ak22dev.vercel.app/",
    siteName: "www.ak22dev.vercel.app",
    images: [
      {
        url: "https://github.com/Dev-axay18/axayportfolio/blob/main/AKSHAY%20KALE.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Akshay Kale — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Kale — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently in India. Focused on interfaces and experiences and Cybersecurity and infrastructure protection, working remotely from chhatrapati Sambhajinagar, Maharashtra..",
    creator: "AkshayKale__",
    creatorId: "md5.axay",
    images: [
      "https://github.com/Dev-axay18/axayportfolio/blob/main/AKSHAY%20KALE.png?raw=true",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link href='https://cdn.boxicons.com/fonts/basic/boxicons.min.css' rel='stylesheet' />
      </head>
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
