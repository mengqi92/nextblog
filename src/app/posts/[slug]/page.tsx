import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "../../_components/container";
import { PostHeader } from "../../_components/post-header";
import { allDocuments } from "../../../../.contentlayer/generated";
import { MarkdownPost } from "@/app/_components/MarkdownPost";
import { PageProps } from ".next/types/app/posts/[slug]/page";
import '@/lib/katex/katex.min.css'

function getPostBySlug(slug: string) {
  const doc = allDocuments.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound()

  return doc;
}

const page = ({params}: PageProps) => {
  const post = getPostBySlug(params.slug);
  return (
    <main>
      <Container>
        <article className="mx-auto max-w-3xl prose md:prose-lg lg:prose-xl dark:prose-invert mb-32">
          <PostHeader post={post} />
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

  const title = `${post.title}`;

  return {
    openGraph: {
      title,
    },
  };
}