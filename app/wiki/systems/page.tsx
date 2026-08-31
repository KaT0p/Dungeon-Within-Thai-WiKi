import SiteHeader, { SiteFooter } from '../../components/site-header';
import { coreSystems } from '../../content-data';

const nodes = [['Normal / Elite Battle','ต่อสู้และรับ Reward Pack'],['Mid / Final Boss','บอสบังคับและรางวัลระดับสูง'],['Merchant / Chest','ซื้อ Part, Relic และ Reward'],['Event','เลือกผลดีและผลเสีย'],['Sanctuary','Train, Modify, Relocate และ Dismantle'],['Monster Sanctum','Promote, Fuse และ Sacrifice'],['Memorial Altar','เชื่อมกับ Ark of Memory']];

export default function SystemsPage() {
  return <main className="hub-page"><SiteHeader />
    <section className="data-hero"><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span>ระบบเกม</p><p className="eyebrow"><span /> Game systems</p><h1>วงจรการเล่นหลัก</h1><p>ภาพรวมระบบก่อน Run ระหว่าง Run และความก้าวหน้าข้าม Run พร้อมสถานะว่าส่วนใดต้องตรวจใหม่หลัง v0.6.0</p></section>
    <section className="hub-content systems-content"><div className="loop-flow"><span>เตรียม Run</span><i>→</i><span>เลือก Node</span><i>→</i><span>จัดดันเจี้ยน</span><i>→</i><span>ต่อสู้</span><i>→</i><span>พัฒนาข้าม Run</span></div>
      <div className="system-table"><div className="table-head"><span>ระบบ</span><span>ช่วงใช้งาน</span><span>หน้าที่</span></div>{coreSystems.map(([name,phase,description]) => <div key={name}><strong>{name}</strong><span>{phase}</span><p>{description}</p></div>)}</div>
      <a className="system-guide-link" href="/wiki/architects-workshop"><span>Permanent progression</span><strong>Architect&apos;s Workshop</strong><small>ดูสายปลดล็อก 31 รายการ ลำดับแนะนำ ค่าใช้จ่าย และระบบที่ยังต้องตรวจในเกม</small><b>เปิดคู่มือ →</b></a>
      <div className="content-split"><section><p className="eyebrow"><span /> Node map</p><h2>ตัวเลือกภายใน Run</h2><div className="node-list">{nodes.map(([name,desc])=><div key={name}><b>{name}</b><span>{desc}</span></div>)}</div></section><section className="review-panel"><span className="status-pill verified">เพิ่มคู่มือแล้ว</span><h2>ทำความเข้าใจการต่อสู้</h2><ul><li>STR–CHA และ Key Stat</li><li>Ability Modifier และ Proficiency Bonus</li><li>Attack Roll กับ Saving Throw</li><li>แยก Stat, Spell และ Damage Type</li></ul><a className="primary-button" href="/wiki/stats">อ่านคู่มือค่าสถานะ <span>→</span></a></section></div>
    </section><SiteFooter />
  </main>;
}
