import { getAllTags } from "../lib/blogs";

export default async function Tags() {
  const tags = await getAllTags();

  return (
    <div className="mt-8">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="mb-2 mr-2 cursor-pointer rounded-lg bg-slate-500 px-3 py-1 text-xs"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
