"use client";

import { SITE } from "@/config/config";
import Link from "next/link";
import { SunMoon, Menu, X, Moon, Search } from "lucide-react";
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
      <div className="relative my-8 border-b border-orange-500/30 pb-8 sm:flex sm:justify-between">
        <span className="text-2xl">
          <Link href="/">{SITE.title}</Link>
        </span>

        <nav className="flex justify-center">
          <button
            className="absolute right-0 top-0 sm:hidden"
            onClick={() => setOpen((pre) => !pre)}
          >
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

            <li className="flex items-center hover:text-orange-500">
              <button
                onClick={() =>
                  document.querySelector("html").classList.toggle("dark")
                }
              >
                <SunMoon className="hover:rotate-12" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
