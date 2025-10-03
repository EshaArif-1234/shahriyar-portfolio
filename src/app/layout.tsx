import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darphic Designer | Creative Portfolio",
  description: "Professional portfolio showcasing innovative design work, creative projects, and artistic vision. Specializing in digital design, branding, and creative direction.",
  keywords: ["designer", "creative", "portfolio", "digital design", "branding", "art direction", "visual design"],
  authors: [{ name: "Darphic Designer" }],
  creator: "Darphic Designer",
  publisher: "Darphic Designer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://darphic-designer.com"),
  openGraph: {
    title: "Darphic Designer | Creative Portfolio",
    description: "Professional portfolio showcasing innovative design work and creative vision",
    url: "https://darphic-designer.com",
    siteName: "Darphic Designer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Darphic Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darphic Designer | Creative Portfolio",
    description: "Professional portfolio showcasing innovative design work and creative vision",
    images: ["/og-image.jpg"],
    creator: "@darphicdesigner",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
