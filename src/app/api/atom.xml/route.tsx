import { generateRssFeed } from "@/lib/utils";

export async function GET() {
    const feed = await generateRssFeed();
    return new Response(feed, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8'
        },
    });
}
