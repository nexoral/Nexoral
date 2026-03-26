import { MetadataRoute } from 'next'
import { getProjectsForSitemap } from '@/lib/github/fetchers'

// ISR: Revalidate every 12 hours
export const revalidate = 43200;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nexoral.in'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/founder`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Fetch project pages dynamically from GitHub
  try {
    const projects = await getProjectsForSitemap();
    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project.updatedAt),
      changeFrequency: 'weekly',
      priority: project.featured ? 0.9 : 0.8,
    }));

    return [...staticPages, ...projectPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return static pages only if fetch fails
    return staticPages;
  }
}
