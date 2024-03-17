import { PageProps } from ".next/types/app/layout";
import { MoreStories } from "@/app/_components/more-stories";
import { allDocuments } from "contentlayer/generated";
import { notFound } from "next/navigation";

function getPostsByTag(tag: string) {
    const posts = allDocuments.filter(
        (doc) => {
            const tagFound = doc.tags.find((t) => t === tag);
            return tagFound ?? false;
        });

    if (!posts) notFound()

    return posts;
}

const page = ({params}: PageProps) => {
    const tag = decodeURIComponent(params.tag);
    const posts = getPostsByTag(tag)
    return (
        <>
            <h1>{tag}</h1>,
            {posts && posts.length > 0 && <MoreStories posts={posts} />}
        </>
    );
}

export default page;