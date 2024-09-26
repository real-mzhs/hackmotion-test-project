import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/app/Nav";
import Footer from "./Footer";
import { Suspense } from "react";
import { Providers } from "./provider";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hack Motion",
  description: "Hack Motion Swing Metrics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSans.className}>
      <body className="md:relative">
        <Providers>
          <Nav />
          <Suspense>{children}</Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
