'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import Rabbit from './Rabbit';

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{ borderBottom: '1px solid var(--border)' }}>
      <div
        className="max-w-2xl mx-auto px-6"
        style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {/* Logo + rabbit */}
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
        >
          <Rabbit />
          <span
            className="font-serif"
            style={{ color: 'var(--text)', fontSize: '1.125rem', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.01em' }}
          >
            Notebooks
          </span>
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8125rem',
              fontWeight: 400,
              color: pathname === '/' ? 'var(--text)' : 'var(--text-3)',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
          >
            Writings
          </Link>
          <Link
            href="/shelf/"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8125rem',
              fontWeight: 400,
              color: pathname.startsWith('/shelf') ? 'var(--text)' : 'var(--text-3)',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
          >
            Shelf
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
