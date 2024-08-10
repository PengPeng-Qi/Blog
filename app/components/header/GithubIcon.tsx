import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function GitHubIcon() {
  return (
    <Link href={"https://github.com/PengPeng-Qi"} className="flex items-center">
      <GitHubLogoIcon className="h-5 w-5 text-gray-400 hover:text-gray-950 dark:hover:text-gray-50" />
    </Link>
  );
}
