'use client'

import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { Post } from "contentlayer/generated";
import Link from "next/link";

type Props = {
  post: Post;
};

export function PostHeader({ post }: Props) {
  return (
    <>
      <PostTitle>{post.title}</PostTitle>
      <div className="flex flex-col justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-4">
          <div className="italic">
            <DateFormatter dateString={post.createdDate} />
          </div>
          <span id="busuanzi_container_page_pv" className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span id="busuanzi_value_page_pv"></span> 次阅读
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1 mt-2 text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
          </svg>

          {post.tags && post.tags.map(t => (
            <div key={t} className="bg-white-200 ring-1 ring-red-500 hover:ring-red-700 hover:text-red-700 dark:bg-red-800 rounded-full px-3 py-1 dark:text-red-300">
              <Link href="/tags/[tag]" as={`/tags/${encodeURIComponent(t)}`}>
                {t}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-4 mb-10 border-gray-200 dark:border-gray-700" />
    </>
  );
}
