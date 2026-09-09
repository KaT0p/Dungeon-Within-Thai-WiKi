import SiteHeader, { SiteFooter } from '../../components/site-header';
import { coreSystems } from '../../content-data';

const nodes = [['Normal / Elite Battle','ต่อสู้และรับ Reward Pack'],['Mid / Final Boss','บอสบังคับและรางวัลระดับสูง'],['Merchant / Chest','ซื้อ Part, Relic และ Reward'],['Event','เลือกผลดีและผลเสีย'],['Sanctuary','Train, Modify, Relocate และ Dismantle'],['Monster Sanctum','Promote, Fuse และ Sacrifice'],['Memorial Altar','เชื่อมกับ Ark of Memory']];

const patchHighlights = [
  { title: 'Variant Research', status: 'ระบบใหม่', description: 'นำจำนวนครั้งที่ Extract Variant ซึ่งบันทึกใน Compendium กลับมาลงทุนเพื่อเพิ่ม Ability Score ให้มอนสเตอร์ชนิดนั้น โดยโบนัสมีผลกับทุกตัวไม่ว่าจะได้รับมาก่อนหรือหลังการวิจัย' },
  { title: 'Monster Promotion', status: 'เพิ่มพลัง', description: 'โบนัสจากการเลื่อนขั้นเพิ่มเป็นสองเท่า และยกเลิก Dominance penalty จาก Monster Promotion' },
  { title: 'Awakening Stage', status: 'ปรับค่า', description: 'ช่วง Primary Ability Score ที่ได้รับเปลี่ยนจาก 0–4 เป็น 4–8 และ Tooltip แยก Base, Training, Awakening กับ Variant Research ชัดเจนขึ้น' },
  { title: 'Trial of Assault', status: 'บททดสอบใหม่', description: 'เพิ่ม Trial of Assault โดย Release Note ฉบับเต็มระบุว่าแทน Trial of Invincibility แต่ข้อความบน Store ระบุ Forgotten Trial จึงยังต้องตรวจชื่อเดิมใน Build 199' },
];

const patchFixes = [
  'แก้การใช้และแสดง Ability Score ใน Part tooltip รวมถึงการเปลี่ยน Part เมื่อมี Ethereal Part ตั้งแต่ 2 ช่อง',
  'แก้ Vessel of the Sovereign, Sole Sovereign และ War Machine ที่คำนวณผลหรือจำนวน Action ไม่ถูกต้อง',
  'แก้ Hunting Ground เมื่อศัตรูเข้าอย่างน้อย 3 กลุ่ม, DoT นอก Combat และ Trap ที่ยังทำงานหลังจบการต่อสู้',
  'แก้ Damage Reduction ของ Warlord Kiria และ Web Dome ที่เคยส่งผลกับการโจมตีทุกแบบ',
  'แก้ Curse Evasion, Trial of Armament ระดับ 3, Expanded Throne และ Modification Stage ของ Facility เกรดสูง',
];

export default function SystemsPage() {
  return <main className="hub-page"><SiteHeader />
    <section className="data-hero"><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span>ระบบเกม</p><p className="eyebrow"><span /> Game systems</p><h1>วงจรการเล่นหลัก</h1><p>ภาพรวมระบบก่อน Run ระหว่าง Run และความก้าวหน้าข้าม Run พร้อมรายการเปลี่ยนแปลงที่ยืนยันจาก Release Note v0.6.2 Build 199</p></section>
    <section className="hub-content systems-content"><div className="loop-flow"><span>เตรียม Run</span><i>→</i><span>เลือก Node</span><i>→</i><span>จัดดันเจี้ยน</span><i>→</i><span>ต่อสู้</span><i>→</i><span>พัฒนาข้าม Run</span></div>
      <section className="patch-panel" id="version-062"><div className="section-title-row"><div><p className="eyebrow"><span /> v0.6.2 · Build 199</p><h2>มีอะไรเปลี่ยนในเวอร์ชันล่าสุด?</h2><p>ข้อมูลส่วนนี้ยืนยันจาก Release Note ทางการ ส่วนค่ารายตัวที่แพตช์ไม่ได้ระบุยังคงสถานะ needs_review</p></div><a href="https://gamecoaster.notion.site/p/v0-6-2-Build-199-3d04966ac9c380fbaba5ecda46d764cb" target="_blank" rel="noreferrer">Release Note ↗</a></div><div className="patch-highlight-grid">{patchHighlights.map((item)=><article key={item.title}><small>{item.status}</small><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><div className="patch-fixes"><div><small>Bug fixes ที่กระทบข้อมูลใน Wiki</small><h3>จุดที่ต้องตรวจซ้ำในเกม</h3></div><ul>{patchFixes.map((item)=><li key={item}>{item}</li>)}</ul></div><p className="patch-note-warning"><b>หมายเหตุ:</b> การอัปเดตฐานข้อมูลครั้งนี้ครอบคลุม Release Note v0.6.1 Build 198 ด้วย ซึ่งเพิ่ม Memento Mori War Room, Tactical Map, Facility Repeat Modification และแคมเปญ Ascension and Curses</p></section>
      <div className="system-table"><div className="table-head"><span>ระบบ</span><span>ช่วงใช้งาน</span><span>หน้าที่</span></div>{coreSystems.map(([name,phase,description]) => <div key={name}><strong>{name}</strong><span>{phase}</span><p>{description}</p></div>)}</div>
      <a className="system-guide-link" href="/wiki/architects-workshop"><span>Permanent progression</span><strong>Architect&apos;s Workshop</strong><small>ดูสายปลดล็อก 31 รายการ ลำดับแนะนำ ค่าใช้จ่าย และระบบที่ยังต้องตรวจในเกม</small><b>เปิดคู่มือ →</b></a>
      <div className="content-split"><section><p className="eyebrow"><span /> Node map</p><h2>ตัวเลือกภายใน Run</h2><div className="node-list">{nodes.map(([name,desc])=><div key={name}><b>{name}</b><span>{desc}</span></div>)}</div></section><section className="review-panel"><span className="status-pill verified">เพิ่มคู่มือแล้ว</span><h2>ทำความเข้าใจการต่อสู้</h2><ul><li>STR–CHA และ Key Stat</li><li>Ability Modifier และ Proficiency Bonus</li><li>Attack Roll กับ Saving Throw</li><li>แยก Stat, Spell และ Damage Type</li></ul><a className="primary-button" href="/wiki/stats">อ่านคู่มือค่าสถานะ <span>→</span></a></section></div>
    </section><SiteFooter />
  </main>;
}
