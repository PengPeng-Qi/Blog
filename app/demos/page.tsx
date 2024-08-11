import Link from "next/link";

export default function Demo() {
  return (
    <div className="cursor-pointer">
      <div className="mb-6 font-medium text-red-600">
        <Link
          href="https://pengpeng-qi.github.io/100-days-demo/"
          target="_blank"
        >
          100 Days Demo
        </Link>
      </div>

      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <span className="font-medium">Dark Mode</span>
      </div>

      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <span className="font-medium">Logo 动画</span>
      </div>
      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <span className="font-medium">背景图</span>
      </div>
    </div>
  );
}
