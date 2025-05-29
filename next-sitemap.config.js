/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.protection-nuisibles.fr',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*'],
};
