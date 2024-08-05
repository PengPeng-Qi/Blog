import Fuse, { Expression } from "fuse.js";
import { Blog } from "../types/blogs";

let fuse: Fuse<Blog>;

export async function initializeSearch() {
  const response = await fetch("/searchIndex.json");
  const blogs = await response.json();
  const options = {
    includeScore: true,
    keys: ["title", "content"],
  };
  fuse = new Fuse(blogs, options);
}

export function searchBlogs(query: string | Expression) {
  if (!fuse) {
    throw new Error("Search has not been initialized.");
  }
  return fuse.search(query).map((result) => result.item);
}
