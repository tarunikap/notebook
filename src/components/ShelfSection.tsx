'use client';

import { useState } from 'react';

export interface ShelfItem {
  id: string;
  primary: string;
  secondary?: string;
  note?: string;
  lyric?: string;
  moment?: string;
  url?: string;
}

interface Props { title: string; items: ShelfItem[]; }

const PREVIEW = 2;

function ShelfCard({ item }: { item: ShelfItem }) {
  const noteText = item.note || item.lyric || item.moment;

  return (
    <div className="shelf-card" style={{ padding: '1.1rem 1.25rem', height: '100%' }}>
      {/* Title */}
      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif"
          style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text)', textDecoration: 'none', display: 'block', lineHeight: 1.3, transition: 'opacity 0.15s ease' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          {item.primary}
        </a>
      ) : (
        <span className="font-serif" style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text)', display: 'block', lineHeight: 1.3 }}>
          {item.primary}
        </span>
      )}

      {/* Secondary (author / artist / creator) */}
      {item.secondary && (
        <span
          style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-3)', display: 'block', marginTop: '0.2rem', fontWeight: 300 }}
        >
          {item.secondary}
        </span>
      )}

      {/* Note / lyric / moment */}
      {noteText && (
        <p
          className="font-serif"
          style={{ fontSize: '0.9rem', color: 'var(--text-2)', fontStyle: 'italic', lineHeight: 1.65, marginTop: '0.75rem' }}
        >
          "{noteText}"
        </p>
      )}
    </div>
  );
}

export default function ShelfSection({ title, items }: Props) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, PREVIEW);
  const hasMore = items.length > PREVIEW;

  return (
    <section>
      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.6875rem',
          fontWeight: 500,
          color: 'var(--text-3)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '0.875rem',
        }}
      >
        {title}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.625rem' }}>
        {visible.map((item) => (
          <ShelfCard key={item.id} item={item} />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setExpanded((e) => !e)}
          style={{
            marginTop: '0.625rem',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.75rem',
            color: 'var(--text-3)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: 0,
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-3)')}
        >
          {expanded ? (
            <>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
              Show less
            </>
          ) : (
            <>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
              See all {items.length}
            </>
          )}
        </button>
      )}
    </section>
  );
}
