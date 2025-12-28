import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { Source_Sans_3, Poppins } from "next/font/google";
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});


import { Toaster } from "sonner";



import { keywords } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  applicationName: "Hari Krishna",
  title: "Hari Krishna",
  description:
    "Hari krishna is a student developer passionate about building applications on ML and IOT. Explore his projects, experiments, and developer portfolio.",
  authors: [
    {
      name: "Hari Krishna",
      url: "",
    },
  ],
  creator: "Hari Krishna",
  referrer: "origin-when-cross-origin",
  category: "Portfolio",
  classification: "Software Development",
  keywords: keywords,
  metadataBase: new URL("https://hari-krishna.vercel.app"),


  alternates: {
    canonical: "https://hari-krishna.vercel.app",
    languages: {
      "en-US": "https://hari-krishna.vercel.app",
    },
  },
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
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      "me": ["mailto:harikrishnx07@gmail.com"],
    },
  },
  appleWebApp: {
    capable: true,
    title: "Hari Krishna",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",

  openGraph: {
    title: "Hari Krishna | Student Developer ",
    description:
      "Explore Hari Krishna’s portfolio featuring projects in React, Next.js, AI, and developer tools. Discover a world of creative web applications and open-source experiments.",
    url: "https://hari-krishna.vercel.app",
    siteName: "Hari Krishna",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Hari Krishna Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "article:published_time": "2024-01-01T00:00:00.000Z",
    "article:modified_time": new Date().toISOString(),
  },

  twitter: {
    card: "summary_large_image",
    title: "Hari Krishna | Student Developer",
    description:
      "Check out Hari Krishna’s personal portfolio and  projects .",
    images: ["/images/thumbnail.png"],
    creator: "@hari_krishnx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html
  lang="en"
  suppressHydrationWarning
  className={`${sourceSans.variable} ${poppins.variable}`}
>

      <body
  className="font-body"
  suppressHydrationWarning
>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
