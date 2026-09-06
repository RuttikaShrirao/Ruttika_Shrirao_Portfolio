import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexmorgan.dev"),
  title: "Ruttika Shrirao — Full Stack Developer | MERN Stack Engineer",
  description:
    "Full Stack Developer with 3 years of experience building production-ready applications with React, Next.js, Node.js, MongoDB, Redis and AI integrations. Available for Full Stack, MERN, Backend and Frontend roles.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Backend Developer",
    "AI Integration",
    "Software Engineer",
  ],
  authors: [{ name: "Ruttika Shrirao" }],
  creator: "Ruttika Shrirao",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Ruttika Shrirao — Full Stack Developer",
    description:
      "3 years of experience building scalable, AI-powered web applications with React, Node.js, MongoDB and more.",
    siteName: "Ruttika Shrirao Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ruttika Shrirao — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruttika Shrirao — Full Stack Developer",
    description:
      "3 years of experience building scalable, AI-powered web applications.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
