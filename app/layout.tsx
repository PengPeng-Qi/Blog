import ArtDots from "@/components/ArtDots";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
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
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${jetBrains_mono.variable} bg-zinc-50 text-gray-700 dark:bg-neutral-950 dark:text-gray-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <div className="mx-8 mt-16 sm:mx-12 lg:mx-32">{children}</div>
          <Toaster />

          <ArtDots />
          {process.env.NODE_ENV === "production" ? <Analytics /> : <></>}
        </ThemeProvider>
      </body>
    </html>
  );
}
