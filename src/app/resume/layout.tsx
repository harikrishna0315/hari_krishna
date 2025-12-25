import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Hari Krishna",
  description:
    "View and download  Hari krishna's professional resume. Student developer with expertise in ML and IOT.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Hari Krishna",
    description:
      "View and download Hari Krishna's professional resume featuring his experience and skills as a student developer.",
    url: "http://localhost:3000/resume",
    siteName: "Hari Krishna",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Hari Krishna Resume",
      },
    ],
  },
  
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <link
        rel="preload"
        href="/docs/HARI_KRISHNA.pdf"
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
