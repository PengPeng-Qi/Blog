import { CubeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function GitHubIcon() {
  return (
    <div className="group relative ml-4 flex items-center">
      <Link href="https://pengpeng-qi.github.io/100-days-demo/" target="_blank">
        <CubeIcon className="h-5 w-5 text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50" />
      </Link>
      <div className="absolute right-2 top-8 hidden p-2 text-xs group-hover:block sm:left-2">Demos</div>
    </div>
  );
}
