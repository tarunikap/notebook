import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="animate-fade-in delay-1" style={{ textAlign: 'center', maxWidth: '20rem' }}>
          <p
            className="font-serif"
            style={{ fontSize: '5rem', color: 'var(--border)', fontStyle: 'italic', lineHeight: 1, marginBottom: '1.5rem' }}
          >
            404
          </p>
          <h1
            className="font-serif"
            style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text)', fontStyle: 'italic', marginBottom: '1rem' }}
          >
            This page got lost.
          </h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-3)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Some pages drift away before you can write them down.
          </p>
          <Link
            href="/"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-3)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-3)')}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to writings
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
