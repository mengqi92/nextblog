import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "../../_components/container";
import { PostHeader } from "../../_components/post-header";
import { MarkdownPost } from "@/app/_components/markdown-post";
import { PageProps } from ".next/types/app/posts/[slug]/page";
import { allDocuments } from 'contentlayer/generated';
import '@/lib/katex/katex.min.css'

function getPostBySlug(slug: string) {
  const doc = allDocuments.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound()

  return doc;
}

export default function page({params}: PageProps) {
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

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [],
    },
    keywords: post.tags,
    twitter: {
      card: 'summary',
      site: '@mengqipei',
      creator: 'Mengqi Pei',
      images: post.coverImage ? [post.coverImage] : [],
    }
  };
}

export async function generateStaticParams() {
  return allDocuments.map(doc => ({
    slug: doc.slugAsParams
  }));
}