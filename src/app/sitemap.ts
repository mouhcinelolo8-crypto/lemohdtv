import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lemotv.in'; // Replace with actual production domain

  const routes = [
    '',
    '/lemotv-usa',
    '/lemotv-canada',
    '/pricing',
    '/channels',
    '/reseller',
    '/setup-guides',
    '/events-updates',
    '/contact',
    '/terms-of-service',
    '/privacy-policy',
    '/dmca',
    '/refund-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : route.includes('lemotv-') ? 0.9 : 0.8,
  }));
}
