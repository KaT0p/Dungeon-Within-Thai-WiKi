'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader, { SiteFooter } from '../../components/site-header';
import { monsterSkillCount, monsterSkillTranslations } from '../../monster-skills-data';

const slots = ['ทั้งหมด', 'A', 'B', 'M', 'S1', 'S2'] as const;

export default function MonsterSkillsPage() {
  const [query, setQuery] = useState('');
  const [tier, setTier] = useState('ทั้งหมด');
  const [slot, setSlot] = useState<(typeof slots)[number]>('ทั้งหมด');
  const normalizedQuery = query.trim().toLowerCase();
  const results = useMemo(() => monsterSkillTranslations.map((monster) => {
    const monsterMatches = `${monster.name} ${monster.type} tier ${monster.tier}`.toLowerCase().includes(normalizedQuery);
    const skills = monster.skills.filter((skill) => {
      const skillMatches = `${skill.en} ${skill.th} ${skill.kind}`.toLowerCase().includes(normalizedQuery);
      return (monsterMatches || skillMatches) && (slot === 'ทั้งหมด' || skill.slot === slot);
    });
    return { ...monster, skills, monsterMatches };
  }).filter((monster) => (tier === 'ทั้งหมด' || monster.tier === Number(tier)) && (monster.skills.length > 0 || (slot === 'ทั้งหมด' && monster.monsterMatches))), [normalizedQuery, tier, slot]);
  const shownSkills = results.reduce((total, monster) => total + monster.skills.length, 0);

  return <main className="hub-page"><SiteHeader />
    <section className="data-hero monster-hero"><p className="breadcrumbs"><Link href="/wiki">คลังข้อมูล</Link><span>/</span><Link href="/wiki/monsters">มอนสเตอร์</Link><span>/</span>คำแปลสกิล</p><p className="eyebrow"><span /> Tier 1–9 Skill Archive</p><h1>คำแปลสกิลมอนสเตอร์</h1><p>ค้นชื่อไทยหรืออังกฤษของการโจมตีพื้นฐาน คุณลักษณะติดตัว และชิ้นส่วนทั้ง 3 ช่อง สำหรับมอนสเตอร์ Tier 1–9</p></section>
    <section className="hub-content monster-skill-catalog">
      <div className="inventory-summary"><div><small>มอนสเตอร์</small><b>{monsterSkillTranslations.length}</b></div><div><small>ชื่อที่แปล</small><b>{monsterSkillCount}</b></div><div><small>ช่วง Tier</small><b>1–9</b></div><div><small>รอข้อมูลต้นทาง</small><b>{monsterSkillTranslations.filter((monster) => !monster.sourceAvailable).length}</b></div></div>
      <div className="monster-warning"><strong>สถานะคำแปล</strong><p>ชื่อไทยทั้งหมดเป็นคำแปลแฟนเมด ส่วนชื่ออังกฤษคงตาม Wiki ต้นทางเพื่อใช้ค้นในเกม Tier 4–6 มี 18 ตัวที่ Wiki ยังไม่มีหน้ารายละเอียด จึงแสดงสถานะรอข้อมูลโดยไม่แต่งชื่อสกิล ตัวเลข หรือเอฟเฟกต์ขึ้นเอง</p></div>
      <div className="monster-tools"><label><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ค้นหามอนสเตอร์ ชื่อไทย หรือชื่ออังกฤษ..." /></label><select aria-label="กรอง Tier" value={tier} onChange={(event) => setTier(event.target.value)}><option>ทั้งหมด</option>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => <option key={value} value={value}>Tier {value}</option>)}</select><select aria-label="กรองช่องสกิล" value={slot} onChange={(event) => setSlot(event.target.value as (typeof slots)[number])}>{slots.map((value) => <option key={value} value={value}>{value === 'ทั้งหมด' ? value : `${value} · ${value === 'A' ? 'Attack' : value === 'B' ? 'Innate' : 'Part'}`}</option>)}</select></div>
      <div className="glossary-count">แสดง <b>{shownSkills}</b> จาก {monsterSkillCount} ชื่อ ในมอนสเตอร์ {results.length} ตัว{(query || tier !== 'ทั้งหมด' || slot !== 'ทั้งหมด') && <button onClick={() => { setQuery(''); setTier('ทั้งหมด'); setSlot('ทั้งหมด'); }}>ล้างตัวกรอง</button>}</div>
      <div className="skill-catalog-list">{results.map((monster) => <article key={monster.name}>
        <header><div><small>Tier {monster.tier} · {monster.type}</small><h2>{monster.name}</h2></div>{monster.sourceAvailable ? <a href={`https://dungeonwithin.miraheze.org/wiki/${monster.name.replaceAll(' ', '_')}`} target="_blank" rel="noreferrer">ต้นทาง ↗</a> : <span className="source-pending">ไม่มีหน้าต้นทาง</span>}</header>
        {monster.skills.length > 0 ? <div className="skill-translation-table"><div className="table-head"><span>ช่อง</span><span>English</span><span>คำแปลไทย</span><span>ประเภท</span></div>{monster.skills.map((skill) => <div key={`${monster.name}-${skill.slot}`}><b>{skill.slot}</b><strong>{skill.en}</strong><span>{skill.th}</span><small>{skill.kind}</small></div>)}</div> : <div className="pending-skill-data"><b>รอข้อมูลต้นทาง</b><p>Wiki ยังไม่มีหน้ารายละเอียดของมอนสเตอร์ตัวนี้ จึงยังไม่สามารถยืนยันชื่อ A, B, M, S1 และ S2 ได้</p></div>}
        <footer>{monster.sourceAvailable ? 'Wiki ต้นทางแก้ไขล่าสุด' : 'สถานะต้นทาง'} {monster.sourceUpdated}</footer>
      </article>)}</div>
      {results.length === 0 && <div className="monster-empty"><b>ไม่พบชื่อสกิล</b><p>ลองเปลี่ยนคำค้นหา ช่องสกิล หรือ Tier</p></div>}
      <div className="source-note"><span>ตรวจต้นทางล่าสุด 31 ส.ค. 2026</span><span>Dungeon Within v0.6.0 · needs_review</span></div>
    </section><SiteFooter />
  </main>;
}
