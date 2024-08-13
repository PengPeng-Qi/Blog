export type Blog = {
  title: string;
  content: string;
  slug: string;
  createdTime: string;
  modifiedTime: string;
  isPublish?: Boolean;
  metadata: Record<string, any>;
};

export type Blogs = Blog[];
