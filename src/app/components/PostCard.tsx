import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function PostCard(post: Readonly<Post>) {
  return (
    <div className="mb-5">
      <time dateTime={post.date} className="mb-1 text-xs">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>

      <div>
        <Link href={post.url_path}>{post.title}</Link>

        <p>{post.description}</p>
      </div>
    </div>
  );
}
