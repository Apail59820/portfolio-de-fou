import type { Metadata } from "next";
import { Press_Start_2P, Roboto_Flex } from "next/font/google";
import "./globals.css";
import React from "react";
import LenisProvider from "@/components/LenisProvider/LenisProvider";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
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
        className={`${robotoFlex.variable} ${pressStart2P.variable}`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
