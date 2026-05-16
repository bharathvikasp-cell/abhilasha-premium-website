"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Guiding Hands", href: "/guiding-hands" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/donate" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 shadow-sm shadow-lavender-200/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Abhilasha Rehabilitation Center logo"
            width={54}
            height={54}
            priority
            className="h-12 w-12 rounded-2xl object-contain shadow-sm"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold tracking-wide text-plum sm:text-base">
              Abhilasha
            </span>
            <span className="block truncate text-[11px] font-medium text-lavender-700 sm:text-xs">
              Rehabilitation Centre
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-lavender-100 text-lavender-800"
                    : "text-plum/75 hover:bg-lavender-50 hover:text-lavender-800"
                } ${item.label === "Donate" ? "bg-lavender-600 text-white shadow-glow hover:bg-lavender-700 hover:text-white" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-lavender-200 bg-white text-plum shadow-sm transition hover:bg-lavender-50 lg:hidden"
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </nav>

      <div
        className={`grid overflow-hidden border-t border-lavender-100 bg-white/95 transition-all duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  pathname === item.href
                    ? "bg-lavender-100 text-lavender-800"
                    : "text-plum/80 hover:bg-lavender-50"
                } ${item.label === "Donate" ? "bg-lavender-600 text-center text-white shadow-glow hover:bg-lavender-700" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
