import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
    { url: '/privacy-policy', changefreq: 'monthly', priority: 0.6 },
    { url: '/terms-of-use', changefreq: 'monthly', priority: 0.6 },
    { url: '/error', changefreq: 'weekly', priority: 0. }
];

const sitemap = new SitemapStream({ hostname: 'https://commercializer.global' });

streamToPromise(sitemap)
    .then(() => console.log('Sitemap generated successfully'))
    .catch(console.error);

sitemap.pipe(createWriteStream('./public/sitemap.xml'));
links.forEach(link => sitemap.write(link));
sitemap.end();
