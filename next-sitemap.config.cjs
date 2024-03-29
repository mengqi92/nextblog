/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://mengqi92.github.io",
    generateRobotsTxt: true,
    exclude: ['/server-sitemap-index.xml', '/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://mengqi92.github.io/server-sitemap.xml', // <==== Add here
            'https://mengqi92.github.io/server-sitemap-index.xml', // <==== Add here
        ],
    },
};