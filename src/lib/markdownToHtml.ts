import remarkMath from 'remark-math';
import rehypeKatex from "rehype-katex";
import rehypeDocument from 'rehype-document'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export default async function markdownToHtml(markdown: string, math: boolean) {
  let result;
  if (math) {
    result = await unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkRehype)
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
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(markdown);
  }
  return result.toString();
}
