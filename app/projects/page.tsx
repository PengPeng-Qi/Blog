import Link from "next/link";

export default function Page() {
  return (
    <div className="cursor-pointer">
      <div className="mb-6 font-medium text-red-600">Tools</div>

      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <span className="font-medium">Prettier Config</span>
      </div>
      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <Link
          href="https://pengpeng-qi.github.io/nextjs-tailwind-starter-template/"
          target="_blank"
        >
          Next.js Tailwind Starter Template
        </Link>
        <span className="font-medium"></span>
      </div>
      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <span className="font-medium">VSCode Extension</span>
      </div>
    </div>
  );
}
