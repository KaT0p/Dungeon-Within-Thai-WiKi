import SiteHeader, { SiteFooter } from '../../components/site-header';
import { projectSources } from '../../content-data';

export default function SourcesPage() {
  return <main className="hub-page"><SiteHeader />
    <section className="data-hero"><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span>แหล่งข้อมูล</p><p className="eyebrow"><span /> Sources & verification</p><h1>ข้อมูลนี้มาจากไหน?</h1><p>ทุกค่าบน Wiki ต้องย้อนกลับไปยังเกม ประกาศทางการ หรือหน้าต้นทางได้ แหล่งชุมชนใช้เป็นจุดเริ่มต้น ไม่ใช่หลักฐานสุดท้าย</p></section>
    <section className="hub-content"><div className="data-warning"><b>ตรวจล่าสุด 19 ต.ค. 2026</b><span>App Store ระบุ v0.6.3 Build 204 วันที่ 15 กันยายน 2026 ส่วนดัชนี Release Note มี Build 205 แต่ยังตรวจรายละเอียดฉบับเต็มไม่ได้ เนื้อหานี้จึงสรุปเฉพาะ Build 204 และยังไม่ได้ตรวจซ้ำในเกม ข่าว v0.7.0 เป็นประกาศล่วงหน้า ข้อมูลรายตัวที่ยังไม่ได้ทบทวนคงเวอร์ชันและสถานะเดิมไว้</span></div><div className="source-cards">{projectSources.map((source)=><article key={source.title}><span className={`source-level level-${source.level.toLowerCase()}`}>{source.level}</span><div><small>{source.type}</small><h2>{source.title}</h2><p>{source.use}</p></div>{source.url ? <a href={source.url} target="_blank" rel="noreferrer">เปิดแหล่งข้อมูล ↗</a> : <span className="local-source">ตรวจจากเกม</span>}</article>)}</div>
      <section className="license-panel"><div><p className="eyebrow"><span /> License</p><h2>การใช้ Wiki อังกฤษ</h2></div><p>ข้อความบน Dungeon Within Wiki ใช้ CC BY-SA 4.0 เว้นแต่ระบุเป็นอย่างอื่น เมื่อแปลหรือดัดแปลงต้องให้เครดิต ลิงก์ต้นฉบับ ระบุการแก้ไข และใช้สิทธิ์ที่เข้ากันได้ ส่วนภาพเกมต้องตรวจสิทธิ์แยกทีละไฟล์</p></section>
      <section className="verification-ladder"><h2>ลำดับความน่าเชื่อถือ</h2>{['เกม Build ปัจจุบัน','Release Note จาก GameCoaster','App Store และ Google Play','Wiki ที่มี Revision และแหล่งอ้างอิง','การทดสอบซ้ำโดยผู้เล่น','ความคิดเห็นจากชุมชน'].map((item,index)=><div key={item}><b>{index+1}</b><span>{item}</span></div>)}</section>
    </section><SiteFooter />
  </main>;
}
