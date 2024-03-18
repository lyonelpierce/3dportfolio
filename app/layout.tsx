import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Lyonel Pierce | Full Stack Web Developer - Web Designer",
  description: "Full Stack Web Developer - Web Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`dark:bg-[#1f1f1f] dark:text-white h-screen ${GeistSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
