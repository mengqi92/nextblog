import { generateRssFeed } from "@/lib/utils";

export async function GET() {
    const feed = await generateRssFeed();
    return new Response(feed.xml({indent: true}), {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8'
        },
    });
}

export async function getStaticProps() {
}

