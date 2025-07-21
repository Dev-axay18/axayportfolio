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
        url: "https://private-user-images.githubusercontent.com/162922094/468370525-9f599cf1-4536-4101-8ca8-800710b1eea9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMwNjE5MzEsIm5iZiI6MTc1MzA2MTYzMSwicGF0aCI6Ii8xNjI5MjIwOTQvNDY4MzcwNTI1LTlmNTk5Y2YxLTQ1MzYtNDEwMS04Y2E4LTgwMDcxMGIxZWVhOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyMVQwMTMzNTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03YTBlZDM0NGQyZDBhZTVlY2NhODYyNTFmZWI2MzBkYWE0MzQ4MTlkOTg2NjQxOGI0ZGQ1ODRkNDlkYzdmZTdiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.KDNjtqc1Pkm8bGEDprJ_47Ow9yf9byrZYVPax_hFuE8",
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
      "https://private-user-images.githubusercontent.com/162922094/468370525-9f599cf1-4536-4101-8ca8-800710b1eea9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMwNjE5MzEsIm5iZiI6MTc1MzA2MTYzMSwicGF0aCI6Ii8xNjI5MjIwOTQvNDY4MzcwNTI1LTlmNTk5Y2YxLTQ1MzYtNDEwMS04Y2E4LTgwMDcxMGIxZWVhOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyMVQwMTMzNTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03YTBlZDM0NGQyZDBhZTVlY2NhODYyNTFmZWI2MzBkYWE0MzQ4MTlkOTg2NjQxOGI0ZGQ1ODRkNDlkYzdmZTdiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.KDNjtqc1Pkm8bGEDprJ_47Ow9yf9byrZYVPax_hFuE8",
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
