import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function GitHubIcon() {
  return (
    <div className="group relative flex items-center">
      <Link href="https://github.com/PengPeng-Qi" className="flex items-center" target="_blank">
        <GitHubLogoIcon className="h-5 w-5 text-gray-400 hover:text-gray-950 dark:hover:text-gray-50" />
      </Link>
      <div className="absolute left-2 top-8 hidden p-2 text-xs group-hover:block">Github</div>
    </div>
  );
}
