import SiteHeader, { SiteFooter } from '../../components/site-header';
import { newDarkLords } from '../../patch-data';
import { darkLords, integrationStatus } from '../../content-data';

export default function DarkLordsPage() {
  return <main className="hub-page"><SiteHeader />
    <section className="data-hero"><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span>จอมมาร</p><p className="eyebrow"><span /> Dark Lords</p><h1>ผู้ครองดันเจี้ยน</h1><p>จอมมารทั้ง 6 ตัว รวม Ostea, Quintessa และ Zaria จาก v0.7.0 พร้อมภาพและข้อมูลที่ตรวจสอบได้</p><div className="data-warning"><b>สถานะข้อมูล</b><span>v0.7.0 เปลี่ยน Authority ทั้งระบบ และ v0.7.2 ปรับการต่อสู้ คู่มือ Desponia, Aura และ Rhea ด้านล่างเป็นข้อมูลเดิมที่รอทบทวน ส่วนตัวใหม่ยังรอค่าสถานะและสกิลจากเกม</span></div></section>
    <section className="hub-content">
      <div className="dark-lord-grid">{newDarkLords.map((lord)=><a className={`lord-card ${lord.tone}`} href={`/wiki/dark-lords/${lord.slug}`} key={lord.slug}><div className="lord-portrait"><img src={lord.image} alt={`ภาพตัวละคร ${lord.name}`} /></div><span className="status-pill review">ใหม่ v0.7.0 · รอข้อมูลสกิล</span><p>{lord.mechanic}</p><h2>{lord.name}</h2><small>{lord.theme}</small><i>ดูข้อมูลที่ยืนยันแล้ว →</i></a>)}{darkLords.map((lord) => <a className={`lord-card ${lord.tone}`} href={`/wiki/dark-lords/${lord.slug}`} key={lord.slug}>
        <div className="lord-portrait"><img src={`/images/characters/dark-lords/${lord.slug}.png`} alt={`ภาพตัวละคร ${lord.name}`} /></div><span className="status-pill review">คู่มือเดิม · รอทบทวน</span><p>{lord.keyStat} · {lord.damage.join(' / ')}</p><h2>{lord.name}</h2><strong>{lord.playstyle.archetype}</strong><small>{lord.playstyle.oneLine}</small><div className="mini-stats"><span>HP <b>{lord.stats.HP}</b></span><span>AC <b>{lord.stats.AC}</b></span><span>INIT <b>{lord.stats.Initiative}</b></span></div><i>ดูแนวทางเล่นและข้อมูลทั้งหมด →</i>
      </a>)}</div>
      <div className="source-note"><span>อัปเดตคลังข้อมูล {integrationStatus.updatedAt}</span><span>อ้างอิงเป้าหมาย v{integrationStatus.gameVersion}</span></div>
    </section><SiteFooter />
  </main>;
}
