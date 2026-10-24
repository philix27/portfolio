import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section(props: { id?: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={props.id} className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-soft">{props.eyebrow}</p>
          <h2 className="mb-10 max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {props.title}
          </h2>
        </Reveal>
        {props.children}
      </div>
    </section>
  );
}

export function Chip(props: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-mute">
      {props.children}
    </span>
  );
}
