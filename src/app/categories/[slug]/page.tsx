import { PageProps } from ".next/types/app/layout";
import { MoreStories } from "@/app/_components/more-stories";
import { allDocuments } from "contentlayer/generated";
import { notFound } from "next/navigation";

function getPostsByCategory(category: string) {
    const posts = allDocuments.filter((doc) => doc.category === category);

    if (!posts) notFound()

    return posts;
}

const page = ({ params }: PageProps) => {
    const category = decodeURIComponent(params.slug);
    const posts = getPostsByCategory(category)
    return (
        <>
            <h1>{category}</h1>,
            {posts && posts.length > 0 && <MoreStories posts={posts} />}
        </>
    );
}

export default page;