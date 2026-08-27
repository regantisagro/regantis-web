import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://regantisirrigation.com/sitemap.xml",
    host: "https://regantisirrigation.com",
  };
}
