"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { label: "Synchro9ice", href: "/#synchro9ice" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="grid size-6 place-items-center rounded-md bg-brand text-[11px] font-bold">F</span>
          Felix Eligbue
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-mute md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
          <a
            href={site.resume}
            className="rounded-md bg-ink px-3 py-1.5 text-xs font-medium text-bg transition hover:bg-white"
          >
            Résumé
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="grid size-9 place-items-center rounded-md border border-line md:hidden"
        >
          <span className="flex w-4 flex-col gap-1">
            <span className={`h-px bg-ink transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <div
        className={`grid overflow-hidden border-line bg-bg transition-all duration-300 md:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-5 py-3 text-sm">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2.5 text-sub hover:bg-white/5">
                {l.label}
              </Link>
            ))}
            <a href={site.resume} className="rounded-md px-2 py-2.5 text-brand-soft">
              Download résumé
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
