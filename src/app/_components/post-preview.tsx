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
        <div className="flex flex-col gap-2">
          <Link className="text-2xl font-semibold hover:underline" href="/posts/[slug]" as={`/posts/${slug}`}>
            {title}
          </Link>
          <p className="text-sm text-gray-500">
            <DateFormatter dateString={date} />
          </p>
        </div>
        <p className="text-sm leading-6">
          {previewText}
        </p>
      </div>
  );
}
