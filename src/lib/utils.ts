import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { allPosts } from "contentlayer/generated";
import { Feed } from 'feed';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function generateRssFeed(): Promise<string> {
  const site_url = 'https://mengqi92.github.io'

  const feedOptions = {
    title: 'Blog posts | RSS Feed',
    description: 'Welcome to this blog posts!',
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      atom: `${site_url}/atom.xml`
    }
  };
  const feed = new Feed(feedOptions);

  allPosts.map((post) => {
    feed.addItem({
      title: post.title,
      id: `${site_url}/posts/${post.slugAsParams}`,
      link: `${site_url}/posts/${post.slugAsParams}`,
      description: post.description,
      date: new Date(post.modifiedDate),
      published: new Date(post.createdDate),
    });
  })

  return feed.atom1();
}