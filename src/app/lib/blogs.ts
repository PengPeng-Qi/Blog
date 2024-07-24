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

      const stats = fs.statSync(fullPath);
      // 文件最后一次修改时间
      const lastModified = stats.mtime.toISOString();

      // 文件创建时间
      const createdAt = stats.birthtime.toISOString();

      const date = new Date(createdAt);
      const offset = 8; // 东八区
      const localDate = new Date(date.getTime() + offset * 60 * 60 * 1000);

      const year = localDate.getUTCFullYear();
      const month = (localDate.getUTCMonth() + 1).toString().padStart(2, "0");
      const day = localDate.getUTCDate().toString().padStart(2, "0");

      const localCreateDate = `${year}-${month}-${day}`;

      // 解析 mdx 内的 yaml 文本
      const { data, content } = matter(fileContents);

      return {
        metadata: data,
        title: data.title,
        slug: data.slug,
        createDate: localCreateDate,
        lastModifyDate: lastModified,
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

      const stats = fs.statSync(fullPath);
      // 文件最后一次修改时间
      const lastModified = stats.mtime.toISOString();

      // 文件创建时间
      const createdAt = stats.birthtime.toISOString();

      const date = new Date(createdAt);
      const offset = 8; // 东八区
      const localDate = new Date(date.getTime() + offset * 60 * 60 * 1000);

      const year = localDate.getUTCFullYear();
      const month = (localDate.getUTCMonth() + 1).toString().padStart(2, "0");
      const day = localDate.getUTCDate().toString().padStart(2, "0");

      const localCreateDate = `${year}-${month}-${day}`;

      if (data.slug === slug) {
        return Promise.resolve({
          metadata: data,
          title: data.title,
          slug: data.slug,
          createDate: localCreateDate,
          lastModifyDate: lastModified,
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
