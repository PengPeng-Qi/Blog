import { Blog } from "@/types/blogs";
import Fuse, { Expression } from "fuse.js";

let fuse: Fuse<Blog>;
let allBlogs: Blog[] = [];

export async function initializeSearch() {
  const response = await fetch("/searchIndex.json");
  const blogs = await response.json();

  const options = {
    includeScore: true,
    keys: ["title", "content"],
  };

  fuse = new Fuse(blogs, options);
  allBlogs = blogs; // 保存所有文章数据
}

export function searchBlogs(query: string | Expression) {
  if (!fuse) {
    throw new Error("Search has not been initialized.");
  }

  return fuse.search(query).map((result) => result.item);
}

// 获取所有的文章
export function getAllBlogs() {
  if (!fuse) {
    throw new Error("Search has not been initialized.");
  }

  return allBlogs;
}
