'use client'

import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { Chip, Divider } from "@nextui-org/react";
import { Post } from "contentlayer/generated";

type Props = {
  post: Post;
};

export function PostHeader({ post }: Props) {
  return (
    <>
      <PostTitle>{post.title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="text-sm text-gray-500 leading-none dark:text-gray:400">
          <p className="justify-between">
            <DateFormatter dateString={post.createdDate} />
            <Divider orientation="vertical" />
            <Chip color="primary">{post.category}</Chip>
            <Divider orientation="vertical" />
            <span id="busuanzi_container_page_pv">
              本文总阅读量<span id="busuanzi_value_page_pv"></span>次
            </span>
          </p>
          <p className="">
            {post.tags && post.tags.map(t => (
              <Chip key={t} className="mr-1" variant="flat">{t}</Chip>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
