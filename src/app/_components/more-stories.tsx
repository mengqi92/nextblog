import { PostPreview } from "./post-preview";
import { DocumentTypes, Post } from ".contentlayer/generated"
import { parseISO, getYear } from 'date-fns';
import Header from "./header";


type Props = {
  posts: DocumentTypes[];
};

const groupPostsByYear = (posts: Post[]) => {
  const groupedPosts: { [key: number]: Post[] } = {};

  // Group posts by year
  posts.forEach((post) => {
    const year = getYear(parseISO(post.createdDate));
    if (!groupedPosts[year]) {
      groupedPosts[year] = [];
    }
    groupedPosts[year].push(post);
  });

  // Get the sorted years in descending order
  const sortedStringYears = Object.keys(groupedPosts).sort((a, b) => parseInt(b) - parseInt(a));
  const sortedYears: number[] = sortedStringYears.map(year => parseInt(year));

  return { sortedYears, groupedPosts };
};

export function MoreStories({ posts }: Props) {
  const { sortedYears, groupedPosts } = groupPostsByYear(posts);

  return (
    <main>
      <Header />
      <div className="flex flex-col gap-3 mx-auto max-w-3xl px-4 prose md:prose-lg lg:prose-xl dark:prose-invert mb-32">
        {
          sortedYears.map((year: number) => {
            const posts = groupedPosts[year];
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
          })
        }
      </div>
    </main >
  );
}
