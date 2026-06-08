'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { Writing, WritingMeta } from '@/lib/writings';

interface Props { writing: Writing; prev: WritingMeta | null; next: WritingMeta | null; }

export default function WritingContent({ writing, prev, next }: Props) {
  return (
    <article
      className="max-w-2xl mx-auto px-6 animate-fade-in delay-1"
      style={{ paddingTop: '3rem', paddingBottom: '5rem' }}
    >
      {/* Back */}
      <Link
        href="/"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
          fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-3)',
          textDecoration: 'none', marginBottom: '3rem', transition: 'color 0.15s ease',
          letterSpacing: '0.02em',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-3)')}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Writings
      </Link>

      {/* Title + hook */}
      <header style={{ marginBottom: '3rem' }}>
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 400,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: writing.hook ? '1rem' : 0,
          }}
        >
          {writing.title}
        </h1>
        {writing.hook && (
          <p
            className="font-serif"
            style={{ fontSize: '1.125rem', color: 'var(--text-3)', fontStyle: 'italic', lineHeight: 1.6 }}
          >
            {writing.hook}
          </p>
        )}
        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border)' }} />
      </header>

      {/* Body */}
      <div className="prose-writing">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => <h2 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--text)', marginTop: '2.5em', marginBottom: '0.75em', letterSpacing: '-0.01em' }}>{children}</h2>,
            h2: ({ children }) => <h2 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--text)', marginTop: '2.5em', marginBottom: '0.75em', letterSpacing: '-0.01em' }}>{children}</h2>,
            h3: ({ children }) => <h3 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text)', marginTop: '2em', marginBottom: '0.6em' }}>{children}</h3>,
            p: ({ children }) => <p style={{ marginBottom: '1.6em', lineHeight: '1.85' }}>{children}</p>,
            blockquote: ({ children }) => (
              <blockquote style={{ borderLeft: '2px solid var(--border-strong)', paddingLeft: '1.5em', margin: '2em 0', color: 'var(--text-2)', fontStyle: 'italic' }}>
                {children}
              </blockquote>
            ),
            ul: ({ children }) => <ul style={{ paddingLeft: '1.5em', margin: '1.25em 0', listStyleType: 'disc' }}>{children}</ul>,
            ol: ({ children }) => <ol style={{ paddingLeft: '1.5em', margin: '1.25em 0', listStyleType: 'decimal' }}>{children}</ol>,
            li: ({ children }) => <li style={{ marginBottom: '0.4em', lineHeight: '1.8' }}>{children}</li>,
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', textUnderlineOffset: '3px', textDecorationColor: 'var(--border-strong)' }}>{children}</a>
            ),
            hr: () => (
              <div style={{ margin: '2.5em 0', textAlign: 'center', color: 'var(--text-3)', letterSpacing: '0.5em', fontSize: '0.65rem' }}>
                · · ·
              </div>
            ),
            strong: ({ children }) => <strong style={{ fontWeight: 600, color: 'var(--text)' }}>{children}</strong>,
            em: ({ children }) => <em>{children}</em>,
            code: ({ children }) => (
              <code style={{ fontFamily: 'monospace', fontSize: '0.875em', background: 'var(--bg-subtle)', border: '1px solid var(--border)', padding: '0.1em 0.35em', borderRadius: '2px' }}>{children}</code>
            ),
            pre: ({ children }) => (
              <pre style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)', padding: '1.25em 1.5em', overflowX: 'auto', margin: '1.75em 0', borderRadius: '2px', fontSize: '0.875rem' }}>{children}</pre>
            ),
          }}
        >
          {writing.content}
        </ReactMarkdown>
      </div>

      {/* Prev / Next */}
      {(prev || next) && (
        <nav style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '2rem', justifyContent: 'space-between' }}>
          {prev ? (
            <Link href={`/writing/${prev.slug}/`} style={{ flex: 1, textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>← Previous</span>
              <span className="font-serif" style={{ display: 'block', fontSize: '0.9375rem', color: 'var(--text)', lineHeight: 1.4 }}>{prev.title}</span>
            </Link>
          ) : <div style={{ flex: 1 }} />}

          {next ? (
            <Link href={`/writing/${next.slug}/`} style={{ flex: 1, textDecoration: 'none', textAlign: 'right' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Next →</span>
              <span className="font-serif" style={{ display: 'block', fontSize: '0.9375rem', color: 'var(--text)', lineHeight: 1.4 }}>{next.title}</span>
            </Link>
          ) : <div style={{ flex: 1 }} />}
        </nav>
      )}
    </article>
  );
}
