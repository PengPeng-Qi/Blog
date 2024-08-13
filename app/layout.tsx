import ArtDots from "@/components/ArtDots";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: `碰碰漆的博客`,
  keywords: ["Blog", "博客", "个人博客", "PengPengQ", "碰碰漆", "漆鹏", "漆鹏的博客", "碰碰漆的博客"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
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
