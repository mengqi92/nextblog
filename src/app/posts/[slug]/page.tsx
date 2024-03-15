import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CMS_NAME } from "../../../lib/constants";
import markdownToHtml from "../../../lib/markdownToHtml";
import Alert from "../../_components/alert";
import Container from "../../_components/container";
import Header from "../../_components/header";
import { PostBody } from "../../_components/post-body";
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

// export default async function Post({ params }: Params) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     return notFound();
//   }

//   const content = await markdownToHtml(post.content || "", post.math || false);

//   return (
//     <main className="bg-slate-50">
//       <Alert preview={post.preview} />
//       <Container>
//         <Header />
//         <article className="prose lg:prose-xl mb-32">
//           <PostHeader
//             title={post.title}
//             coverImage={post.coverImage}
//             date={post.date}
//             author={post.author}
//             category={post.category}
//             tags={post.tags}
//           />
//           <PostBody content={content} />
//         </article>
//       </Container>
//     </main>
//   );
// }

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

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

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
