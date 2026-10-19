import type { Metadata } from 'next';
import SiteHeader, { SiteFooter } from '../components/site-header';
import { updates } from '../updates-data';

export const metadata: Metadata = {
  title: 'อัปเดต | Dungeon Within Thailand Wiki',
  description: 'รวมแพตช์เกม ข่าวล่วงหน้า และเนื้อหาใหม่บน Wiki พร้อมวันที่เพิ่มข้อมูลและลิงก์อ่านรายละเอียด',
};

const groups = ['แพตช์เกม', 'ข่าวล่วงหน้า', 'เนื้อหาบนเว็บ'] as const;
const dateLabel = (date: string) => new Intl.DateTimeFormat('th-TH', {
  day: 'numeric', month: 'short', year: 'numeric', calendar: 'gregory', timeZone: 'Asia/Bangkok',
}).format(new Date(`${date}T00:00:00+07:00`));

export default function UpdatesPage() {
  return <main className="hub-page"><SiteHeader />
    <section className="data-hero">
      <p className="breadcrumbs"><a href="/">หน้าหลัก</a><span>/</span>อัปเดต</p>
      <p className="eyebrow"><span /> ข่าวและความเคลื่อนไหว</p>
      <h1>มีอะไรใหม่บ้าง?</h1>
      <p>รวมอัปเดตที่เพิ่มเข้ามาใน Wiki อ่านสรุปสิ่งที่เปลี่ยน แล้วเปิดรายละเอียดของแต่ละหัวข้อได้ทันที</p>
      <nav className="updates-jumps" aria-label="เลือกประเภทอัปเดต">
        {groups.map((group, index) => <a href={`#update-group-${index}`} key={group}>{group} <span>{updates.filter((item) => item.kind === group).length}</span></a>)}
      </nav>
    </section>
    <div className="hub-content updates-content">
      <p className="updates-date-note">วันที่แสดงคือวันที่เพิ่มข้อมูลบนเว็บ ไม่ใช่วันปล่อยแพตช์เกม · ภายในแต่ละหมวดเรียงจากใหม่ไปเก่า</p>
      {groups.map((group, index) => <section className="updates-group" id={`update-group-${index}`} key={group} aria-labelledby={`update-title-${index}`}>
        <h2 id={`update-title-${index}`}>{group}</h2>
        {group === 'ข่าวล่วงหน้า' && <p className="updates-date-note">ข้อมูลระหว่างพัฒนา อาจเปลี่ยนแปลงได้ และยังไม่นับเป็นระบบที่เปิดใช้แล้วตามข้อมูลที่บันทึกใน Wiki</p>}
        <div className="updates-list">{updates.filter((item) => item.kind === group).map((item) => <article className="update-entry" key={item.href}>
          <div className="update-meta"><time dateTime={item.date}>{dateLabel(item.date)}</time><span>{item.category}</span></div>
          <div><h3><a href={item.href}>{item.title}</a></h3><p>{item.description}</p><a className="update-read" href={item.href}>อ่านรายละเอียด <span aria-hidden="true">→</span></a></div>
        </article>)}</div>
      </section>)}
    </div><SiteFooter />
  </main>;
}
