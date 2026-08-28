'use client';

import { useMemo, useState } from 'react';
import SiteHeader, { SiteFooter } from '../../components/site-header';
import { statusEffects } from '../../content-data';

const types = ['ทั้งหมด', 'บัฟ', 'ดีบัฟ', 'พื้นที่'];
const owners = ['ทั้งหมด', 'Desponia', 'Aura', 'Rhea', 'Wendigo', 'Arachne', 'Transcendent'];

export default function StatusEffectsPage() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('ทั้งหมด');
  const [owner, setOwner] = useState('ทั้งหมด');
  const results = useMemo(() => statusEffects.filter((effect) => {
    const text = `${effect.en} ${effect.th} ${effect.summary} ${effect.owner}`.toLocaleLowerCase('th');
    return text.includes(query.trim().toLocaleLowerCase('th')) && (type === 'ทั้งหมด' || effect.type === type) && (owner === 'ทั้งหมด' || effect.owner.includes(owner));
  }), [query, type, owner]);
  const jumpToEffect = (slug: string) => {
    setQuery(''); setType('ทั้งหมด'); setOwner('ทั้งหมด');
    window.setTimeout(() => document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  };
  const filterByType = (nextType: string) => { setQuery(''); setOwner('ทั้งหมด'); setType(nextType); document.getElementById('status-results')?.scrollIntoView({ behavior: 'smooth' }); };
  const filterByOwner = (nextOwner: string) => { setQuery(''); setType('ทั้งหมด'); setOwner(nextOwner); document.getElementById('status-results')?.scrollIntoView({ behavior: 'smooth' }); };
  const typeCounts = types.slice(1).map((item) => [item, statusEffects.filter((effect) => effect.type === item).length] as const);

  return <main className="hub-page"><SiteHeader />
    <section className="data-hero status-hero"><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span>เอฟเฟกต์สถานะ</p><p className="eyebrow"><span /> Status Effects</p><h1>สถานะในเกม<br />ฉบับเข้าใจง่าย</h1><p>ชื่อไทย ความหมาย ผลที่เกิด ระยะเวลา และจำนวนสแต็กของสถานะที่เชื่อมกับสกิลจอมมารและมอนสเตอร์ต้นแบบ โดยคงชื่ออังกฤษไว้ให้ค้นข้อมูลต้นทางต่อได้</p><div className="data-warning"><b>สถานะข้อมูล</b><span>ตัวเลขระยะเวลาต้องตรวจซ้ำเมื่อเกมเปลี่ยนระบบ Combat หรือออก Patch ใหม่</span></div></section>
    <section className="hub-content">
      <nav className="status-navigation" id="status-navigation" aria-label="เมนูนำทางเอฟเฟกต์สถานะ"><div className="status-navigation-heading"><div><small>ทางลัด</small><h2>อยากหาแบบไหน?</h2></div><label><span>ข้ามไปยังสถานะ</span><select aria-label="เลือกสถานะที่ต้องการเปิด" defaultValue="" onChange={(event) => { if (event.target.value) jumpToEffect(event.target.value); event.target.value = ''; }}><option value="" disabled>เลือกชื่อไทยหรืออังกฤษ…</option>{[...statusEffects].sort((a,b)=>a.th.localeCompare(b.th,'th')).map((effect)=><option key={effect.slug} value={effect.slug}>{effect.th} — {effect.en}</option>)}</select></label></div>
        <div className="status-type-shortcuts">{typeCounts.map(([item,count])=><button className={`shortcut-${item}`} onClick={()=>filterByType(item)} key={item}><span>{item === 'บัฟ' ? '↑' : item === 'ดีบัฟ' ? '↓' : '◇'}</span><b>{item}</b><small>{count} สถานะ</small></button>)}</div>
        <div className="status-owner-shortcuts"><span>เลือกตามตัวละคร</span>{owners.slice(1).map((item)=><button onClick={()=>filterByOwner(item)} key={item}>{item}</button>)}</div>
        <div className="status-popular"><span>สถานะที่เปิดบ่อย</span>{['stun','prone','charmed','restrained','poisoned','web','confusion','erosion'].map((slug)=>{ const effect = statusEffects.find((item)=>item.slug === slug); return effect ? <button onClick={()=>jumpToEffect(slug)} key={slug}>{effect.th}<small>{effect.en}</small></button> : null; })}</div>
      </nav>
      <div className="status-tools"><label><span>⌕</span><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="ค้นหา Erosion, ผลิบาน, ตาบอด..." /></label><div>{types.map((item)=><button key={item} className={type === item ? 'active' : ''} onClick={()=>setType(item)}>{item}</button>)}</div><select aria-label="กรองตามจอมมาร" value={owner} onChange={(event)=>setOwner(event.target.value)}>{owners.map((item)=><option key={item}>{item}</option>)}</select></div>
      <div className="glossary-count" id="status-results">แสดง <b>{results.length}</b> จาก {statusEffects.length} สถานะ{(type !== 'ทั้งหมด' || owner !== 'ทั้งหมด' || query) && <button onClick={()=>{setQuery('');setType('ทั้งหมด');setOwner('ทั้งหมด');}}>ล้างตัวกรอง</button>}</div>
      <div className="status-effect-grid">{results.map((effect)=><article id={effect.slug} className={`effect-${effect.type}`} key={effect.slug}><div className="effect-heading"><span className="effect-type">{effect.type}</span><small>{effect.owner}</small></div><h2>{effect.th}</h2><h3>{effect.en}</h3><p>{effect.summary}</p><dl><div><dt>ระยะเวลา</dt><dd>{effect.duration}</dd></div><div><dt>การสะสม</dt><dd>{effect.stacks}</dd></div></dl><div className="effect-links"><a href={`https://dungeonwithin.miraheze.org/wiki/Status_Effects#${effect.en.replaceAll(' ', '_')}`} target="_blank" rel="noreferrer">ตรวจข้อมูลต้นทาง ↗</a><a href="#status-navigation">กลับเมนู ↑</a></div></article>)}</div>
      <div className="source-note"><span>คำแปลแฟนเมด ไม่ใช่คำแปลทางการ</span><span>ตรวจต้นทาง 28 ส.ค. 2026 · เป้าหมาย v0.6.0</span></div>
    </section><SiteFooter />
  </main>;
}
