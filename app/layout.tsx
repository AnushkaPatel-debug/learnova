"use client";

import "./globals.css";
import { useEffect } from "react";
import Lenis from "lenis";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en">
      <body className="bg-[#050816] text-white antialiased">
        {children}
      </body>
    </html>
  );
}