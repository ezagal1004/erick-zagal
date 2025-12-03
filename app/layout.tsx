import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erick Zagal | Web Developer & Digital Marketer",
  description: "Web Developer and Digital Marketer specializing in Next.js development and SEO. Helping businesses build their digital presence.",
  keywords: ["web developer", "digital marketing", "SEO", "Next.js", "custom websites", "Erick Zagal"],
  authors: [{ name: "Erick Zagal" }],
  openGraph: {
    title: "Erick Zagal | Web Developer & Digital Marketer",
    description: "Web Developer and Digital Marketer specializing in Next.js development and SEO.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}