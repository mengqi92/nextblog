import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXComponents } from "mdx/types";

const components: MDXComponents = {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="my-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>,
    h2: ({ children }) => <h2 className="my-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>,
    h3: ({children}) => <h3 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>,
    h4: ({children}) => <h4 className="my-4 scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>,
    p: ({children}) => <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>,
    blockquote: ({children}) => <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>,
    ul: ({children}) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>,
    li: ({children}) => <li className="leading-7 list-outside list-decimal">{children}</li>,
    code: ({children}) => <code className="relative rounded my-2 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">{children}</code>,
    lead: ({children}) => <p className="text-xl text-muted-foreground">{children}</p>,
    a: ({ children, href }) => (
        <a href={href} className="text-red-500 hover:text-red-700">{children}</a>
    )
};

interface MarkdownPostProps {
    code: string
}

export function MarkdownPost({ code }: MarkdownPostProps) {
    const Component = useMDXComponent(code);

    return (
        <article className="mdx sm:mx-4">
            <Component components={components} />
        </article>
    )
}