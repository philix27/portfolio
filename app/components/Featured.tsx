import { featured } from "@/data/projects";
import { Reveal } from "./Reveal";

const rows = [
  { id: "SYN-12", t: "Ship onboarding flow", s: "bg-brand", w: "w-24" },
  { id: "SYN-14", t: "Weekly planning notes", s: "bg-amber-400", w: "w-16" },
  { id: "SYN-17", t: "Sync project timelines", s: "bg-emerald-400", w: "w-20" },
  { id: "SYN-21", t: "Review team backlog", s: "bg-mute", w: "w-12" },
];

export function Featured() {
  return (
    <section id="synchro9ice" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 md:p-12">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/25 blur-3xl" />
            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-soft">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                  Featured · Live product
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">{featured.title}</h2>
                <p className="mt-2 text-lg text-sub">{featured.tagline}</p>
                <p className="mt-4 leading-relaxed text-mute">{featured.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-sub">
                  {featured.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-brand-soft" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a href={featured.live} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-bg transition hover:bg-white">
                  Visit synchro9ice.com <span aria-hidden>↗</span>
                </a>
              </div>
              <div aria-hidden className="animate-float rounded-xl border border-line bg-bg/80 p-4 shadow-2xl shadow-black/50">
                <div className="mb-4 flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="ml-3 h-2 w-24 rounded bg-white/10" />
                </div>
                <div className="space-y-2">
                  {rows.map((r) => (
                    <div key={r.id} className="flex items-center gap-3 rounded-md border border-line bg-white/[0.02] px-3 py-2.5">
                      <span className={`size-2 rounded-full ${r.s}`} />
                      <span className="font-mono text-[10px] text-mute">{r.id}</span>
                      <span className="flex-1 truncate text-xs text-sub">{r.t}</span>
                      <span className={`h-1.5 rounded bg-white/10 ${r.w}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
