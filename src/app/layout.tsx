import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shamikmondal.dev"),
  title: "Shamik Mondal | IoT Engineer · Web Developer · AI & Image Processing",
  description:
    "Personal portfolio of Shamik Mondal, an interdisciplinary IoT Engineer, Web Developer, and AI researcher building intelligent cyber-physical systems, autonomous rescue robotics, and full-stack web platforms.",
  keywords: [
    "Shamik Mondal",
    "IoT Engineer",
    "Web Developer",
    "AI Researcher",
    "Image Processing",
    "Computer Vision",
    "Autonomous Rescue Bot",
    "Braille for All",
    "Ethno-Swarm",
    "Gomonika",
    "Independent University Bangladesh",
    "Dhaka Bangladesh"
  ],
  authors: [{ name: "Shamik Mondal", url: "https://github.com/Shamik-Israfel" }],
  creator: "Shamik Mondal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shamikmondal.dev",
    title: "Shamik Mondal | IoT Engineer · Web Developer · AI & Image Processing",
    description:
      "Building intelligent systems at the intersection of software, AI, IoT and robotics. Explore research papers, engineering projects, and technical experience.",
    siteName: "Shamik Mondal Portfolio",
    images: [
      {
        url: "/shamik-mondal.jpg",
        width: 800,
        height: 1000,
        alt: "Shamik Mondal - IoT Engineer & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamik Mondal | IoT Engineer · Web Developer · AI",
    description:
      "Building intelligent systems at the intersection of software, AI, IoT and robotics.",
    images: ["/shamik-mondal.jpg"],
  },
  icons: {
    icon: "/shamik-mondal.jpg",
    apple: "/shamik-mondal.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shamik Mondal",
    jobTitle: "IoT Engineer, Web Developer & AI Researcher",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Independent University Bangladesh",
    },
    url: "https://shamikmondal.dev",
    image: "https://shamikmondal.dev/shamik-mondal.jpg",
    sameAs: [
      "https://github.com/Shamik-Israfel",
      "https://linkedin.com/in/shamik-mondal",
    ],
    knowsAbout: [
      "Internet of Things",
      "Robotics",
      "Computer Vision",
      "Web Development",
      "Next.js",
      "Python",
      "Embedded Systems",
      "Machine Learning",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
