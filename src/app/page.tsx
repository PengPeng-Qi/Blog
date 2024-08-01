import { getAllTags } from "@/app/lib/blogs";

export default async function Home() {
  const tags = await getAllTags();

  return (
    <div className="cursor-pointer">
      <div className="mb-5">
        Hi, I&apos;m Qi Peng, Welcome to my blog that record my life ❤️.
      </div>
      <div>My blog will includes article with code, projects and about me.</div>

      <div>
        {tags.map((tag, index) => (
          <span key={index} className="mr-4">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
