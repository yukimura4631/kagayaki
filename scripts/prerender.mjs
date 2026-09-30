import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import salon from '../src/data/salonData.js';
import seo from '../src/data/seo.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const configuredUrl = seo.siteUrl.trim();
let siteUrl;
if (configuredUrl) {
  const url = new URL(configuredUrl);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash) throw new Error('seo.siteUrl must be an HTTPS site origin.');
  siteUrl = url.origin + '/';
}
// Load the same React components as the browser; effects do not run during rendering.
const server = await createServer({root,configFile:false,plugins:[react()],server:{middlewareMode:true},appType:'custom'});
let markup;
try {
  const {default: App} = await server.ssrLoadModule('/src/App.jsx');
  markup = renderToString(React.createElement(App));
} finally { await server.close(); }
const business = {
  '@context':'https://schema.org', '@type':'BeautySalon',
  name:salon.shop.name, description:seo.description,
  telephone:'+81' + salon.shop.phone.replace(/-/g,'').slice(1),
  address:{'@type':'PostalAddress',addressCountry:'JP',addressRegion:'千葉県',addressLocality:'船橋市',streetAddress:salon.shop.addressLine1.replace('千葉県船橋市','')+' '+salon.shop.addressLine2},
  priceRange:salon.campaign.basePrice, currenciesAccepted:'JPY',
  paymentAccepted:salon.shop.payment, sameAs:[salon.reservation.lineUrl],
};
// Only emit hours when the visible data matches this verified schedule.
if (salon.shop.hours === '10:00〜18:00' && salon.shop.closed === '毎週水曜日') {
  business.openingHoursSpecification = [{ '@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Thursday','Friday','Saturday','Sunday'],opens:'10:00',closes:'18:00' }];
}
const tags = [
  '<meta property="og:type" content="website" />',
  '<meta property="og:locale" content="ja_JP" />',
  '<meta property="og:site_name" content="'+escapeHtml(salon.shop.name)+'" />',
  '<meta property="og:title" content="'+escapeHtml(seo.title)+'" />',
  '<meta property="og:description" content="'+escapeHtml(seo.description)+'" />',
  '<meta name="twitter:card" content="summary_large_image" />',
];
if (siteUrl) {
  business.url = siteUrl;
  business['@id'] = siteUrl+'#salon';
  business.logo = new URL('assets/brand.png',siteUrl).href;
  tags.push('<link rel="canonical" href="'+escapeHtml(siteUrl)+'" />', '<meta property="og:url" content="'+escapeHtml(siteUrl)+'" />','<meta property="og:image" content="'+escapeHtml(new URL('assets/concept.png',siteUrl).href)+'" />','<meta property="og:image:alt" content="Face Beauty かがやきのフェイスケアのイメージ" />');
}
tags.push('<script type="application/ld+json">'+JSON.stringify(business).replace(/</g,'\u003c')+'</script>');
const htmlPath = path.join(root,'dist/index.html');
let html = await fs.readFile(htmlPath,'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('Expected fresh Vite build before prerender.');
html = html.replace(/<title>.*?<\/title>/,'<title>'+escapeHtml(seo.title)+'</title>').replace(/<meta name="description" content="[^"]*" \/>/,'<meta name="description" content="'+escapeHtml(seo.description)+'" />').replace('<div id="root"></div>','<div id="root">'+markup+'</div>').replace('</head>',tags.join('\n')+'\n</head>');
await fs.writeFile(htmlPath,html);
await fs.writeFile(path.join(root,'dist/robots.txt'),'User-agent: *\nAllow: /\n'+(siteUrl?'\nSitemap: '+siteUrl+'sitemap.xml\n':''));
if (siteUrl) await fs.writeFile(path.join(root,'dist/sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>'+escapeHtml(siteUrl)+'</loc></url></urlset>\n');
console.log('Prerendered complete page, metadata, business schema and robots.txt.'+(siteUrl?' Canonical and sitemap added.':' Set src/data/seo.js siteUrl to enable canonical and sitemap.'));
