import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Header from "./Header";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className: string;
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, className, children }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingId = children?.toString().replaceAll(" ", "-") ?? "";

  return (
    <div className="group relative cursor-pointer">
      <a
        href={"#" + headingId}
        className="z-2 absolute -left-8 w-8 text-center opacity-0 group-hover:opacity-100"
      >
        #
      </a>
      <div className="-z-2 absolute -left-8 w-8"></div>
      <HeadingTag id={headingId} className={className}>
        {children}
      </HeadingTag>
    </div>
  );
};

interface MDXComponentsProps {
  [key: string]: React.FC<any>;
}

export const MdxComponents: MDXComponentsProps = {
  h1: (props) => (
    <Heading
      level={1}
      className="mb-4 mt-6 text-4xl font-semibold"
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      level={2}
      className="mb-4 mt-6 border-b-2 border-gray-200 pb-2 text-3xl font-medium"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading level={3} className="mb-4 mt-6 text-2xl font-medium" {...props} />
  ),
  h4: (props) => (
    <Heading level={4} className="mb-4 mt-6 text-xl font-medium" {...props} />
  ),
  h5: (props) => (
    <Heading level={5} className="mb-4 mt-6 text-lg font-medium" {...props} />
  ),
  h6: (props) => (
    <Heading level={6} className="mb-4 mt-6 text-base font-medium" {...props} />
  ),
  a: ({ href, children }) => (
    <Link
      href={href as string}
      className="text-light-primary underline-offset-4 hover:underline dark:text-dark-primary"
    >
      {children}
    </Link>
  ),
  ul: (props) => <ul className="mb-4 mt-0 list-disc pl-6" {...props} />,
  ol: (props) => <ol className="mb-4 mt-0 list-decimal pl-8" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  pre: (props) => (
    <pre className="my-4 overflow-x-auto rounded-2xl py-4" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l-4 border-gray-600 bg-gray-100 p-2 pl-4 dark:border-gray-400 dark:bg-neutral-950"
      {...props}
    />
  ),
  code: (props) => <code className="rounded-md px-4 font-medium" {...props} />,
  Image: (props) => {
    return props.fill ? (
      <div className="relative mx-auto my-5 h-64 w-full lg:h-66vh">
        <Image className="rounded-lg" {...props} alt={props.alt} />
      </div>
    ) : (
      <Image className="my-5 rounded-lg" {...props} alt={props.alt} />
    );
  },
  Header,
};
