import { MdxComponents } from "@/components/MdxComponent";
import Toc from "@/components/mdx/Toc";
import { getAllBlogs, getCurBlog } from "@/lib/blogs";
import { Blog, Blogs, Props } from "@/types/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      () =>
        rehypePrettyCode({
          theme: {
            dark: "github-dark-default",
            light: "github-light-default",
          },
          defaultLang: "plaintext",
        }),
    ],
  },
};

// 动态生成 metadata
export async function generateMetadata({ params: { slug } }: Props) {
  const blog: Blog | null = await getCurBlog(slug);

  return {
    title: blog?.title,
    keywords: blog?.metadata.tag,
  };
}

// 与动态路由结合使用，在购建时静态生成路由，不是在请求是按需生成路由
export async function generateStaticParams() {
  const blogs: Blogs = await getAllBlogs();

  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function Page({ params: { slug } }: Readonly<Props>) {
  const blog = await getCurBlog(slug);

  return (
    <div>
      <div className="mb-10">
        <div className="mb-2 text-4xl font-bold">{blog?.title}</div>
        <div className="text text-neutral-400">{blog?.createdTime}</div>
      </div>

      <div className="flex translate-y-10 animate-slideUp justify-between opacity-0">
        <article className="w-96 flex-grow overflow-x-auto">
          {blog && <MDXRemote source={blog.content} options={options} components={MdxComponents} />}

          <div className="mb-8 mt-12">
            <div className="mb-1 text-xs text-neutral-400">LAST UPDATED:</div>
            <div>{blog?.modifiedTime}</div>
          </div>
        </article>

        <div className="sticky top-28 ml-16 hidden h-full w-64 xl:block">
          <Toc />
        </div>
      </div>
    </div>
  );
}
