import Image from "next/image";
import { projects } from "@/data/projects";
import { Chip, Section } from "./Section";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Side projects, hackathon builds and experiments.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 80} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-white/20">
              <div className="relative aspect-[16/9] overflow-hidden bg-raised">
                <Image src={p.cover} alt="" fill sizes="(min-width:1024px) 320px, (min-width:640px) 45vw, 100vw" className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-mute">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-brand-soft hover:text-ink">
                      Live ↗
                    </a>
                  )}
                  {p.source && (
                    <a href={p.source} target="_blank" rel="noreferrer" className="text-mute hover:text-ink">
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
