import { getWritingBySlug, getAllSlugs, getAllWritings } from '@/lib/writings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WritingContent from '@/components/WritingContent';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props { params: { slug: string }; }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const w = getWritingBySlug(params.slug);
  if (!w) return { title: 'Not Found' };
  return { title: `${w.title} — Notebooks`, description: w.hook };
}

export default function WritingPage({ params }: Props) {
  const writing = getWritingBySlug(params.slug);
  if (!writing) notFound();

  const all = getAllWritings();
  const i = all.findIndex((w) => w.slug === params.slug);
  const prev = i < all.length - 1 ? all[i + 1] : null;
  const next = i > 0 ? all[i - 1] : null;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main className="flex-1">
        <WritingContent writing={writing} prev={prev} next={next} />
      </main>
      <Footer />
    </div>
  );
}
