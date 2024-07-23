import { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

export const MdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => <Image className="rounded-lg" {...props} alt="" />,
  Header,
};
