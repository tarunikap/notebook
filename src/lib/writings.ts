import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dir = path.join(process.cwd(), 'content/writings');

export interface WritingMeta {
  slug: string;
  title: string;
  hook: string;
  date?: string;
}

export interface Writing extends WritingMeta {
  content: string;
}

function ensure() {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export function getAllWritings(): WritingMeta[] {
  ensure();
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(dir, f), 'utf8'));
      return {
        slug: f.replace(/\.md$/, ''),
        title: data.title || 'Untitled',
        hook: data.hook || '',
        date: data.date || null,
      };
    })
    .sort((a, b) => {
      if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
      return 0;
    });
}

export function getWritingBySlug(slug: string): Writing | null {
  ensure();
  const p = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(p)) return null;
  const { data, content } = matter(fs.readFileSync(p, 'utf8'));
  return {
    slug,
    title: data.title || 'Untitled',
    hook: data.hook || '',
    date: data.date || null,
    content,
  };
}

export function getAllSlugs(): string[] {
  ensure();
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
}
