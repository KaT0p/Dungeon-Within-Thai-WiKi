'use client';

import { useMemo, useState } from 'react';
import { articles, categories } from './wiki-data';

export default function Home() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase('th');
    if (!term) return [];
    return articles.filter((article) =>
      `${article.title} ${article.description} ${article.category} ${article.keywords.join(' ')}`
        .toLocaleLowerCase('th').includes(term),
    ).slice(0, 5);
  }, [query]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dungeon Within Thailand Wiki หน้าแรก">
          <span className="brand-mark"><i>DW</i></span>
          <span><strong>Dungeon Within</strong><small>THAILAND WIKI</small></span>
        </a>
        <nav aria-label="เมนูหลัก">
          <a href="#guides">คู่มือเริ่มต้น</a><a href="#categories">คลังข้อมูล</a><a href="#updates">อัปเดตล่าสุด</a>
        </nav>
        <a className="header-search" href="#search">ค้นหา <span>⌕</span></a>
        <button className="menu-button" aria-label="เปิดเมนู">☰</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> คู่มือสำหรับผู้เล่นชาวไทย</p>
          <h1>สร้างดันเจี้ยน<br />ที่ไม่มีใคร<span>หนีรอด</span></h1>
          <p className="lead">ศูนย์รวมข้อมูล คู่มือ และกลยุทธ์เกม Dungeon Within ฉบับภาษาไทย ตั้งแต่ก้าวแรกของจอมมาร ไปจนถึงการจัดกองทัพขั้นสูง</p>
          <div className="search-box" id="search">
            <span aria-hidden="true">⌕</span>
            <input aria-label="ค้นหาข้อมูลใน Wiki" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ค้นหาจอมมาร มอนสเตอร์ ห้อง หรือไอเทม..." />
            <kbd>/</kbd>
            {query && <div className="search-results" role="listbox">
              {results.length > 0 ? results.map((article) => (
                <a href={`/wiki/${article.slug}`} key={article.slug}>
                  <span>{article.title}<small>{article.description}</small></span><b>{article.category}</b>
                </a>
              )) : <p>ยังไม่พบข้อมูลที่ค้นหา</p>}
            </div>}
          </div>
          <div className="hero-actions">
            <a className="primary-button" href="/wiki/getting-started">เริ่มต้นเล่นเกม <span>→</span></a>
            <a className="text-button" href="#categories">สำรวจคลังข้อมูล</a>
          </div>
          <dl className="quick-stats">
            <div><dt>{articles.length}</dt><dd>บทความตั้งต้น</dd></div><div><dt>{categories.length}</dt><dd>หมวดข้อมูล</dd></div><div><dt>0.6.0</dt><dd>เวอร์ชันที่ติดตาม</dd></div>
          </dl>
        </div>

        <aside className="featured-card" aria-label="บทความแนะนำ">
          <div className="card-art" aria-hidden="true"><div className="moon" /><div className="tower tower-one" /><div className="tower tower-two" /><span className="rune">◇</span></div>
          <div className="featured-content">
            <span className="tag">แนะนำสำหรับมือใหม่</span><h2>เริ่มต้นสร้างดันเจี้ยนแรก</h2>
            <p>รู้จักโครงสร้างการเล่น เลือกแนวทาง และเตรียมดันเจี้ยนให้พร้อมรับมือผู้บุกรุก</p>
            <a href="/wiki/getting-started">อ่านคู่มือ 8 นาที <span>↗</span></a>
          </div>
        </aside>
      </section>

      <section className="category-section" id="categories">
        <div className="section-heading"><div><p className="eyebrow"><span /> ค้นหาข้อมูล</p><h2>สำรวจคลัง Wiki</h2></div><p>โครงสร้างความรู้สำหรับการสร้างดันเจี้ยน<br />และกองทัพมอนสเตอร์ของคุณ</p></div>
        <div className="category-grid">
          {categories.map((category) => <a className={`category-card ${category.tone}`} href={`/wiki/${category.featuredSlug}`} key={category.title}>
            <span className="category-icon">{category.icon}</span><span><strong>{category.title}</strong><small>{category.description}</small></span><b>→</b>
          </a>)}
        </div>
      </section>

      <section className="latest-section" id="updates">
        <div className="section-heading dark-heading"><div><p className="eyebrow"><span /> บทความล่าสุด</p><h2>ข้อมูลที่เพิ่งเพิ่ม</h2></div><span className="version-chip">ติดตามเกมเวอร์ชัน 0.6.0</span></div>
        <div className="article-list">
          {articles.slice(0, 3).map((article, index) => <a href={`/wiki/${article.slug}`} key={article.slug}>
            <span className="article-number">0{index + 1}</span><span><b>{article.category}</b><strong>{article.title}</strong><small>{article.description}</small></span><i>↗</i>
          </a>)}
        </div>
      </section>

      <section className="guide-strip" id="guides">
        <div><p className="eyebrow"><span /> เส้นทางจอมมาร</p><h2>ยังไม่รู้จะเริ่มตรงไหน?</h2></div>
        <p>อ่านคู่มือพื้นฐานแบบเป็นขั้นตอน ใช้เวลาไม่นาน<br />แล้วกลับไปสร้างดันเจี้ยนของคุณต่อได้เลย</p>
        <a className="primary-button" href="/wiki/getting-started">ดูคู่มือเริ่มต้น <span>→</span></a>
      </section>
      <footer><span>Dungeon Within Thailand Wiki</span><span>โปรเจกต์แฟนเมดโดยชุมชน — ไม่เกี่ยวข้องกับ GameCoaster</span></footer>
    </main>
  );
}
