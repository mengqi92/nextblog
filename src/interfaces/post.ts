import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  category: string;
  tags: string[];
  content: string;
  preview?: boolean;
  // LaTeX rendering needed. 
  math?: boolean;
};
