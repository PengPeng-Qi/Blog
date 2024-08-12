import { CubeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function GitHubIcon() {
  return (
    <div className="group relative ml-4 flex items-center">
      <Link href="/demos" className="">
        <CubeIcon className="h-5 w-5 text-gray-400 hover:text-gray-950 dark:hover:text-gray-50" />
      </Link>
      <div className="absolute right-2 top-8 hidden p-2 text-xs group-hover:block sm:left-2">
        Demos
      </div>
    </div>
  );
}
