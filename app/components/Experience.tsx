import { education, experience, skills } from "@/data/site";
import { Chip, Section } from "./Section";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Five years shipping backends for money-critical products.">
      <ol className="relative space-y-4 border-l border-line pl-6 md:pl-8">
        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            <span className="absolute -left-[29px] top-6 size-2.5 rounded-full border border-brand bg-bg md:-left-[37px]" />
            <Reveal delay={i * 60}>
              <article className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-white/20 md:p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-semibold text-ink">
                    {job.company} <span className="font-normal text-mute">· {job.role}</span>
                  </h3>
                  <span className="font-mono text-xs text-mute">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-mute">{job.blurb}</p>
                {"links" in job && job.links && (
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    {job.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-brand-soft hover:text-ink">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-sub">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-mute" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 60}>
            <div className="h-full rounded-xl border border-line bg-surface p-5">
              <h3 className="mb-3 text-sm font-medium text-ink">{g.group}</h3>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal delay={300}>
          <div className="h-full rounded-xl border border-line bg-surface p-5">
            <h3 className="mb-3 text-sm font-medium text-ink">Education</h3>
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="text-sm text-sub">{e.degree}</p>
                  {"period" in e && <p className="font-mono text-xs text-mute">{e.period}</p>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
