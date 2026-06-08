'use client';

import Link from 'next/link';
import { WritingMeta } from '@/lib/writings';

interface Props { writing: WritingMeta; index: number; }

export default function WritingCard({ writing, index }: Props) {
  const delay = Math.min(index, 8);
  return (
    <Link
      href={`/writing/${writing.slug}/`}
      className={`writing-card animate-fade-in delay-${delay + 1}`}
      style={{ padding: '1.1rem 0' }}
    >
      <h2
        className="font-serif"
        style={{ fontSize: '1.125rem', fontWeight: 400, color: 'var(--text)', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}
      >
        {writing.title}
      </h2>
      {writing.hook && (
        <p
          className="font-serif"
          style={{ fontSize: '0.9375rem', color: 'var(--text-3)', fontStyle: 'italic', lineHeight: '1.5' }}
        >
          {writing.hook}
        </p>
      )}
    </Link>
  );
}
