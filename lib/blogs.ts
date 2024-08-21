import { TransformString } from "@/lib/utils";
import { Blog, Blogs } from "@/types/blogs";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const blogsDirectory = path.join(process.cwd(), "blogs");
const fileNamesArr = await fs.promises.readdir(blogsDirectory);

// 获取每个博客的 Content
const getFileContent = async (filename: string) => {
  const fullPath = path.join(blogsDirectory, filename);
  const fileContents = await fs.promises.readFile(fullPath, "utf8");

  return matter(fileContents);
};

export async function getAllBlogs() {
  const blogs: Blogs = await Promise.all(
    fileNamesArr.map(async (filename) => {
      const { data, content } = await getFileContent(filename);

      return {
        metadata: data,
        title: data.title,
        slug: data.slug,
        createdTime: data.createdTime,
        modifiedTime: data.modifiedTime,
        isPublish: data.isPublish ?? true,
        content,
      };
    })
  );

  return blogs.filter((blog) => blog.isPublish);
}

export async function generateSearchIndex() {
  const blogs = await getAllBlogs();
  fs.writeFileSync("public/searchIndex.json", JSON.stringify(blogs));
}

// 通过 slug 获取文章内容
export async function getCurBlog(slug: string) {
  const blog: Blog | null = await Promise.race(
    fileNamesArr.map(async (filename) => {
      const { data, content } = await getFileContent(filename);

      if (data.slug === slug && data.isPublish !== false) {
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
    })
  );

  return blog;
}

// 获取所有的 tag 信息，并返回降序排列的 tag 数组
export async function getAllTags() {
  const tagsWithCountMap = new Map<string, number>();

  await Promise.all(
    fileNamesArr.map(async (filename) => {
      const { data } = await getFileContent(filename);
      if (data.isPublish === false) return;

      data.tag.forEach((item: string) => {
        item = TransformString(item);

        if (!tagsWithCountMap.has(item)) {
          tagsWithCountMap.set(item, 0);
        }
        tagsWithCountMap.set(item, (tagsWithCountMap.get(item) as number) + 1);
      });
    })
  );

  // 按出现次数降序排列
  const sortedTags = Array.from(tagsWithCountMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map((key) => key[0]);

  return sortedTags;
}

// 通过 tag 查找相关的一系列文章
export async function getAllBlogsByTag(tag: string) {
  const blogs: Blogs = [];

  await Promise.all(
    fileNamesArr.map(async (filename) => {
      const { data, content } = await getFileContent(filename);

      data.tag.forEach((item: string) => {
        item = TransformString(item);

        if (item === tag) {
          blogs.push({
            metadata: data,
            title: data.title,
            slug: data.slug,
            createdTime: data.createdTime,
            modifiedTime: data.modifiedTime,
            isPublish: data.isPublish ?? true,
            content,
          });
        }
      });
    })
  );

  return blogs.filter((blog) => blog.isPublish);
}
