import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-14 flex justify-between items-center px-32">
      <Link href={"/"} cursor-pointer>
        <Image
          src="/logo.svg"
          alt="logo"
          width={36}
          height={36}
          className="dark:invert"
          priority
        />
      </Link>

      <div className="flex w-60 justify-between cursor-pointer">
        <Link href={"/article"}>Article</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
      </div>
    </div>
  );
}
