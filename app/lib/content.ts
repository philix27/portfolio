import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const root = path.join(process.cwd(), "content");
const md = new MarkdownIt({ html: false, linkify: true });

export interface IPostMeta {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
}

function read(file: string) {
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { data, html: md.render(content) };
}

export function getPosts(): IPostMeta[] {
  const dir = path.join(root, "blogs");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { data } = read(path.join(dir, f));
      return {
        slug,
        title: data.title ?? slug,
        subtitle: data.subtitle ?? "",
        date: data.date ?? "",
      };
    });
}

export function getPost(slug: string) {
  const file = path.join(root, "blogs", `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, html } = read(file);
  return {
    html,
    meta: {
      slug,
      title: data.title ?? slug,
      subtitle: data.subtitle ?? "",
      date: data.date ?? "",
    } as IPostMeta,
  };
}
