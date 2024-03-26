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
            <div className="container mx-auto px-4 md:px-6 py-8">
                <h1 className="text-4xl font-bold text-center mb-8 underline decoration-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                    </svg>
                    {category}
                </h1>
                {posts && posts.length > 0 ? (
                    <div className="space-y-12">
                        <MoreStories posts={posts} />
                    </div>
                ) : (
                    <p className="text-center text-gray-600">当前没有文章。</p>
                )}
            </div>
        </>
    );
}

export default page;