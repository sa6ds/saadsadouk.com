import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/og"],
      disallow: "/private/",
    },
    sitemap: "https://www.saadsadouk.com/sitemap.xml",
    host: "https://www.saadsadouk.com",
  };
}
