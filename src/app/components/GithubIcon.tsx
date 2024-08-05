import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function GitHubIcon() {
  return (
    <Link
      href={"https://github.com/PengPeng-Qi"}
      className="rounded-lg py-2 hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      <GitHubLogoIcon width={32} height={16} />
    </Link>
  );
}
