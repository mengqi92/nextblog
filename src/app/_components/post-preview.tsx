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
      <div className="flex flex-col gap-2">
        <div className="group flex flex-row justify-between gap-2">
          <Link className="transition-colors group-hover:text-fg-hover-color" href="/posts/[slug]" as={`/posts/${slug}`}>
            {title}
          </Link>
          <DateFormatter dateString={date} />
        </div>
      </div>
  );
}
