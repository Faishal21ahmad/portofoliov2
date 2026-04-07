import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Layouts/Footer";
import Nav from "@/components/Navbar/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Faishalbahy",
  description: "Personal portfolio website showcasing my skills, projects, and experience as a frontend developer. Explore my work and get in touch!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}  >
        <div className="static w-full pt-16 bg-white dark:bg-slate-950 h-auto">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
