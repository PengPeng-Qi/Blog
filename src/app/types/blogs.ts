export type Blog = {
  title: string;
  content: string;
  slug: string;
  metadata: Record<string, any>;
};

export type Blogs = Blog[];

export type Props = {
  params: {
    slug: string;
  };
};