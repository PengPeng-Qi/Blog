import { defineDocumentType, makeSource } from "contentlayer/source-files";

// 定义文档的类型
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
  },
  // 动态计算字段
  computedFields: {
    url_path: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  // 需要被初始化文件的位置
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: { remarkPlugins: [], rehypePlugins: [] },
  // 所有的文件都转换完成后的回调函数
  // onSuccess: async (importData) => {
  //   const { allDocuments } = await importData();
  //   console.log("allDocuments", allDocuments.length);
  // },
});
