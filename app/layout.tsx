import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-pressStart2p",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Paillart Amaury - Portfolio",
  description: "Développeur FullStack Next.JS / Laravel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
