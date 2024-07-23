import getAllBlogs from "@/app/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export default async function Page() {
  const res = await getAllBlogs();

  // 支持 Gfm 语法
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  };

  return (
    <div className="mx-32">
      <article className="prose dark:prose-invert">
        <MDXRemote source={res[0].content} options={options} />
      </article>
    </div>
  );
}
