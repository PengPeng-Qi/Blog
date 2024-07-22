import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{post.title}</h1>

        <time dateTime={post.date} className="mb-1 text-xs">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>

      <article className="prose m-auto dark:prose-invert">
        <MDXContent components={mdxComponents} />
      </article>
    </>
  );
};

export default PostLayout;
