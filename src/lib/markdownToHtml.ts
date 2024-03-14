import remarkMath from 'remark-math';
import rehypeKatex from "rehype-katex";
import rehypeDocument from 'rehype-document'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { unified } from 'unified'

export default async function markdownToHtml(markdown: string, math: boolean) {
  let result;
  if (math) {
    result = await unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypePrettyCode)
      .use(rehypeDocument, {
        // Get the latest one from: <https://katex.org/docs/browser>.
        css: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css'
      })
      .use(rehypeKatex)
      .use(rehypeStringify)
      .process(markdown);
  } else {
    result = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypePrettyCode)
      .use(rehypeStringify)
      .process(markdown);
  }
  return result.toString();
}
