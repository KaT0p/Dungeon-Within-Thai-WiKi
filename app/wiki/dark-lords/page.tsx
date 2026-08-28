import SiteHeader, { SiteFooter } from '../../components/site-header';
import { darkLords, integrationStatus } from '../../content-data';

export default function DarkLordsPage() {
  return <main className="hub-page"><SiteHeader />
    <section className="data-hero"><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span>จอมมาร</p><p className="eyebrow"><span /> Dark Lords</p><h1>ผู้ครองดันเจี้ยน</h1><p>เปรียบเทียบจอมมารทั้ง 3 ตัว พร้อมค่าสถานะ Skill, Part, Authority และแนวทางจัดทีมแบบเข้าใจเหตุผล ไม่ใช่เพียงรายชื่อ Build สำเร็จรูป</p><div className="data-warning"><b>สถานะข้อมูล</b><span>กลไกอ้างอิง Wiki ส่วนแนวทางเล่นเป็นคำแนะนำที่ต้องปรับตาม Trial, Part และของที่สุ่มได้ในแต่ละ Run</span></div></section>
    <section className="hub-content">
      <div className="dark-lord-grid">{darkLords.map((lord) => <a className={`lord-card ${lord.tone}`} href={`/wiki/dark-lords/${lord.slug}`} key={lord.slug}>
        <div className="lord-portrait"><img src={`/images/characters/dark-lords/${lord.slug}.png`} alt={`ภาพตัวละคร ${lord.name}`} /></div><span className="status-pill review">Guide ใหม่</span><p>{lord.keyStat} · {lord.damage.join(' / ')}</p><h2>{lord.name}</h2><strong>{lord.playstyle.archetype}</strong><small>{lord.playstyle.oneLine}</small><div className="mini-stats"><span>HP <b>{lord.stats.HP}</b></span><span>AC <b>{lord.stats.AC}</b></span><span>INIT <b>{lord.stats.Initiative}</b></span></div><i>ดูแนวทางเล่นและข้อมูลทั้งหมด →</i>
      </a>)}</div>
      <div className="source-note"><span>อัปเดตคลังข้อมูล {integrationStatus.updatedAt}</span><span>อ้างอิงเป้าหมาย v{integrationStatus.gameVersion}</span></div>
    </section><SiteFooter />
  </main>;
}
