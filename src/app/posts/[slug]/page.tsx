import { MdxComponents } from "@/app/components/MdxComponent";
import { getCurBlog } from "@/app/lib/blogs";
import { Props } from "@/app/types/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export default async function Page({ params: { slug } }: Readonly<Props>) {
  const blog = await getCurBlog(slug);

  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [() => rehypePrettyCode({ theme: "github-dark" })],
    },
  };

  return (
    <div className="mx-32 mb-16">
      <article className="prose mx-auto dark:prose-invert">
        {blog && (
          <MDXRemote
            source={blog.content}
            options={options}
            components={MdxComponents}
          />
        )}
      </article>
    </div>
  );
}
