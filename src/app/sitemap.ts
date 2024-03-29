import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://mengqi92.github.io',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // {
        //     url: 'https://mengqi92.github.io/about',
        //     lastModified: new Date(),
        //     changeFrequency: 'monthly',
        //     priority: 0.8,
        // },
        {
            url: 'https://mengqi92.github.io/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}