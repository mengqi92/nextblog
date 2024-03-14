import createMDX from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // show remote images
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.mengqi.life',
                port: ''
            },
        ],
    },

    // mathjax support
    pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
    // Support loading `.md`, `.mdx`:
    webpack(config, options) {
        config.module.rules.push({
            test: /\.mdx?$/,
            use: [
                // The default `babel-loader` used by Next:
                options.defaultLoaders.babel,
                {
                    loader: "@mdx-js/loader",
                    /** @type {import('@mdx-js/loader').Options} */
                    options: {
                        /* jsxImportSource: …, otherOptions… */
                        remarkPlugins: [remarkMath],
                        rehypePlugins: [rehypeKatex]
                    },
                },
            ],
        });
        return config;
    },
}
const withMDX = createMDX({
        extension: /\.mdx?$/,
        // Add markdown plugins here, as desired
        options: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        },
    })

export default withMDX(nextConfig)