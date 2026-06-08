import { getAllWritings } from '@/lib/writings';
import { getCurrentlyEnjoying } from '@/lib/shelf';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WritingsGrid from '@/components/WritingsGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notebooks',
  description: 'A collection of writings, memories, and thoughts.',
};

export default function HomePage() {
  const writings = getAllWritings();
  const enjoying = getCurrentlyEnjoying();
  const hasEnjoying = enjoying.reading || enjoying.watching || enjoying.listening;

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
            Notebooks
          </h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-3)', fontWeight: 300 }}>
            Essays, observations, memories, and passing thoughts.
          </p>
        </div>

        {/* Writings list */}
        <WritingsGrid writings={writings} />

        {/* Currently Enjoying */}
        {hasEnjoying && (
          <div
            className="animate-fade-in delay-3"
            style={{ marginTop: '3.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--border)' }}
          >
            <p
              style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 500, color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}
            >
              Currently Enjoying
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {enjoying.reading && (
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-3)', fontWeight: 300, minWidth: '5.5rem' }}>Reading</span>
                  <span className="font-serif" style={{ fontSize: '0.9375rem', color: 'var(--text-2)', fontStyle: 'italic' }}>{enjoying.reading}</span>
                </div>
              )}
              {enjoying.watching && (
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-3)', fontWeight: 300, minWidth: '5.5rem' }}>Watching</span>
                  <span className="font-serif" style={{ fontSize: '0.9375rem', color: 'var(--text-2)', fontStyle: 'italic' }}>{enjoying.watching}</span>
                </div>
              )}
              {enjoying.listening && (
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-3)', fontWeight: 300, minWidth: '5.5rem' }}>Listening to</span>
                  <span className="font-serif" style={{ fontSize: '0.9375rem', color: 'var(--text-2)', fontStyle: 'italic' }}>{enjoying.listening}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
