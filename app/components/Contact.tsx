import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <Reveal className="mx-auto w-full max-w-5xl px-5 text-center md:px-8">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          Let&apos;s build something dependable.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-mute">
          Open to backend and fintech engineering roles, and interesting collaborations.
        </p>
        <a href={`mailto:${site.email}`} className="mt-8 inline-block rounded-md bg-brand px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-soft">
          {site.email}
        </a>
      </Reveal>
    </section>
  );
}
