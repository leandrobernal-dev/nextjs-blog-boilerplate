import { SOCIALS } from "@/config/config";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <>
      {SOCIALS.map((link) => {
        return (
          <Link
            target="_blank"
            className="hover:text-orange-500"
            aria-label={link.name}
            key={link.name}
            href={link.href}
          >
            {link.icon}
          </Link>
        );
      })}
    </>
  );
}
