import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        className={
          (inter.className,
          "bg-zinc-50 text-black dark:bg-neutral-900 dark:text-slate-100")
        }
      >
        <Header />

        <div>{children}</div>
      </body>
    </html>
  );
}
