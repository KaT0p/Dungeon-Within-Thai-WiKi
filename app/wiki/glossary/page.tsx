'use client';
import { useMemo, useState } from 'react';
import SiteHeader, { SiteFooter } from '../../components/site-header';
import { glossaryTerms } from '../../content-data';

export default function GlossaryPage() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('ทั้งหมด');
  const terms = useMemo(() => glossaryTerms.filter(([en, th, status]) => {
    const matchesText = `${en} ${th}`.toLocaleLowerCase('th').includes(query.trim().toLocaleLowerCase('th'));
    return matchesText && (filter === 'ทั้งหมด' || status === filter);
  }), [query, filter]);
  const filters = ['ทั้งหมด', 'ใช้ใน Wiki', 'คงอังกฤษ', 'ต้องตรวจในเกม'];
  return <main className="hub-page"><SiteHeader />
    <section className="data-hero"><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span>ศัพท์ในเกม</p><p className="eyebrow"><span /> English–Thai</p><h1>พจนานุกรมศัพท์</h1><p>มาตรฐานคำแปลของโปรเจกต์ไทย ไม่ใช่คำแปลทางการจาก GameCoaster ชื่อเฉพาะยังคงภาษาอังกฤษเพื่อให้ค้นข้อมูลต่อได้</p></section>
    <section className="hub-content"><div className="glossary-tools"><label><span>⌕</span><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="ค้นหาคำอังกฤษหรือคำไทย..." /></label><div>{filters.map((item)=><button className={filter === item ? 'active' : ''} onClick={()=>setFilter(item)} key={item}>{item}</button>)}</div></div>
      <div className="glossary-count">แสดง <b>{terms.length}</b> จาก {glossaryTerms.length} คำที่นำเข้ารอบแรก</div>
      <div className="glossary-table"><div className="table-head"><span>English</span><span>คำที่ใช้ใน Wiki</span><span>สถานะ</span></div>{terms.map(([en,th,status])=><div key={en}><strong>{en}</strong><span>{th}</span><i className={status === 'ต้องตรวจในเกม' ? 'review' : status === 'คงอังกฤษ' ? 'english' : 'verified'}>{status}</i></div>)}</div>
      <div className="source-note"><span>ฉบับเต็มใน docs/GLOSSARY.md มีมากกว่า 100 รายการ</span><span>หน้านี้นำเข้าคำแกนหลักก่อน</span></div>
    </section><SiteFooter />
  </main>;
}
