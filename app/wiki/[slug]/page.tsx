import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { articles } from '../../wiki-data';

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return { title: `${article.title} | Dungeon Within Thailand Wiki`, description: article.description, openGraph: { title: article.title, description: article.description, images: [] }, twitter: { title: article.title, description: article.description, images: [] } };
}

export default async function WikiArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== slug).slice(0, 3);
  return <main className="article-page">
    <header className="site-header">
      <a className="brand" href="/"><span className="brand-mark" aria-hidden="true" /><span><strong>Dungeon Within</strong><small>THAILAND WIKI</small></span></a>
      <nav aria-label="เมนูหลัก"><a href="/#guides">คู่มือเริ่มต้น</a><a href="/#categories">คลังข้อมูล</a><a href="/#updates">อัปเดตล่าสุด</a></nav><a className="header-search" href="/#search">ค้นหา <span>⌕</span></a>
    </header>
    <div className="article-shell">
      <aside className="article-sidebar"><a href="/">← หน้าแรก</a><p>ในบทความนี้</p>{article.sections.map((section) => <a href={`#${section.heading}`} key={section.heading}>{section.heading}</a>)}</aside>
      <article className="wiki-article">
        <p className="breadcrumbs"><a href="/">หน้าหลัก</a><span>/</span>{article.category}</p><span className="tag">{article.category}</span><h1>{article.title}</h1><p className="article-lead">{article.description}</p>
        <div className="article-meta"><span>อัปเดต {article.updated}</span><span>อ้างอิงเกมเวอร์ชัน {article.version}</span></div>
        <div className="notice"><strong>บทความตั้งต้น</strong><p>หน้านี้เป็นโครงเนื้อหาเริ่มต้นสำหรับชุมชน ค่าสถานะและรายละเอียดเฉพาะควรตรวจสอบกับเกมเวอร์ชันล่าสุดก่อนนำไปใช้</p></div>
        {article.sections.map((section) => <section id={section.heading} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
        <div className="related"><h2>อ่านต่อ</h2>{related.map((item) => <a href={`/wiki/${item.slug}`} key={item.slug}><span>{item.category}</span>{item.title}<b>→</b></a>)}</div>
      </article>
    </div>
    <footer><span>Dungeon Within Thailand Wiki</span><span>โปรเจกต์แฟนเมดโดยชุมชน — ไม่เกี่ยวข้องกับ GameCoaster</span></footer>
  </main>;
}
