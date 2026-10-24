import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="font-mono text-sm text-brand-soft">404</p>
        <h1 className="mt-2 text-3xl font-semibold text-ink">Page not found</h1>
        <Link href="/" className="mt-6 inline-block text-sm text-mute hover:text-ink">← Back home</Link>
      </div>
    </main>
  );
}
