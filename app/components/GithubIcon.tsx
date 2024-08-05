import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";

export default function GitHubIcon() {
  return (
    <Button variant="ghost">
      <Link href={"https://github.com/PengPeng-Qi"}>
        <GitHubLogoIcon />
      </Link>
    </Button>
  );
}
