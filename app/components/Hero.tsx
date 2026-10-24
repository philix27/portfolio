import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { site, stats } from "@/data/site";

const social = [
  { href: site.github, label: "GitHub", Icon: FaGithub },
  { href: site.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: `mailto:${site.email}`, label: "Email", Icon: MdEmail },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(94,106,210,0.28),transparent)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto w-full max-w-5xl px-5 md:px-8">
        <div className="animate-rise flex items-center gap-3">
          <Image src="/profile2.png" alt="Felix Eligbue" width={44} height={44} priority className="size-11 rounded-full border border-line object-cover" />
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-sub">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
            Open to backend roles
          </span>
        </div>
        <h1 className="animate-rise mt-6 max-w-3xl bg-gradient-to-b from-ink to-ink/60 bg-clip-text text-4xl font-semibold leading-[1.05] tracking-tight text-transparent [animation-delay:100ms] sm:text-5xl md:text-7xl">
          Backend engineer building fintech that moves money reliably.
        </h1>
        <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-mute [animation-delay:200ms] md:text-lg">
          {site.summary}
        </p>
        <div className="animate-rise mt-8 flex flex-wrap items-center gap-3 [animation-delay:300ms]">
          <a href={`mailto:${site.email}`} className="rounded-md bg-brand px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] transition hover:bg-brand-soft">
            Get in touch
          </a>
          <a href={site.resume} className="rounded-md border border-line bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-white/[0.07]">
            Download résumé
          </a>
          <div className="ml-1 flex items-center gap-1">
            {social.map(({ href, label, Icon }) => (
              <a key={label} href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="grid size-10 place-items-center rounded-md text-lg text-mute transition hover:bg-white/5 hover:text-ink">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <dl className="animate-rise mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line [animation-delay:400ms] sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-5 py-4">
              <dt className="text-xs text-mute">{s.label}</dt>
              <dd className="mt-1 text-xl font-semibold text-ink">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
