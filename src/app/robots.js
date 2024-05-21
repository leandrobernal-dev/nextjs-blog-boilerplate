import { SITE } from "@/config/config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: SITE.website + "sitemap.xml",
    host: SITE.website,
  };
}
