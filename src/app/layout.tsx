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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950 h-auto relative`}  >
        <div className="fixed h-screen w-full z-10 top-0 bg-white dark:bg-slate-950 bg-[url(/img/bg-white.png)] dark:bg-[url(/img/bg.png)] bg-center bg-repeat"></div>
        <div className="absolute z-20 top-0 w-full pt-16 text-black dark:text-white">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
