export type Blog = {
  title: string;
  content: string;
  metadata: {
    [key: string]: any;
  };
};

export type Blogs = Blog[];
