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

    pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
}

export default nextConfig;