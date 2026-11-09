import SiteHeader, { SiteFooter } from './site-header';
import { newDarkLords, recentPatches } from '../patch-data';

export default function NewDarkLordDetail({ lord }: { lord: typeof newDarkLords[number] }) {
  return <main className="hub-page"><SiteHeader />
    <section className={`lord-detail-hero ${lord.tone}`}><div className="lord-detail-copy"><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span><a href="/wiki/dark-lords">จอมมาร</a><span>/</span>{lord.name}</p><span className="status-pill review">เพิ่มใน v0.7.0 · ตรวจ 9 พ.ย. 2026</span><h1>{lord.name}</h1><p>{lord.theme}</p><div className="core-badge"><small>ทรัพยากร / กลไกที่พบในประกาศ</small><b>{lord.mechanic}</b></div></div><div className="lord-detail-portrait"><img src={lord.image} alt={`ภาพตัวละคร ${lord.name}`} /></div></section>
    <section className="detail-layout"><article className="detail-main">
      <section><h2>ข้อมูลที่ยืนยันแล้ว</h2><p>GameCoaster ระบุชื่อ {lord.name} เป็นหนึ่งในจอมมารใหม่ 3 ตัวใน v0.7.0 Build 208 พร้อมการออกแบบ Authority ใหม่ทั้งระบบ</p><p>{lord.note}</p><a href={lord.source} target="_blank" rel="noreferrer">ประกาศที่กล่าวถึงกลไกนี้ ↗</a></section>
      <section className="missing-section"><h2>ข้อมูลที่ยังรอตรวจจากเกม</h2><p>ประกาศแพตช์ไม่ใช่รายการความสามารถฉบับเต็ม จึงยังไม่ระบุค่าหรือแนะนำ Build จนกว่าจะมีหลักฐานจากเวอร์ชันปัจจุบัน</p><ul><li>เงื่อนไขปลดล็อกและค่าใช้จ่าย</li><li>Key Stat, ค่าสถานะตั้งต้น และภูมิคุ้มกัน</li><li>Skill, Part และ Authority พร้อมตัวเลขและคูลดาวน์</li><li>Promotion, Ascension และ Aspect ทุกระดับ</li><li>แนวทางจัดทีมที่ทดสอบกับ v0.7.2</li></ul></section>
      <section><h2>แพตช์ที่เกี่ยวข้อง</h2><p>v0.7.2 ปรับการต่อสู้และเอฟเฟกต์จำนวนมาก ค่าจาก Build ก่อนหน้าอาจเปลี่ยนแล้ว</p><a href="/wiki/systems#version-072">อ่านสรุปแพตช์ภาษาไทย →</a></section>
    </article><aside className="detail-side"><div><small>สถานะ</small><b>ยืนยันการเพิ่มตัวละคร · รอข้อมูลรายสกิล</b></div><a href={recentPatches[2].source} target="_blank" rel="noreferrer">ประกาศเพิ่มจอมมาร v0.7.0 ↗</a><a href={lord.source} target="_blank" rel="noreferrer">การปรับกลไกจากทางการ ↗</a><a href="/wiki/dark-lords">← กลับหน้าจอมมาร</a></aside></section><SiteFooter />
  </main>;
}
