import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXComponents } from "mdx/types";
import { Link } from "@nextui-org/react";

const components: MDXComponents = {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
    a: ({ children, href }) => (
        <Link href={href} color="secondary" showAnchorIcon>{children}</Link>
    )
};

interface MarkdownPostProps {
    code: string
}

export function MarkdownPost({ code }: MarkdownPostProps) {
    const Component = useMDXComponent(code);

    return (
        <article className="mdx">
            <Component components={components}/>
        </article>
    )
}