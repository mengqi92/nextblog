import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
    pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
    async redirects() {
        return [
            {
                source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug',
                destination: '/posts/:slug',
                basePath: false,
                permanent: true,
            },
        ]
    },
}

// export default withContentlayer(nextConfig);
export default nextConfig;