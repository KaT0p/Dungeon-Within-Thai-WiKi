import SiteHeader, { SiteFooter } from '../components/site-header';

const sections = [
  ['✦', 'ค่าสถานะ', 'อธิบาย STR, DEX, CON, INT, WIS, CHA, Key Stat และวิธีอ่านการโจมตี', '/wiki/stats', '6 Core Stats'],
  ['◈', 'เอฟเฟกต์สถานะ', 'ชื่อไทย ผล ระยะเวลา และจำนวนสแต็กของสถานะที่เชื่อมกับจอมมารและมอนสเตอร์ต้นแบบ', '/wiki/status-effects', '33 สถานะ'],
  ['♜', 'จอมมาร', 'ข้อมูล Desponia, Aura และ Rhea พร้อม Skill, Authority และแนวทางจัดทีม', '/wiki/dark-lords', '3 ตัว · มี Guide'],
  ['♞', 'มอนสเตอร์', 'รายชื่อทั้งหมดพร้อม Tier, ประเภท, Key Stat และหน้ารายละเอียดภาษาไทยต้นแบบ', '/wiki/monsters', '76 ตัว · ละเอียด 3'],
  ['A', 'สกิลมอนสเตอร์ Tier 1–9', 'คลังชื่อไทย–อังกฤษของการโจมตี คุณลักษณะติดตัว และชิ้นส่วน พร้อมสถานะข้อมูลที่ยังขาด', '/wiki/monster-skills', '76 ตัว · 290 ชื่อ'],
  ['⌁', 'ห้องและกับดัก', 'สนามล่า กับดัก และโครงสร้างสนับสนุน พร้อมสูตร ผัง 3×3 และชุดแนะนำตามจอมมาร', '/wiki/facilities', '41 รายการ · มี Guide'],
  ['◆', 'ไอเทมและอุปกรณ์', 'Relic ทั่วไป Relic จอมมาร Relic อีเวนต์ Relic แคมเปญ และคู่มือช่อง Part ของมอนสเตอร์', '/wiki/items', '87 Relics · Part Guide'],
  ['⌘', 'ระบบเกม', 'วงจรการเล่น Node, Combat, Ark of Memory และความก้าวหน้าข้าม Run', '/wiki/systems', '10 ระบบหลัก'],
  ['⌂', "Architect's Workshop", 'ลำดับปลดล็อก สายพึ่งพา ค่าใช้จ่าย และเครื่องมือความก้าวหน้าถาวร', '/wiki/architects-workshop', '31 รายการปลดล็อก'],
  ['A', 'ศัพท์ในเกม', 'พจนานุกรมไทย–อังกฤษ พร้อมสถานะคำที่ต้องตรวจในเกม', '/wiki/glossary', '43 คำบนเว็บ'],
  ['◎', 'แหล่งข้อมูล', 'แหล่งทางการ Wiki ชุมชน และกฎการตรวจสอบข้อมูล', '/wiki/sources', '6 แหล่งหลัก'],
  ['✓', 'Roadmap', 'ความคืบหน้าของการวิจัยและหัวข้อที่จะทำต่อ', '/roadmap', '19 หัวข้อเสร็จ'],
];

export default function WikiIndex() {
  return <main className="hub-page"><SiteHeader />
    <section className="hub-hero"><p className="eyebrow"><span /> คลังข้อมูล</p><h1>Dungeon Within<br /><em>ฉบับภาษาไทย</em></h1><p>ข้อมูลในส่วนนี้ผ่านการจัดหมวดและติดสถานะตรวจสอบแล้ว เนื้อหาที่อาจล้าสมัยจะแสดงคำเตือนอย่างชัดเจน</p></section>
    <section className="hub-content"><div className="hub-grid">{sections.map(([icon, title, description, href, count]) => <a className="hub-card" href={href} key={title}>
      <span className="hub-icon">{icon}</span><span className="status-pill verified">พร้อมอ่าน</span><h2>{title}</h2><p>{description}</p><div><small>{count}</small><b>เปิดข้อมูล →</b></div>
    </a>)}</div></section><SiteFooter />
  </main>;
}
