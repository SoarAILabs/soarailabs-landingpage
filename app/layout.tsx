import type React from "react";
import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import { Suspense } from "react";
import { RootProvider } from "fumadocs-ui/provider/next";
import { ConditionalNavbar } from "@/components/conditional-navbar";
import Footer from "@/components/footer";
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
  title: "Soar AI Labs - Beyond the Conflicts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${instrumentSans.className} antialiased flex flex-col min-h-screen gradient-bg`}
      >
        <RootProvider theme={{ enabled: false }}>
          <ConditionalNavbar />
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
