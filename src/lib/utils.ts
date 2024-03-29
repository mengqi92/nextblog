import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { allPosts } from "contentlayer/generated";
import RSS from 'rss';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function generateRssFeed(): Promise<RSS> {
  const site_url = 'https://mengqi92.github.io'

  const feedOptions = {
    title: 'Blog posts | RSS Feed',
    description: 'Welcome to this blog posts!',
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
  };
  const feed = new RSS(feedOptions);

  allPosts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: post.url,
      date: post.createdDate
    });
  })

  return feed;
}