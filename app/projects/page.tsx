import Link from "next/link";

export default function Page() {
  return (
    <div className="cursor-pointer">
      <div className="mb-6 font-medium text-red-600">Tools</div>

      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <Link href="https://www.npmjs.com/package/coder-prettier-config" target="_blank">
          <span className="font-medium">Prettier Config</span>
        </Link>
      </div>
      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <Link href="https://pengpeng-qi.github.io/nextjs-tailwind-starter-template/" target="_blank">
          <span className="font-medium">Next.js Tailwind Starter Template</span>
        </Link>
      </div>
      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <div className="relative">
          <span className="font-medium">VSCode Extension</span>
          <span className="absolute -right-9 -top-2 rounded-full border border-gray-400 px-1 text-xs text-gray-400">
            to do
          </span>
        </div>
      </div>
    </div>
  );
}
