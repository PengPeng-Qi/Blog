import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const jetBrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jet-brains-mono",
});

export const metadata: Metadata = {
  title: `碰碰漆的博客`,
  description: "Blog 博客 个人博客 PengPengQ 碰碰漆 漆鹏的博客 碰碰漆的博客",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrains_mono.variable} bg-zinc-50 text-black dark:bg-neutral-900 dark:text-slate-100`}
      >
        <Header />

        <div className="mx-8 mt-16 sm:mx-12 lg:mx-32">{children}</div>

        {process.env.NODE_ENV === "production" ? <Analytics /> : <></>}
      </body>
    </html>
  );
}
