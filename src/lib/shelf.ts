import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const shelfDir = path.join(process.cwd(), 'content/shelf');

export interface Book   { slug: string; title: string; author: string; note?: string; date: string; }
export interface Movie  { slug: string; title: string; note?: string; date: string; }
export interface Song   { slug: string; title: string; artist: string; lyric?: string; note?: string; date: string; }
export interface Video  { slug: string; title: string; creator: string; url: string; moment?: string; note?: string; date: string; }
export interface RabbitHole { slug: string; title: string; url: string; note?: string; date: string; }
export interface CurrentlyEnjoying { reading?: string; watching?: string; listening?: string; }

function readFolder<T>(sub: string): T[] {
  const d = path.join(shelfDir, sub);
  if (!fs.existsSync(d)) return [];
  return fs
    .readdirSync(d)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(d, f), 'utf8');
      const { data, content } = matter(raw);
      // The body content becomes the note (trim whitespace)
      const bodyNote = content.trim() || undefined;
      return { slug: f.replace(/\.md$/, ''), ...data, note: data.note || bodyNote } as T;
    })
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const getBooks       = (): Book[]       => readFolder<Book>('books');
export const getMovies      = (): Movie[]      => readFolder<Movie>('movies');
export const getSongs       = (): Song[]       => readFolder<Song>('songs');
export const getVideos      = (): Video[]      => readFolder<Video>('videos');
export const getRabbitHoles = (): RabbitHole[] => readFolder<RabbitHole>('rabbit-holes');

export function getCurrentlyEnjoying(): CurrentlyEnjoying {
  const p = path.join(shelfDir, 'currently-enjoying.md');
  if (!fs.existsSync(p)) return {};
  const { data } = matter(fs.readFileSync(p, 'utf8'));
  return { reading: data.reading, watching: data.watching, listening: data.listening };
}
