import Header from "@/app/components/Header";
import { getCurBlog } from "@/app/lib/blogs";
import { Props } from "@/app/types/blogs";
import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => <Image className="rounded-lg" {...props} alt="" />,
  Header,
};

export default async function Page({ params: { slug } }: Readonly<Props>) {
  const blog = await getCurBlog(slug);

  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [() => rehypePrettyCode({ theme: "github-dark" })],
    },
  };

  return (
    <div className="mx-32">
      <article className="prose dark:prose-invert">
        {blog && (
          <MDXRemote
            source={blog.content}
            options={options}
            components={mdxComponents}
          />
        )}
      </article>
    </div>
  );
}
