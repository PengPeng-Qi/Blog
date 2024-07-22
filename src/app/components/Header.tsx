import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="mb-5 flex h-14 w-screen cursor-pointer items-center justify-between px-32">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={36}
          height={36}
          className="dark:invert"
          priority
        />
      </Link>

      <div className="flex justify-between">
        <Link href={"/"} className="px-3 text-lg">
          Article
        </Link>
      </div>
    </div>
  );
}
