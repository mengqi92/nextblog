import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "../../_components/container";
import Header from "../../_components/header";
import { PostHeader } from "../../_components/post-header";
import { allDocuments } from "../../../../.contentlayer/generated";
import { MarkdownPost } from "@/app/_components/MarkdownPost";
import { PageProps } from ".next/types/app/layout";

function getPostBySlug(slug: string) {
  const doc = allDocuments.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound()

  return doc;
}

const page = ({params}: PageProps) => {
  const post = getPostBySlug(params.slug);
  return (
    <main className="bg-slate-50">
      <Container>
        <Header />
        <article className="prose lg:prose-xl mb-32">
          <PostHeader
            title={post!.title!}
            date={post!.createdDate}
            category={post!.category}
            tags={post!.tags}
            />
          <MarkdownPost code={post!.body.code}/>
        </article>
      </Container>
    </main>
  )
}

export default page;

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example`;

  return {
    openGraph: {
      title,
    },
  };
}

// export async function generateStaticParams() {
//   const posts = getAllPosts();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
