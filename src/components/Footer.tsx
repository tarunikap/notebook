export default function Footer() {
  return (
    <footer
      style={{ borderTop: '1px solid var(--border)', marginTop: '4rem' }}
    >
      <div
        className="max-w-2xl mx-auto px-6"
        style={{ padding: '2rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-3)', fontWeight: 300 }}>
          Written slowly.
        </p>
        <p style={{ fontFamily: 'var(--font-eb-garamond)', fontSize: '0.8125rem', color: 'var(--text-3)', fontStyle: 'italic' }}>
          a notebook
        </p>
      </div>
    </footer>
  );
}
