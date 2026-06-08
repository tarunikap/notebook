import { getBooks, getMovies, getSongs, getVideos, getRabbitHoles } from '@/lib/shelf';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShelfSection, { ShelfItem } from '@/components/ShelfSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shelf — Notebooks',
  description: 'Books, films, songs, and rabbit holes worth sharing.',
};

export default function ShelfPage() {
  const books      = getBooks();
  const movies     = getMovies();
  const songs      = getSongs();
  const videos     = getVideos();
  const holes      = getRabbitHoles();

  const isEmpty = !books.length && !movies.length && !songs.length && !videos.length && !holes.length;

  const toItems = (arr: any[], map: (x: any) => ShelfItem) => arr.map(map);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main className="flex-1 max-w-2xl mx-auto w-full px-6" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>

        {/* Intro */}
        <div className="animate-fade-in delay-1" style={{ marginBottom: '2.5rem' }}>
          <h1
            className="font-serif"
            style={{ fontSize: '1.75rem', fontWeight: 400, color: 'var(--text)', letterSpacing: '-0.02em', fontStyle: 'italic', marginBottom: '0.5rem' }}
          >
            Shelf
          </h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-3)', fontWeight: 300 }}>
            Things I've read, watched, listened to, and wandered into.
          </p>
        </div>

        {isEmpty ? (
          <p className="font-serif animate-fade-in delay-2" style={{ color: 'var(--text-3)', fontStyle: 'italic' }}>
            Nothing here yet.
          </p>
        ) : (
          <div className="animate-fade-in delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {books.length > 0 && (
              <ShelfSection
                title="Books"
                items={toItems(books, (b) => ({ id: b.slug, primary: b.title, secondary: b.author, note: b.note }))}
              />
            )}

            {movies.length > 0 && (
              <ShelfSection
                title="Movies"
                items={toItems(movies, (m) => ({ id: m.slug, primary: m.title, note: m.note }))}
              />
            )}

            {songs.length > 0 && (
              <ShelfSection
                title="Songs"
                items={toItems(songs, (s) => ({ id: s.slug, primary: s.title, secondary: s.artist, lyric: s.lyric, note: s.note }))}
              />
            )}

            {videos.length > 0 && (
              <ShelfSection
                title="Videos"
                items={toItems(videos, (v) => ({ id: v.slug, primary: v.title, secondary: v.creator, url: v.url, moment: v.moment, note: v.note }))}
              />
            )}

            {holes.length > 0 && (
              <ShelfSection
                title="Rabbit Holes"
                items={toItems(holes, (r) => ({ id: r.slug, primary: r.title, url: r.url, note: r.note }))}
              />
            )}

          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
