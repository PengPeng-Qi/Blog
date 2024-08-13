import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "碰碰漆的博客 - Projects",
  keywords: ["Prettier 配置", "Prettier Config", "Next.js 模板", "Next.js Template", "demos", "css demo", "前端 demo"],
};

export default function Page() {
  return (
    <div className="cursor-pointer">
      <div className="mb-6 text-xl font-medium">Projects</div>

      <div className="text mt-9">
        <Button variant="link" className="block pl-0">
          <Link href="https://www.npmjs.com/package/coder-prettier-config" target="_blank">
            Prettier Config
          </Link>
        </Button>
        <Button variant="link" className="block pl-0">
          <Link href="https://pengpeng-qi.github.io/nextjs-tailwind-starter-template/" target="_blank">
            <span className="font-medium">Next.js Tailwind Starter Template</span>
          </Link>
        </Button>
        <Button variant="link" className="block pl-0">
          <Link href="https://pengpeng-qi.github.io/100-days-demo/" target="_blank">
            <span className="font-medium">100 Days Demo</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
