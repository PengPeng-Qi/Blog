export type Blog = {
  title: string;
  content: string;
  slug: string;
  metadata: {
    [key: string]: any;
  };
};

export type Blogs = Blog[];

export type Props = {
  params: {
    slug: string;
  };
};
