import type React from "react";
import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Kite - Beyond the Conflicts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} antialiased`}>
        <Navbar />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
