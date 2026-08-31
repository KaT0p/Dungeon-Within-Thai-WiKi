import SiteHeader, { SiteFooter } from '../components/site-header';
import { roadmapPhases } from '../content-data';

export default function RoadmapPage() {
  const done = roadmapPhases.filter((phase)=>phase.status === 'done').length;
  return <main className="hub-page"><SiteHeader />
    <section className="data-hero"><p className="breadcrumbs"><a href="/">หน้าหลัก</a><span>/</span>Roadmap</p><p className="eyebrow"><span /> Project progress</p><h1>ค่อย ๆ สร้างจากข้อมูลจริง</h1><p>เราเก็บข้อมูลทีละหัวข้อ ตรวจแหล่งที่มา แล้วจึงนำเข้าหน้าเว็บ สถานะนี้ช่วยให้เห็นชัดว่าส่วนใดพร้อมใช้และส่วนใดยังเป็นเพียงงานวิจัย</p></section>
    <section className="hub-content"><div className="progress-overview"><div><small>หัวข้อที่เสร็จ</small><b>{done}/{roadmapPhases.length}</b></div><div className="progress-track"><span style={{width:`${done/roadmapPhases.length*100}%`}} /></div><p>Content Integration รอบแรก</p></div>
      <div className="roadmap-list">{roadmapPhases.map((phase)=><article className={phase.status} key={phase.id}><span>{phase.status === 'done' ? '✓' : phase.status === 'next' ? '→' : '·'}</span><div><small>Phase {phase.id}</small><h2>{phase.title}</h2><p>{phase.output}</p></div><i>{phase.status === 'done' ? 'เสร็จแล้ว' : phase.status === 'next' ? 'หัวข้อถัดไป' : 'รอดำเนินการ'}</i></article>)}</div>
      <div className="next-callout"><span>หัวข้อถัดไป</span><h2>Phase 2.6 — ศัตรูและผู้บุกรุก</h2><p>ทำบัญชีประเภท ความสามารถ และจุดอ่อนของผู้บุกรุก โดยแยกข้อมูลที่ยืนยันได้ออกจากหัวข้อที่ยังต้องตรวจในเกม</p></div>
    </section><SiteFooter />
  </main>;
}
