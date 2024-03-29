// app/api/sitemap.xml/route.ts
import { ISitemapField, getServerSideSitemap } from 'next-sitemap'
import { globby } from 'globby'

function addPage(page: string): ISitemapField {
    const path = page.replace('src/content/', '').replace('.js', '').replace('.ts', '').replace('.mdx', '')
    const route = path === '/index' ? '' : path
    return {
        loc: `https://mengqi92.github.io/${route}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 1.0
    }
}

export async function GET(request: Request) {
    const pages = await globby([
        'src/content/**/*{.js,.ts,.mdx}',
        '!node_modules/**/*',
        '!_*.js',
        '!api',
    ])
    console.table(pages);
    const fields = pages.map(addPage);

    return getServerSideSitemap(fields);
}