'use client'

import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { Chip } from "@nextui-org/react";

type Props = {
  title: string;
  date: string;
  category: string;
  tags: string[];
};

export function PostHeader({ title, date, category, tags }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
        <div className="mb-6 text-lg">
          <Chip color="primary">{category}</Chip>
        </div>
        {tags.map(t => (
          <Chip key={t} className="mr-1" variant="flat">{t}</Chip>
        ))}
        <span id="busuanzi_container_page_pv">
          本文总阅读量<span id="busuanzi_value_page_pv"></span>次
        </span>

      </div>
    </>
  );
}
