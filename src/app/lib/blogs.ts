import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Blogs } from "../types/blogs";

export default async function getAllBlogs() {
  const blogsDirectory = path.join(process.cwd(), "blogs");
  const fileNamesArr = await fs.promises.readdir(blogsDirectory);

  const blogs: Blogs = await Promise.all(
    fileNamesArr.map(async (filename) => {
      const fullPath = path.join(blogsDirectory, filename);
      const fileContents = await fs.promises.readFile(fullPath, "utf8");

      // 解析 mdx 内的 yaml 文本
      const { data, content } = matter(fileContents);

      return {
        metadata: data,
        title: data.title,
        slug: data.slug,
        content,
      };
    }),
  );

  return blogs;
}
