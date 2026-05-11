const fs = require('fs');
const path = require('path');

const baseUrl = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || 'https://who-am-i-rho.vercel.app';
const routes = ['/', '/about', '/projects', '/skills', '/experience', '/contact'];
const lastmod = new Date().toISOString().split('T')[0];

const urls = routes
	.map((route) => `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${route === '/' ? '0.9' : '0.7'}</priority>\n  </url>`)
	.join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log('Sitemap written to', outPath);
