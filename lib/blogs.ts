import { TransformString } from "@/lib/utils";
import { Blog, Blogs } from "@/types/blogs";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const blogsDirectory = path.join(process.cwd(), "blogs");

export async function getAllBlogs() {
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
        createdTime: data.createdTime,
        modifiedTime: data.modifiedTime,
        isPublish: data.isPublish ?? true,
        content,
      };
    }),
  );

  return blogs.filter((blog) => blog.isPublish);
}

export async function generateSearchIndex() {
  const blogs = await getAllBlogs();

  fs.writeFileSync("public/searchIndex.json", JSON.stringify(blogs));
}

export async function getCurBlog(slug: string) {
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
          createdTime: data.createdTime,
          modifiedTime: data.modifiedTime,
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

export async function getAllTags() {
  const blogsDirectory = path.join(process.cwd(), "blogs");
  const fileNamesArr = await fs.promises.readdir(blogsDirectory);

  const tags: string[] = [];

  await Promise.all(
    fileNamesArr.map(async (filename) => {
      const fullPath = path.join(blogsDirectory, filename);
      const fileContents = await fs.promises.readFile(fullPath, "utf8");
      // 解析 mdx 内的 yaml 文本
      const { data } = matter(fileContents);

      if (data.isPublish === false) return;

      data.tag.forEach((item: string) => {
        item = TransformString(item);

        if (!tags.includes(item)) tags.push(item);
      });
    }),
  );

  tags.sort();

  return tags;
}

export async function getAllBlogsByTag(tag: string) {
  const fileNamesArr = await fs.promises.readdir(blogsDirectory);

  const blogs: Blogs = [];

  await Promise.all(
    fileNamesArr.map(async (filename) => {
      const fullPath = path.join(blogsDirectory, filename);
      const fileContents = await fs.promises.readFile(fullPath, "utf8");
      // 解析 mdx 内的 yaml 文本
      const { data, content } = matter(fileContents);

      if (data.isPublish === false) return;

      data.tag.forEach((item: string) => {
        item = TransformString(item);

        if (item === tag) {
          blogs.push({
            metadata: data,
            title: data.title,
            slug: data.slug,
            createdTime: data.createdTime,
            modifiedTime: data.modifiedTime,
            content,
          });
        }
      });
    }),
  );

  return blogs;
}