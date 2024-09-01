import Header from "@/components/header";
import Pre from "@/components/mdx/pre";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className: string;
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, className, children }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingId = children?.toString().replaceAll(" ", "-") ?? "";

  return (
    <HeadingTag id={headingId} className={className}>
      {children}
    </HeadingTag>
  );
};

interface MDXComponentsProps {
  [key: string]: React.FC<any>;
}

export const MdxComponents: MDXComponentsProps = {
  h1: (props) => (
    <Heading level={1} className="my-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props} />
  ),
  h2: (props) => (
    <Heading
      level={2}
      className="my-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props) => <Heading level={3} className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />,
  h4: (props) => <Heading level={4} className="my-4 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />,
  p: (props) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
  a: ({ href, children }) => (
    <Link
      href={href as string}
      className="text-neutral-950 underline decoration-neutral-300 underline-offset-8 transition-colors duration-500 ease-in-out hover:decoration-neutral-800 dark:text-neutral-100 dark:decoration-neutral-800 dark:hover:decoration-neutral-200"
    >
      {children}
    </Link>
  ),
  ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  ol: (props) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
  pre: (props) => <Pre {...props} />,
  code: (props) => (
    <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props} />
  ),
  blockquote: (props) => <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />,
  Image: (props) => <Image className="p-3 sm:p-6" {...props} alt={props.alt} />,
  Header,
};
