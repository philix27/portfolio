import Link from "next/link";
import { getPosts } from "@/lib/content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Writing() {
  const posts = getPosts();
  return (
    <Section id="writing" eyebrow="Writing" title="Notes on backend engineering.">
      <div className="divide-y divide-line rounded-xl border border-line bg-surface">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60}>
            <Link href={`/blogs/${p.slug}`} className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-white/[0.03]">
              <div className="min-w-0">
                <h3 className="truncate font-medium text-ink">{p.title}</h3>
                <p className="truncate text-sm text-mute">{p.subtitle}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-mute transition-transform group-hover:translate-x-1">{p.date} →</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
