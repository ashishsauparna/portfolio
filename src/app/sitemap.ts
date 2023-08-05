import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.ashishsauparna.in/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.ashishsauparna.in/my-reads',
      lastModified: new Date(),
    },
    {
      url: 'https://www.ashishsauparna.in/about-me',
      lastModified: new Date(),
    },
    {
    url: 'https://www.ashishsauparna.in/projects',
    lastModified: new Date(),
    },
    {
    url: 'https://www.ashishsauparna.in/projects/font-swap-figma-plugin',
    lastModified: new Date(),
    },
  ]
}