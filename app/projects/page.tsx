import { Button } from "@/components/ui/button";
import { projectsStructure } from "@/config/projects";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "碰碰漆的博客 - Projects",
  keywords: ["Prettier 配置", "Prettier Config", "Next.js 模板", "Next.js Template", "demos", "css demo", "前端 demo"],
};

export default function Page() {
  return (
    <div className="cursor-pointer">
      <div className="text mt-9">
        {projectsStructure.map(({ label, link }) => {
          return (
            <Button variant="link" className="block pl-0" key={label + link}>
              <Link href={link} target="_blank">
                {label}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
