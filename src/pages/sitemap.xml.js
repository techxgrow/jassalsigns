import { data } from '../../assets/data.js';

const URL = 'https://www.jassalsignsedm.com';

function generateSiteMap() {
  const currentDate = new Date().toISOString().split('T')[0];

  // 1. Static Pages
  const staticPages = [
    { path: '', changefreq: 'daily', priority: '1.0' },
    { path: 'about', changefreq: 'monthly', priority: '0.8' },
    { path: 'contact', changefreq: 'monthly', priority: '0.8' },
    { path: 'services', changefreq: 'weekly', priority: '0.8' },
    { path: 'franchise', changefreq: 'monthly', priority: '0.8' },
    { path: 'gallery', changefreq: 'weekly', priority: '0.8' },
    { path: 'blogs', changefreq: 'weekly', priority: '0.8' },
    { path: 'products', changefreq: 'weekly', priority: '0.9' }
  ];

  const staticUrls = staticPages.map(page => `
  <url>
    <loc>${URL}/${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  // 2. Dynamic Product Pages
  const productKeys = Object.keys(data.productPage);
  const productUrls = productKeys.map(key => `
  <url>
    <loc>${URL}/products/${key}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');

  // 3. Dynamic Blog Pages
  const blogUrls = data.blogPage.map(blog => `
  <url>
    <loc>${URL}/blogs/${blog.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');

  // 4. City Pages
  const cities = ['EDMONTON', 'CALGARY', 'SURREY', 'CLOVERDALE', 'ABBOTSFORD'];
  const cityUrls = cities.map(city => `
  <url>
    <loc>${URL}/citypage/${city.toLowerCase()}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${city === 'EDMONTON' ? '0.9' : '0.8'}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticUrls}${productUrls}${blogUrls}${cityUrls}
</urlset>
`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
