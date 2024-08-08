import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";

export default function GitHubIcon() {
  return (
    <Button variant="ghost" size="sm">
      <Link href={"https://github.com/PengPeng-Qi"}>
        <GitHubLogoIcon className="h-5 w-5" />
      </Link>
    </Button>
  );
}
