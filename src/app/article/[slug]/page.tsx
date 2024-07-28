import { MdxComponents } from "@/app/components/MdxComponent";
// import Toc from "@/app/components/Toc";
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
    <div className="flex justify-between">
      <article className="w-96 flex-grow">
        {blog && (
          <MDXRemote
            source={blog.content}
            options={options}
            components={MdxComponents}
          />
        )}

        <div className="mb-4 mt-16 text-right text-gray-400">
          <span>Last Modify:</span> <span>{blog?.modifiedTime}</span>
        </div>
      </article>

      {/* <div className="sticky top-28 ml-16 hidden h-full w-64 xl:block">
        <Toc />
      </div> */}
    </div>
  );
}

export async function generateStaticParams() {
  const blogs: Blogs = await getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
