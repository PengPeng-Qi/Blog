import { CubeIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

export function DemoIcon() {
  return (
    <div className="relative ml-4 flex items-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link href="https://100.qipeng8.cn/" target="_blank">
            <CubeIcon className="h-5 w-5 text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50" />
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="w-12 border-0 bg-transparent p-0 text-center text-xs shadow-none">
          Demos
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export function GitHubIcon() {
  return (
    <div className="relative flex items-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link href="https://github.com/PengPeng-Qi" target="_blank">
            <GitHubLogoIcon className="h-5 w-5 text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50" />
          </Link>
        </HoverCardTrigger>

        <HoverCardContent className="w-12 border-0 bg-transparent p-0 text-center text-xs shadow-none">
          Github
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
