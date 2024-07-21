import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-screen h-14 mb-5 flex justify-between items-center px-32 cursor-pointer">
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
