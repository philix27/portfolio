import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getPosts } from "@/lib/content";

export const metadata = { title: "Writing" };

export default function BlogsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-32 md:px-8">
        <h1 className="mb-10 text-4xl font-semibold tracking-tight text-ink">Writing</h1>
        <div className="divide-y divide-line rounded-xl border border-line bg-surface">
          {getPosts().map((p) => (
            <Link key={p.slug} href={`/blogs/${p.slug}`} className="block px-5 py-4 transition-colors hover:bg-white/[0.03]">
              <h2 className="font-medium text-ink">{p.title}</h2>
              <p className="text-sm text-mute">{p.subtitle}</p>
              <p className="mt-1 font-mono text-xs text-mute">{p.date}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
