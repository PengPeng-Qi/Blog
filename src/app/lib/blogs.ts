import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Blog, Blogs } from "../types/blogs";

export async function getAllBlogs() {
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

export async function getCurBlog(slug: string) {
  const blogsDirectory = path.join(process.cwd(), "blogs");
  const fileNamesArr = await fs.promises.readdir(blogsDirectory);

  const blog: Blog | null = await Promise.race(
    fileNamesArr.map(async (filename) => {
      const fullPath = path.join(blogsDirectory, filename);
      const fileContents = await fs.promises.readFile(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      if (data.slug === slug) {
        return Promise.resolve({
          metadata: data,
          title: data.title,
          slug: data.slug,
          content,
        });
      } else {
        return new Promise<null>((_, reject) => {
          setTimeout(() => {
            reject(new Error("Time out!"));
          }, 1000);
        });
      }
    }),
  );

  return blog;
}