import ArtDots from "@/components/art-dots";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { generateSearchIndex } from "@/lib/blogs";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import BaiduAnalytics from "./baidu-analytics";
import "./globals.css";
import GoogleAnalytics from "./google-analytics";
import { WebVitals } from "./web-vitals";

export const metadata: Metadata = {
  title: `碰碰漆的博客`,
  keywords: ["Blog", "博客", "个人博客", "PengPengQ", "碰碰漆", "漆鹏", "漆鹏的博客", "碰碰漆的博客"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  generateSearchIndex(); // 生成 json 文件，用于搜索使用

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* disableTransitionOnChange 在切换夜间模式的时候防止与 shadcn 时机不一致 */}
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Header />
          <div className="mx-5 mt-16 sm:mx-10 lg:mx-32">{children}</div>
          <Toaster />
          <ArtDots />
          {process.env.NODE_ENV === "production" ? (
            <>
              <WebVitals />
              <BaiduAnalytics />
              <GoogleAnalytics />
              <VercelAnalytics />
            </>
          ) : (
            <></>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
