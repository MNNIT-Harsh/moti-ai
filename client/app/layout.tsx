import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Provider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orion AI",
  description: "AI is for the better future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {" "}
      <Provider>
        <body suppressHydrationWarning className={inter.className}>
          {children}
        </body>
      </Provider>
    </html>
  );
}
