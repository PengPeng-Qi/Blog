import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "../components/PostCard";

export default function Home() {
  const posts = allPosts.toSorted((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="mx-32">
      {posts.map((post) => (
        <PostCard key={post.date} {...post} />
      ))}
    </div>
  );
}
