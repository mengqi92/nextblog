import Link from "next/link";
import { PostPreview } from "./post-preview";
import { DocumentTypes } from ".contentlayer/generated"

type Props = {
  posts: DocumentTypes[];
};

export function MoreStories({ posts }: Props) {
  return (
    <main className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
        {posts.map((post) => (
          <PostPreview 
            key={post.slug}
            title={post.title}
            date={post.createdDate}
            slug={post.slugAsParams}
            previewText="{post.previewText}"
          />
        ))}
      </div>
    </main>
    // <section>
    //   <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
    //     More Stories
    //   </h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
    //     {posts.map((post) => (
    //       <PostPreview
    //         key={post.slug}
    //         title={post.title}
    //         date={post.createdDate}
    //         slug={post.slugAsParams}
    //       />
    //     ))}
    //   </div>
    // </section>
  );
}
