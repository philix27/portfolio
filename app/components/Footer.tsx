import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-5 text-sm text-mute md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="font-mono text-xs">Built with Next.js &amp; Tailwind</p>
      </div>
    </footer>
  );
}
