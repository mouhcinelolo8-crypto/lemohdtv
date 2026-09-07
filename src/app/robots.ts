import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://lemohdtv.us'; // Replace with actual production domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
