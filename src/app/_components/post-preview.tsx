import Link from "next/link";
import DateFormatter from "./date-formatter";
import { IsoDateTimeString } from "contentlayer/core";

type Props = {
  title: string;
  date: IsoDateTimeString;
  slug: string;
  previewText: string;
};

export function PostPreview({
  title,
  date,
  slug,
  previewText
}: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="group flex flex-row justify-between gap-4 items-center py-2 rounded-lg hover:underline hover:underline-offset-8 transition-all duration-300">
        <Link className="text-lg font-semibold transition-colors group-hover:text-red-600" href="/posts/[slug]" as={`/posts/${slug}`}>
          {title}
        </Link>
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}
