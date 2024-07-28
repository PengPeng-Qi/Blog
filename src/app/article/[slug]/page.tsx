import { MdxComponents } from "@/app/components/MdxComponent";
import Toc from "@/app/components/Toc";
import { getAllBlogs, getCurBlog } from "@/app/lib/blogs";
import { Blogs, Props } from "@/app/types/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export default async function Page({ params: { slug } }: Readonly<Props>) {
  const blog = await getCurBlog(slug);

  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        () =>
          rehypePrettyCode({
            theme: {
              dark: "github-dark",
              light: "github-light-default",
            },
            defaultLang: "plaintext",
          }),
      ],
    },
  };

  return (
    <div>
      <div className="mb-10">
        <div className="mb-2 font-serif text-4xl font-bold">{blog?.title}</div>
        <div className="text text-gray-400">{blog?.createdTime}</div>
      </div>

      <div className="flex justify-between">
        <article className="w-96 flex-grow overflow-x-auto">
          {blog && (
            <MDXRemote
              source={blog.content}
              options={options}
              components={MdxComponents}
            />
          )}

          <div className="mb-8 mt-12 font-sans">
            <div className="mb-1 text-xs text-gray-400">LAST UPDATED:</div>
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

export async function generateStaticParams() {
  const blogs: Blogs = await getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
