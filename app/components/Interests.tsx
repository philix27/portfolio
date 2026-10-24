import { interests } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Interests() {
  return (
    <Section id="interests" eyebrow="Interests" title="What I'm digging into.">
      <div className="grid gap-3 sm:grid-cols-3">
        {interests.map((item, i) => (
          <Reveal key={item} delay={i * 80} className="h-full">
            <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-white/20">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-soft" />
              <p className="font-medium text-ink">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
