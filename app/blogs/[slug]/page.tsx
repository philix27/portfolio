import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getPost, getPosts } from "@/lib/content";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return { title: post?.meta.title ?? "Writing" };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-32 md:px-8">
        <p className="font-mono text-xs text-mute">{post.meta.date}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{post.meta.title}</h1>
        <p className="mb-10 mt-2 text-mute">{post.meta.subtitle}</p>
        <div
          className="prose prose-invert max-w-none prose-headings:text-ink prose-a:text-brand-soft prose-code:text-sub prose-pre:border prose-pre:border-line prose-pre:bg-surface"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>
      <Footer />
    </>
  );
}
