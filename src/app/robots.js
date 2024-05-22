import { SITE } from "@/config/config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: process.env.DOMAIN_NAME + "sitemap.xml",
    host: process.env.DOMAIN_NAME,
  };
}
