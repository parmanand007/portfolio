import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://portfolio.thestrikerhub.com/sitemap.xml',
    host: 'https://portfolio.thestrikerhub.com',
  }
}
