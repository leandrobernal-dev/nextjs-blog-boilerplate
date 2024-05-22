"use client";

import { SITE } from "@/config/config";
import Link from "next/link";
import { Search } from "lucide-react";
import { NavMenu } from "@/components/Menu";

export default function Nav() {
  const navLinks = [
    { name: "Posts", href: "/posts" },
    { name: "About", href: "/about" },
    { name: "Tags", href: "/tags" },
    { name: "Search", href: "/search", icon: <Search />, useIcon: true },
  ];

  return (
    <header>
      <div className="relative flex items-center justify-between py-10 pb-8 sm:flex sm:justify-between">
        <span className="text-2xl font-black">
          <a href="/">{SITE.logo}</a>
        </span>

        <nav className="flex justify-center">
          <NavMenu navLinks={navLinks} />

          <ul className={`hidden items-center gap-4 sm:flex`}>
            {navLinks.map((link) => (
              <li key={link.href} className="hover:text-primary-500">
                <a href={link.href}>{link.useIcon ? link.icon : link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
