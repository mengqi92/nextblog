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
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-gray-800 dark:text-gray-200">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg> */}
            <Link href="/categories/[slug]" as={`/categories/${encodeURIComponent(post.category)}`}>{post.category}</Link>
          </div>
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span id="busuanzi_container_page_pv">
              <span id="busuanzi_value_page_pv"></span> 次阅读
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
          </svg>

          {post.tags && post.tags.map(t => (
            <div key={t} className="bg-blue-100 dark:bg-blue-800 rounded-full px-3 py-1 text-blue-700 dark:text-blue-300">
              <Link href="/tags/[tag]" as={`/tags/${encodeURIComponent(t)}`}>
                {t}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-4 mb-10 border-gray-200 dark:border-gray-700"/>
    </>
  );
}
