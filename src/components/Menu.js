"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function NavMenu({ navLinks }) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="icon"
          className="border-none bg-transparent p-0 outline-none focus:outline-none sm:hidden"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -right-2 w-48 shadow-lg shadow-black sm:hidden">
        <DropdownMenuGroup>
          {navLinks.map((link) => (
            <DropdownMenuItem
              key={link.href}
              className="p-0"
              onClick={() => setOpen(false)}
            >
              <a
                href={link.href}
                className="h-full w-full p-3 hover:text-primary-500"
              >
                {link.useIcon ? link.icon : link.name}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
