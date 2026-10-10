import { MetadataRoute } from 'next'

const BASE_URL = 'https://portfolio.thestrikerhub.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/#about`, lastModified: new Date() },
    { url: `${BASE_URL}/#projects`, lastModified: new Date() },
    { url: `${BASE_URL}/#skills`, lastModified: new Date() },
    { url: `${BASE_URL}/#experience`, lastModified: new Date() },
    { url: `${BASE_URL}/#contact`, lastModified: new Date() },
  ]
}
