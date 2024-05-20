"use client";

import { SITE } from "@/config/config";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const navLinks = [
    { name: "Posts", href: "/posts" },
    { name: "About", href: "/about" },
    { name: "Search", href: "/search", icon: <Search />, useIcon: true },
  ];
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="relative my-10 pb-8 sm:flex sm:justify-between">
        <span className="text-2xl">
          <Link href="/">{SITE.logo}</Link>
        </span>

        <nav className="flex justify-center">
          <button
            aria-label="Menu"
            className="absolute right-0 top-0 sm:hidden"
            onClick={() => setOpen((pre) => !pre)}
          >
            <span className="hidden">Menu</span>
            {open ? <X /> : <Menu />}
          </button>

          <ul
            className={`${
              open
                ? "flex  flex-col items-center pt-10 sm:flex-row sm:pt-0"
                : "hidden"
            } items-center gap-4 sm:flex`}
          >
            {navLinks.map((link) => (
              <li key={link.href} className="hover:text-orange-500">
                <Link href={link.href}>
                  {link.useIcon ? link.icon : link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
