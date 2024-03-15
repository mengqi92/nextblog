import Link from "next/link";
import { PostPreview } from "./post-preview";
import { DocumentTypes, Post } from ".contentlayer/generated"
import { format, parseISO, getYear } from 'date-fns';
import { Key } from "react";


type Props = {
  posts: DocumentTypes[];
};

const groupPostsByYear = (posts: Post[]) => {
  const groupedPosts: { [key: number]: Post[] } = {};

  posts.forEach((post) => {
    const year = getYear(parseISO(post.createdDate));
    if (!groupedPosts[year]) {
      groupedPosts[year] = [];
    }
    groupedPosts[year].push(post);
  });

  return groupedPosts;
};

export function MoreStories({ posts }: Props) {
  const groupedPosts = groupPostsByYear(posts);

  return (
    <main className="w-full px-6 md:max-w-xl">
      <div className="flex flex-col gap-3">
        {Object.entries(groupedPosts).map(([year, posts]) => {
          return (
            <section key={year} className="border-b border-b-zinc-200 pb-4">
              <h2 className="mb-3 text-3xl">{year}</h2>
              {posts.map((post: Post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  date={post.createdDate}
                  slug={post.slugAsParams}
                  previewText="{post.previewText}"
                />))}
            </section>
          )
        })}

        <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
        </div>
      </div>
    </main>
  );
}
