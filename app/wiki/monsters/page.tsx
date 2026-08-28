'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader, { SiteFooter } from '../../components/site-header';
import { monsterImagePath, monsters, prototypeMonsters } from '../../content-data';
import { monsterSkillSlug, monsterSkillTranslations } from '../../monster-skills-data';

const types = ['ทั้งหมด', 'Beast', 'Elemental', 'Undead', 'รอตรวจ'];

export default function MonstersPage() {
  const [query, setQuery] = useState('');
  const [tier, setTier] = useState('ทั้งหมด');
  const [type, setType] = useState('ทั้งหมด');
  const results = useMemo(() => monsters.filter(([name, monsterTier, monsterType, keyStat, attack]) => {
    const textMatch = `${name} ${monsterType} ${keyStat} ${attack}`.toLowerCase().includes(query.trim().toLowerCase());
    return textMatch && (tier === 'ทั้งหมด' || monsterTier === Number(tier)) && (type === 'ทั้งหมด' || monsterType === type);
  }), [query, tier, type]);
  const groupedResults = [1,2,3,4,5,6,7,8,9].map((value) => ({ tier: value, monsters: results.filter((monster) => monster[1] === value) })).filter((group) => group.monsters.length > 0);
  const translatedNames = new Set([...prototypeMonsters.map((monster) => monster.name), ...monsterSkillTranslations.map((monster) => monster.name)]);
  const verified = translatedNames.size;

  return <main className="hub-page"><SiteHeader />
    <section className="data-hero monster-hero"><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span>มอนสเตอร์</p><p className="eyebrow"><span /> Monster Gallery</p><h1>คลังมอนสเตอร์</h1><p>มอนสเตอร์ 76 ตัวพร้อมภาพ แบ่งเป็น Tier 1–9 ค้นหาและกรองตามประเภท Key Stat หรือชนิดความเสียหายได้ โดยตัวที่มีฉบับภาษาไทยจะเชื่อมไปยังหน้ารายละเอียดโดยตรง</p></section>
    <section className="hub-content monster-gallery-content">
      <div className="inventory-summary"><div><small>รายชื่อทั้งหมด</small><b>{monsters.length}</b></div><div><small>มีหน้าภาษาไทย</small><b>{verified}</b></div><div><small>ยังไม่มีฉบับไทย</small><b>{monsters.length - verified}</b></div><div><small>ช่วง Tier</small><b>1–9</b></div></div>
      <div className="monster-warning"><strong>วิธีใช้คลังภาพ</strong><p>กดการ์ดที่มีป้าย “ฉบับไทย” เพื่ออ่านค่าสถานะและสกิลภาษาไทย ส่วนตัวอื่นจะเปิด Wiki ต้นทางจนกว่าเราจะทำหน้ารายละเอียดเพิ่ม บทบาท Tank, Damage หรือ Support จะยังไม่ถูกระบุหากไม่มีข้อมูลยืนยัน</p><Link href="/wiki/monster-skills">เปิดคลังคำแปลสกิล Tier 1–3 →</Link></div>
      <div className="monster-tools"><label><span>⌕</span><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="ค้นหาชื่อ ประเภท Key Stat หรือ Damage..." /></label><select aria-label="กรอง Tier" value={tier} onChange={(event)=>setTier(event.target.value)}><option>ทั้งหมด</option>{[1,2,3,4,5,6,7,8,9].map((value)=><option key={value} value={value}>Tier {value}</option>)}</select><select aria-label="กรองประเภท" value={type} onChange={(event)=>setType(event.target.value)}>{types.map((value)=><option key={value}>{value}</option>)}</select></div>
      {tier === 'ทั้งหมด' && !query && type === 'ทั้งหมด' && <nav className="tier-jump" aria-label="ข้ามไปยัง Tier">{[1,2,3,4,5,6,7,8,9].map((value)=><a href={`#tier-${value}`} key={value}><small>Tier</small><b>{value}</b></a>)}</nav>}
      <div className="glossary-count">แสดง <b>{results.length}</b> จาก {monsters.length} ตัว{(tier !== 'ทั้งหมด' || type !== 'ทั้งหมด' || query) && <button onClick={()=>{setQuery('');setTier('ทั้งหมด');setType('ทั้งหมด');}}>ล้างตัวกรอง</button>}</div>
      <div className="monster-tier-list">{groupedResults.map((group)=><section id={`tier-${group.tier}`} key={group.tier}><div className="tier-heading"><div><small>MONSTER RANK</small><h2>Tier {group.tier}</h2></div><span>{group.monsters.length} ตัว</span></div><div className="monster-card-grid">{group.monsters.map(([name, monsterTier, monsterType, keyStat, attack, hasPage])=>{ const prototype = prototypeMonsters.find((item) => item.name === name); const translated = monsterSkillTranslations.find((item) => item.name === name); const hasThaiPage = Boolean(prototype || translated); const href = prototype ? `/wiki/monsters/${prototype.slug}` : translated ? `/wiki/monsters/${monsterSkillSlug(name)}` : hasPage ? `https://dungeonwithin.miraheze.org/wiki/${name.replaceAll(' ', '_')}` : ''; return <article className={hasThaiPage ? 'has-thai-detail' : ''} key={name}><div className="monster-card-image"><img loading="lazy" src={monsterImagePath(name, monsterTier)} alt={`ภาพมอนสเตอร์ ${name}`} />{hasThaiPage && <b>TH</b>}</div><div className="monster-card-name"><h3>{name}</h3><span>{monsterType}</span></div><div className="monster-card-copy"><dl><div><dt>Key Stat</dt><dd>{keyStat}</dd></div><div><dt>Damage</dt><dd>{attack}</dd></div></dl><span>{hasThaiPage ? 'อ่านฉบับไทย →' : hasPage ? 'เปิดต้นทาง ↗' : 'รอตรวจข้อมูล'}</span></div>{href && <a className="monster-card-hitbox" href={href} target={hasThaiPage ? undefined : '_blank'} rel={hasThaiPage ? undefined : 'noreferrer'} aria-label={`${hasThaiPage ? 'อ่านข้อมูลภาษาไทย' : 'เปิด Wiki ต้นทาง'} ${name}`}><span>เปิดข้อมูล {name}</span></a>}</article>})}</div></section>)}</div>
      {results.length === 0 && <div className="monster-empty"><b>ไม่พบมอนสเตอร์</b><p>ลองเปลี่ยนคำค้นหา หรือกดล้างตัวกรองเพื่อดูทั้งหมด</p></div>}
      <div className="source-note"><span>ตรวจหน้ารวมล่าสุด 27 ส.ค. 2026</span><span>ค่าทั้งหมดถือเป็น needs_review จนตรวจเทียบในเกม</span></div>
    </section><SiteFooter />
  </main>;
}
