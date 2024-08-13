import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function GitHubIcon() {
  return (
    <div className="group relative flex items-center">
      <Link href="https://github.com/PengPeng-Qi" className="flex items-center" target="_blank">
        <GitHubLogoIcon className="h-5 w-5 text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50" />
      </Link>
      <div className="absolute left-2 top-8 hidden p-2 text-xs group-hover:block">Github</div>
    </div>
  );
}
