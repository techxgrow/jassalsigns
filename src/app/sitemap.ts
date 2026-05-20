import { MetadataRoute } from "next";
import { data } from "../../assets/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jassalsignsedm.com";

  // Base core pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/services-banner-bg.webp`],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      images: [`${baseUrl}/about-us-signage.jpg`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/franchise`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic products
  const productRoutes: MetadataRoute.Sitemap = Object.keys(data.productPage).map(
    (slug) => ({
      url: `${baseUrl}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      images: [`${baseUrl}/productsimages/${slug}.png`],
    })
  );

  // Dynamic local city pages
  const cityRoutes: MetadataRoute.Sitemap = Object.keys(data.contactPage).map(
    (citySlug) => ({
      url: `${baseUrl}/citypage/${citySlug.toUpperCase()}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  // Dynamic blogs
  const blogRoutes: MetadataRoute.Sitemap = data.blogPage.map((blog: any) => ({
    url: `${baseUrl}/blogs/${blog.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
    images: [`${baseUrl}${blog.image}`],
  }));

  // Excludes transactional "thank-you" pages from sitemap listing to optimize crawl budget
  return [...staticRoutes, ...productRoutes, ...cityRoutes, ...blogRoutes];
}
