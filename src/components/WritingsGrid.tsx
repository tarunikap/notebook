'use client';

import { useState, useEffect, useMemo } from 'react';
import { WritingMeta } from '@/lib/writings';
import WritingCard from './WritingCard';
import Fuse from 'fuse.js';

interface Props { writings: WritingMeta[]; }

export default function WritingsGrid({ writings }: Props) {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<WritingMeta[]>(writings);

  const fuse = useMemo(
    () => new Fuse(writings, { keys: ['title', 'hook'], threshold: 0.35, minMatchCharLength: 2 }),
    [writings]
  );

  useEffect(() => {
    if (query.trim().length >= 2) {
      setFiltered(fuse.search(query.trim()).map((r) => r.item));
    } else {
      setFiltered(writings);
    }
  }, [query, writings]);

  return (
    <>
      <div style={{ marginBottom: '1.25rem' }} className="animate-fade-in delay-2">
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <svg
            style={{ position: 'absolute', left: 0, color: 'var(--text-3)', pointerEvents: 'none' }}
            width="13" height="13" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search writings…"
            className="search-input"
            style={{ paddingLeft: '1.25rem', width: '100%', maxWidth: '100%' }}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="animate-fade-in delay-2 font-serif"
          style={{ color: 'var(--text-3)', fontStyle: 'italic', fontSize: '1rem', paddingTop: '1.5rem' }}>
          Nothing found.
        </p>
      ) : (
        <div>
          {filtered.map((w, i) => (
            <WritingCard key={w.slug} writing={w} index={i} />
          ))}
        </div>
      )}
    </>
  );
}