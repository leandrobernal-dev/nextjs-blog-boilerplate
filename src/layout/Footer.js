"use client";

const { SOCIALS } = require("@/config/config");
import SocialLinks from "@/components/SocialLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="my-12 mt-auto flex flex-col items-center gap-4 border-t border-t-orange-400 pt-2 sm:flex-row sm:justify-between">
      <p>Copyright © 2023 All rights reserved.</p>

      <span className="flex justify-center gap-2 hover:text-orange-500">
        <SocialLinks />
      </span>
    </footer>
  );
}
