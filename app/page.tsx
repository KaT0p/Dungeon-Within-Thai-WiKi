'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader, { SiteFooter } from './components/site-header';
import { darkLords, glossaryTerms, integrationStatus, monsters, prototypeMonsters, statusEffects } from './content-data';
import { facilities } from './facilities-data';
import { relics } from './items-data';
import { monsterSkillTranslations } from './monster-skills-data';

const searchIndex = [
  { title: 'ระบบเกม', description: 'Run, Node, Combat และความก้าวหน้าข้าม Run', category: 'ระบบ', href: '/wiki/systems', keywords: 'system ark combat node run ระบบ เกม' },
  { title: 'ค่าสถานะและ Key Stat', description: 'STR, DEX, CON, INT, WIS, CHA และสูตร Modifier', category: 'ระบบ', href: '/wiki/stats', keywords: 'stats key stat strength dexterity constitution intelligence wisdom charisma กายภาพ เวทมนตร์ physical magic modifier attack roll saving throw' },
  { title: 'เอฟเฟกต์สถานะ', description: 'ชื่อไทยและผลของ Buff, Debuff และเอฟเฟกต์พื้นที่', category: 'ระบบ', href: '/wiki/status-effects', keywords: statusEffects.map((effect)=>`${effect.en} ${effect.th} ${effect.summary}`).join(' ') },
  { title: 'จอมมารทั้งหมด', description: 'ข้อมูล Desponia, Aura และ Rhea', category: 'จอมมาร', href: '/wiki/dark-lords', keywords: 'dark lord จอมมาร' },
  { title: 'มอนสเตอร์ทั้งหมด', description: 'รายชื่อ 76 ตัว แบ่ง Tier 1–9', category: 'มอนสเตอร์', href: '/wiki/monsters', keywords: monsters.map((monster)=>monster.slice(0,5).join(' ')).join(' ') },
  { title: 'สกิลมอนสเตอร์ Tier 1–9', description: 'คำแปลไทย–อังกฤษ 290 ชื่อ พร้อมสถานะตัวที่ยังไม่มีข้อมูลต้นทาง', category: 'มอนสเตอร์', href: '/wiki/monster-skills', keywords: monsterSkillTranslations.map((monster)=>`${monster.name} ${monster.skills.map((skill)=>`${skill.en} ${skill.th}`).join(' ')}`).join(' ') },
  { title: 'ห้องและกับดัก', description: '41 รายการ พร้อมผัง 3×3 และชุดแนะนำตามจอมมาร', category: 'สิ่งปลูกสร้าง', href: '/wiki/facilities', keywords: `จัดผัง layout ชุดกับดัก Desponia Aura Rhea ${facilities.map((entry)=>`${entry.name} ${entry.nameTh} ${entry.kind} ${entry.tags.join(' ')}`).join(' ')}` },
  { title: 'ไอเทมและอุปกรณ์', description: 'Relic 87 ชิ้นและคู่มือช่อง Part', category: 'ไอเทม', href: '/wiki/items', keywords: `relic part equipment dream dust item อุปกรณ์ ${relics.map((entry)=>`${entry.name} ${entry.nameTh} ${entry.group} ${entry.tags.join(' ')}`).join(' ')}` },
  ...prototypeMonsters.map((monster)=>({ title: monster.name, description: monster.summaryTh, category: 'มอนสเตอร์', href: `/wiki/monsters/${monster.slug}`, keywords: `${monster.name} ${monster.keyStat} ${monster.attackTypes.join(' ')} ${monster.skills.map((skill)=>`${skill.en} ${skill.th}`).join(' ')}` })),
  ...darkLords.map((lord)=>({ title: lord.name, description: lord.theme, category: 'จอมมาร', href: `/wiki/dark-lords/${lord.slug}`, keywords: `${lord.name} ${lord.core} ${lord.keyStat}` })),
  { title: 'พจนานุกรมศัพท์', description: 'มาตรฐานคำแปลไทย–อังกฤษ', category: 'ศัพท์', href: '/wiki/glossary', keywords: glossaryTerms.map((term)=>`${term[0]} ${term[1]}`).join(' ') },
  { title: 'แหล่งข้อมูลและการตรวจสอบ', description: 'ที่มาของข้อมูลและระดับความน่าเชื่อถือ', category: 'โครงการ', href: '/wiki/sources', keywords: 'source license cc by sa แหล่งข้อมูล' },
  { title: 'Roadmap', description: 'ความคืบหน้าและหัวข้อถัดไป', category: 'โครงการ', href: '/roadmap', keywords: 'roadmap phase progress แผนงาน' },
];

const categories = [
  { icon: '✦', title: 'ค่าสถานะ', description: 'STR–CHA, Key Stat และการอ่านสกิล', tone: 'amber', href: '/wiki/stats' },
  { icon: '♜', title: 'จอมมาร', description: '3 ตัว · Skill, Part และ Authority', tone: 'violet', href: '/wiki/dark-lords' },
  { icon: '♞', title: 'มอนสเตอร์', description: '76 ตัว · Tier, Type และ Key Stat', tone: 'teal', href: '/wiki/monsters' },
  { icon: '⌁', title: 'ห้องและกับดัก', description: '41 รายการ · ผัง 3×3 และชุดแนะนำ', tone: 'rose', href: '/wiki/facilities' },
  { icon: '◆', title: 'ไอเทมและอุปกรณ์', description: '87 Relics · คู่มือช่อง Part', tone: 'amber', href: '/wiki/items' },
  { icon: '⌘', title: 'ระบบเกม', description: '10 ระบบหลักและวงจรการเล่น', tone: 'rose', href: '/wiki/systems' },
  { icon: 'A', title: 'ศัพท์ในเกม', description: '40 คำแกนหลักที่ค้นหาได้', tone: 'amber', href: '/wiki/glossary' },
  { icon: '◎', title: 'แหล่งข้อมูล', description: 'ที่มา สิทธิ์ และการตรวจสอบ', tone: 'teal', href: '/wiki/sources' },
];

const updates = [
  { category: 'Phase 2.5b', title: 'Demon Lord Relics', description: 'เพิ่ม War of the Gods 28 ชิ้น แยกชุด Tania, Lilith และ Meryelle พร้อมตัวกรอง', href: '/wiki/items#relic-catalog' },
  { category: 'Phase 2.4b', title: 'แนวทางจัดผังและชุดกับดัก', description: 'ผัง 3×3 สามแบบ ชุดแนะนำตามจอมมาร และคู่ห้องที่นำไปทดลองใน Run ได้', href: '/wiki/facilities#layout-guide' },
  { category: 'Phase 2.2d', title: 'แนวทางเล่น Dark Lords', description: 'โครงทีม ลำดับ Authority แผนต้น–กลาง–ท้าย Run และข้อผิดพลาดของจอมมารทั้ง 3 ตัว', href: '/wiki/dark-lords' },
];

export default function Home() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase('th'); if (!term) return [];
    return searchIndex.filter((item)=>`${item.title} ${item.description} ${item.keywords}`.toLocaleLowerCase('th').includes(term)).slice(0,6);
  }, [query]);
  return <main><SiteHeader />
    <section className="hero" id="top"><div className="hero-glow" aria-hidden="true" /><div className="hero-copy">
      <p className="eyebrow"><span /> ข้อมูลที่ตรวจสอบย้อนกลับได้</p><h1>สร้างดันเจี้ยน<br />ด้วยข้อมูล<span>ที่ชัดเจน</span></h1>
      <p className="lead">คลังข้อมูล Dungeon Within ภาษาไทยที่แยกข้อเท็จจริงออกจากคำแนะนำ ทุกหน้าระบุเวอร์ชัน แหล่งอ้างอิง และข้อมูลที่ยังต้องตรวจในเกม</p>
      <div className="search-box" id="search"><span aria-hidden="true">⌕</span><input aria-label="ค้นหาข้อมูลใน Wiki" value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="ค้นหา Desponia, Bloom, Ark of Memory..." /><kbd>/</kbd>{query && <div className="search-results" role="listbox">{results.length ? results.map((item)=><a href={item.href} key={item.href}><span>{item.title}<small>{item.description}</small></span><b>{item.category}</b></a>) : <p>ยังไม่พบข้อมูลที่ค้นหา</p>}</div>}</div>
      <div className="hero-actions"><a className="primary-button" href="/wiki">เปิดคลังข้อมูล <span>→</span></a><a className="text-button" href="/roadmap">ดูความคืบหน้า</a></div>
      <dl className="quick-stats"><div><dt>{monsters.length}</dt><dd>มอนสเตอร์ในบัญชี</dd></div><div><dt>{glossaryTerms.length}</dt><dd>คำศัพท์บนเว็บ</dd></div><div><dt>{integrationStatus.gameVersion}</dt><dd>เวอร์ชันเป้าหมาย</dd></div></dl>
    </div><aside className="featured-card" aria-label="Dungeon Within Thailand Wiki"><div className="hero-og-image"><img src="/og.png" alt="Dungeon Within Thailand Wiki คู่มือสำหรับผู้เล่นชาวไทย" /></div><div className="featured-content"><span className="tag">คลังข้อมูลภาษาไทย</span><h2>รู้จักจอมมารทั้ง 3 ตัว</h2><p>เปรียบเทียบแกนกลไก ค่าสถานะ สกิล ชิ้นส่วน และแนวทางจัดทีม</p><a href="/wiki/dark-lords">เปิดบัญชีจอมมาร <span>↗</span></a></div></aside></section>
    <section className="category-section" id="categories"><div className="section-heading"><div><p className="eyebrow"><span /> คลังข้อมูล</p><h2>เนื้อหาที่พร้อมอ่าน</h2></div><p>ไม่มีบทความทั่วไปที่ไม่มีที่มา<br />ข้อมูลไม่แน่ใจจะมีป้ายเตือนชัดเจน</p></div><div className="category-grid">{categories.map((category)=><a className={`category-card ${category.tone}`} href={category.href} key={category.title}><span className="category-icon">{category.icon}</span><span><strong>{category.title}</strong><small>{category.description}</small></span><b>→</b></a>)}</div></section>
    <section className="latest-section" id="updates"><div className="section-heading dark-heading"><div><p className="eyebrow"><span /> Content Integration</p><h2>ข้อมูลที่นำเข้ารอบแรก</h2></div><span className="version-chip">อัปเดต {integrationStatus.updatedAt}</span></div><div className="article-list">{updates.map((item,index)=><a href={item.href} key={item.title}><span className="article-number">0{index+1}</span><span><b>{item.category}</b><strong>{item.title}</strong><small>{item.description}</small></span><i>↗</i></a>)}</div></section>
    <section className="guide-strip" id="guides"><div><p className="eyebrow"><span /> เพิ่มล่าสุด</p><h2>สกิลมอนสเตอร์ Tier 8–9</h2></div><p>เพิ่มคำแปล 60 ชื่อจากมอนสเตอร์ระดับสูงสุดครบ 12 ตัว<br />ปิดชุดคำแปลชื่อสกิล Tier 1–9 รวม 290 ชื่อ</p><Link className="primary-button" href="/wiki/monster-skills">เปิดคลังสกิล <span>→</span></Link></section><SiteFooter />
  </main>;
}
