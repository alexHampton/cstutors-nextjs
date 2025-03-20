'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { useState } from "react";
import { LinkName } from "./enums";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Computer Science Tutors",
//   description: "Tutors for the AP Computer Science A course",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [activeLink, setActiveLink] = useState(LinkName.Home);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar activeLink={activeLink} updateActiveLink={setActiveLink} />
        {children}
        <Footer updateActiveLink={setActiveLink} />
      </body>
    </html>
  );
}
