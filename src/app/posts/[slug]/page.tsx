import getAllBlogs from "@/app/lib/blogs";
import { Props } from "@/app/types/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export default async function Page({ params: { slug } }: Readonly<Props>) {
  const res = await getAllBlogs();
  const blog = res.find((blog) => blog.slug === slug);

  // 支持 Gfm 语法
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  };

  return (
    <div className="mx-32">
      <article className="prose dark:prose-invert">
        {blog && <MDXRemote source={blog.content} options={options} />}
      </article>
    </div>
  );
}
