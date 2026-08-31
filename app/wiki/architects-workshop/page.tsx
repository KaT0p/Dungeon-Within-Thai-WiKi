import type { Metadata } from 'next';
import SiteHeader, { SiteFooter } from '../../components/site-header';

export const metadata: Metadata = {
  title: "Architect's Workshop | Dungeon Within Thailand Wiki",
  description: "คู่มือ Architect's Workshop ลำดับปลดล็อก สายพึ่งพา ค่าใช้จ่าย และระบบถาวรระหว่าง Run",
};

type WorkshopUnlock = {
  name: string;
  cost: string;
  requires: string;
  summary: string;
  verifiedCost: boolean;
};

const unlockGroups: { title: string; subtitle: string; tone: string; items: WorkshopUnlock[] }[] = [
  {
    title: 'มอนสเตอร์และสิ่งปลูกสร้าง', subtitle: 'พัฒนา รื้อ หลอมรวม และเพิ่มความสามารถ', tone: 'violet', items: [
      { name: 'Essence Chamber', cost: '50 Fragments', requires: 'เริ่มต้น', summary: 'ปลดล็อก Memory ของมอนสเตอร์เพื่อพัฒนาให้แข็งแกร่งขึ้น', verifiedCost: true },
      { name: 'Workshop', cost: '100 Abyssal Ink', requires: 'Essence Chamber', summary: 'ปลดล็อก Memory และระบบพัฒนาสิ่งปลูกสร้าง', verifiedCost: true },
      { name: 'Expansion Tool', cost: 'ต้นทางไม่ระบุ', requires: 'Workshop', summary: 'เพิ่ม Expand; วาง Facility ชนิดเดิมทับตำแหน่งเดิมเพื่อ Promote', verifiedCost: false },
      { name: 'Attachment Tool', cost: '250 Abyssal Ink', requires: 'Expansion Tool', summary: 'เพิ่มผลของ Facility ชนิดเดียวกันเข้าไปในตัวที่วางอยู่เดิม', verifiedCost: true },
      { name: 'Exhibition Hall', cost: '100 Fragments + 100 Abyssal Ink', requires: 'Workshop', summary: 'ปลดล็อก Collection เพื่อยืมพลังจากสิ่งโบราณที่หลับใหล', verifiedCost: true },
      { name: 'Dismantle Tool', cost: '50 Abyssal Ink', requires: 'Essence Chamber', summary: 'เพิ่ม Dismantle ที่ Sanctuary เพื่อลบมอนสเตอร์และสุ่มรับ Part ที่ติดอยู่หนึ่งชิ้น', verifiedCost: true },
      { name: 'Sacrificial Tool', cost: '100 Fragments', requires: 'Essence Chamber', summary: 'สละมอนสเตอร์จาก Reward Pack เพื่อรับ EXP ให้จอมมาร', verifiedCost: true },
      { name: 'Monster Sanctum', cost: 'ต้นทางไม่ระบุ', requires: 'Sacrificial Tool', summary: 'เพิ่ม Node สำหรับ Promote, Fuse และ Sacrifice มอนสเตอร์', verifiedCost: false },
      { name: 'Transfer Tool', cost: 'ต้นทางไม่ระบุ', requires: 'Monster Sanctum', summary: 'ย้าย Trait, Part, Variant หรือ Promotion ผ่าน Ark ตามเงื่อนไข', verifiedCost: false },
      { name: 'Guaranteed Sanctum', cost: '1,000 Abyssal Ink', requires: 'Monster Sanctum', summary: 'รับประกัน Monster Sanctum ก่อนต่อสู้บอสประจำ Stage', verifiedCost: true },
    ],
  },
  {
    title: 'จอมมารและ Ark of Memory', subtitle: 'เก็บ Build ข้าม Run และขยายความก้าวหน้าถาวร', tone: 'teal', items: [
      { name: "Dark Lord's Quarters", cost: '1 Abyssal Ink', requires: 'เริ่มต้น', summary: 'ปลุกจอมมารและปลดล็อกพลังกับ Trait ของแต่ละตัว', verifiedCost: true },
      { name: "Dark Lord's Quarters (Expanded)", cost: '500 Fragments', requires: "Dark Lord's Quarters", summary: 'ปลดล็อก Aspect ของจอมมาร และเป็นทางผ่านไป Ark of Memory', verifiedCost: true },
      { name: 'Ark of Memory', cost: 'ต้นทางไม่ระบุ', requires: "Dark Lord's Quarters (Expanded)", summary: 'เก็บมอนสเตอร์และ Facility เพื่อใช้ต่อใน Run ภายหลัง', verifiedCost: false },
      { name: 'Imprint Crystal', cost: 'ต้นทางไม่ระบุ', requires: 'Ark of Memory', summary: 'รับ Crystal หลังชนะบอสสุดท้าย เพื่อบันทึกของที่มีลง Ark', verifiedCost: false },
      { name: 'Summoning Crystal', cost: '10 · สกุลเงินรอตรวจ', requires: 'Ark of Memory', summary: 'เรียกมอนสเตอร์หรือ Facility หนึ่งรายการจาก Ark หลังการต่อสู้แรก', verifiedCost: false },
      { name: 'Vanguard Muster (1/4)', cost: '1 · สกุลเงินรอตรวจ', requires: 'Ark of Memory', summary: 'นำมอนสเตอร์ Rank 3 หรือต่ำกว่าจาก Ark มาเริ่ม Run อัตโนมัติ', verifiedCost: false },
      { name: 'Guaranteed Altar', cost: '300 Abyssal Ink', requires: 'Ark of Memory', summary: 'รับประกัน Altar of Memory ก่อนต่อสู้บอสประจำ Stage', verifiedCost: true },
      { name: 'Mythic Legacy Expansion', cost: '15 Hourglasses', requires: 'Ark of Memory', summary: 'เพิ่มช่อง Ark สำหรับมอนสเตอร์ นอกเหนือจากช่องที่ซื้อใน Ark', verifiedCost: true },
      { name: 'Mythic Records Expansion', cost: '25 Hourglasses', requires: 'Ark of Memory', summary: 'เพิ่มช่อง Ark สำหรับ Facility นอกเหนือจากช่องที่ซื้อใน Ark', verifiedCost: true },
      { name: 'Rhea', cost: '150 Fragments', requires: "Dark Lord's Quarters", summary: 'ปลดล็อก Rhea จอมมารสาย Valor และแนวหน้า', verifiedCost: true },
      { name: 'Vessel of the Sovereign (1/10)', cost: '500 Abyssal Ink', requires: "Dark Lord's Quarters", summary: 'เพิ่มเพดานของ Dominance Enhancement ที่สุ่มได้เมื่อ Promote จอมมาร', verifiedCost: true },
    ],
  },
  {
    title: 'เศรษฐกิจและ Dominance', subtitle: 'แลกทรัพยากรและเร่งโอกาสพบมอนสเตอร์ระดับสูง', tone: 'gold', items: [
      { name: 'Trading Post', cost: '500 Abyssal Ink', requires: 'เริ่มต้น', summary: 'ใช้ Forgotten Gold แลกทรัพยากร รวมถึงช่องทางหา Hourglass แบบทำซ้ำได้', verifiedCost: true },
      { name: 'Pouch of Forgotten Gold (1/8)', cost: 'เริ่ม 80 Abyssal Ink', requires: 'Trading Post', summary: 'รับ Forgotten Gold เพิ่มเมื่อผ่าน Stage และเพิ่มตามระดับความยาก', verifiedCost: true },
      { name: 'Fragment of Dominance (1/10)', cost: 'เริ่ม 500 Abyssal Ink', requires: 'Trading Post', summary: 'เพิ่ม Dominance เมื่อผ่านแต่ละ Stage และเปิดทางไป Abyssal Command', verifiedCost: true },
      { name: 'Abyssal Command (1/20)', cost: 'เริ่ม 500 Fragments', requires: 'Fragment of Dominance', summary: 'เพิ่มโอกาสพบมอนสเตอร์เกรดสูงใน Battle Reward Pack', verifiedCost: true },
    ],
  },
  {
    title: 'ข้อมูลและความสะดวก', subtitle: 'ฟังก์ชันช่วยเล่นที่ไม่ใช่สายพัฒนา Build โดยตรง', tone: 'rose', items: [
      { name: 'Flow of Battle (1/3)', cost: '3 · สกุลเงินรอตรวจ', requires: 'ผ่าน Stage 4', summary: 'ปลดล็อกความเร็วต่อสู้ x2.0, x2.5 และสูงสุด x3.0', verifiedCost: false },
      { name: 'Free Will', cost: '5 · สกุลเงินรอตรวจ', requires: 'ผ่าน Stage 4', summary: 'เปิด Auto-use ให้ Authority ของจอมมาร และตั้งค่าแยกราย Authority ได้', verifiedCost: false },
      { name: 'Codex', cost: '1 Abyssal Ink', requires: 'เริ่มต้น', summary: 'เก็บข้อมูลสิ่งที่เคยพบและเปิดดูภายหลัง', verifiedCost: true },
      { name: 'Underworld Quests', cost: '25 Abyssal Ink', requires: 'เริ่มต้น', summary: 'ปลดล็อกภารกิจข้าม Run เพื่อรับรางวัล', verifiedCost: true },
      { name: 'Relocation Tool', cost: '10 · สกุลเงินรอตรวจ', requires: 'เริ่มต้น', summary: 'เพิ่ม Relocate ที่ Sanctuary เพื่อจัดตำแหน่ง Facility ใหม่', verifiedCost: false },
      { name: 'Binding of Victory', cost: '1 Abyssal Ink', requires: 'เริ่มต้น', summary: 'อนุญาตให้ Retry หลังแพ้การต่อสู้', verifiedCost: true },
    ],
  },
];

const starterOrder = [
  ['01', 'ปลดของราคาถูกก่อน', 'Essence Chamber, Dark Lord’s Quarters, Codex, Underworld Quests และ Binding of Victory ช่วยเปิดแกนระบบด้วยต้นทุนต่ำ'],
  ['02', 'ขยายห้องจอมมาร', 'Dark Lord’s Quarters (Expanded) เป็นเงื่อนไขสำคัญก่อนเปิด Ark of Memory'],
  ['03', 'เปิด Sacrificial Tool', 'ช่วยเพิ่มเลเวลจอมมารระหว่าง Run และเป็นประตูไป Monster Sanctum'],
  ['04', 'เปิด Ark of Memory', 'เริ่มเก็บมอนสเตอร์และ Facility ที่สร้างดีแล้วไว้ใช้ใน Run ถัดไป'],
  ['05', 'เปิด Monster Sanctum', 'ใช้ Promote และ Fuse เพื่อสร้างมอนสเตอร์ Tier 8–9'],
  ['06', 'เก็บเงินเพื่อ Trading Post', 'ราคาแพงกว่าแกนเริ่มต้น แต่ช่วยสร้างวงจรหา Hourglass และต่อยอด Abyssal Command'],
] as const;

const branches = [
  { title: 'สายมอนสเตอร์', chain: 'Essence Chamber → Sacrificial Tool → Monster Sanctum → Transfer Tool', note: 'เหมาะเมื่ออยากเร่ง Tier, Fuse และย้าย Build ผ่าน Ark' },
  { title: 'สาย Facility', chain: 'Essence Chamber → Workshop → Expansion Tool → Attachment Tool', note: 'เหมาะเมื่อ Facility เป็นแกนหลักของดันเจี้ยน' },
  { title: 'สายข้าม Run', chain: "Dark Lord’s Quarters → Expanded → Ark of Memory → Crystal / Muster / Altar", note: 'ทำให้ Build ที่ลงทุนไว้ไม่หายไปพร้อมการจบ Run' },
  { title: 'สายเศรษฐกิจ', chain: 'Trading Post → Fragment of Dominance → Abyssal Command', note: 'เพิ่ม Dominance และโอกาสพบมอนสเตอร์ระดับสูงในระยะยาว' },
] as const;

const unlockCount = unlockGroups.reduce((total, group) => total + group.items.length, 0);

export default function ArchitectsWorkshopPage() {
  return <main className="hub-page"><SiteHeader />
    <section className="data-hero workshop-hero"><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span><a href="/wiki/systems">ระบบเกม</a><span>/</span>Architect&apos;s Workshop</p><p className="eyebrow"><span /> Permanent progression</p><h1>Architect&apos;s Workshop</h1><p>ศูนย์กลางปลดล็อกฟังก์ชันถาวรด้วยรางวัลจาก Run ยิ่งเปิดระบบหลักมากขึ้น ตัวเลือกสายต่อยอดก็จะปรากฏเพิ่มตามลำดับ</p><div className="data-warning"><b>สถานะข้อมูล</b><span>ตรวจจาก Wiki ต้นทางวันที่ 31 ส.ค. 2026 · หน้า Wiki แก้ไขล่าสุด 9 ส.ค. 2026 · ช่องที่ต้นทางแสดง ??? จะติดป้ายรอตรวจแทนการคาดเดา</span></div></section>
    <section className="hub-content workshop-content">
      <div className="workshop-summary"><article><small>พร้อมใช้เมื่อ</small><b>เริ่มเกม</b><p>Workshop หลักเข้าถึงได้ตั้งแต่ต้น แต่ฟังก์ชันภายในต้องใช้รางวัลจาก Run ปลดทีละสาย</p></article><article><small>รายการในต้นทาง</small><b>{unlockCount} รายการ</b><p>รวมระบบหลัก เครื่องมือ อัปเกรดหลายระดับ และฟังก์ชันอำนวยความสะดวก</p></article><article><small>ทรัพยากรหลัก</small><b>Fragment · Ink · Hourglass</b><p>บางรายการมีไอคอนสกุลเงินที่ Wiki ยังไม่ระบุชื่อ จึงไม่เติมชื่อขึ้นเอง</p></article></div>

      <section className="workshop-intro"><div><p className="eyebrow"><span /> ใช้ทำอะไร?</p><h2>ไม่ได้เพิ่มพลังทันทีทุกช่อง แต่เปิด “เครื่องมือ” ให้ทุก Run หลังจากนี้</h2><p>การซื้อใน Architect&apos;s Workshop คือความก้าวหน้าถาวร เช่น เปิด Ark, เพิ่มคำสั่งใน Sanctuary, เปิด Node ใหม่ หรือทำให้เกมเร็วและจัดการง่ายขึ้น ดังนั้นควรเลือกจากระบบที่แก้คอขวดของบัญชี มากกว่าซื้อเพราะราคาแพงที่สุด</p></div><aside><b>หลักคิดสั้น ๆ</b><span>เริ่ม Run ใหม่แล้วฟังก์ชันยังอยู่ = ความก้าวหน้าถาวร</span><span>ได้มอนสเตอร์หรือ Facility ชิ้นใหม่ = ทรัพยากรของ Run/Ark</span></aside></section>

      <section className="workshop-order"><div className="section-title-row"><div><p className="eyebrow"><span /> ลำดับสำหรับผู้เล่นใหม่</p><h2>เริ่มจากแกนระบบ ก่อนซื้อสายเฉพาะทาง</h2></div><span>เรียบเรียงจาก Recommended Order ของ Wiki</span></div><div>{starterOrder.map(([number, title, description]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{description}</p></div></article>)}</div><p className="workshop-order-note">Dismantle Tool และ Workshop มีประโยชน์มากเช่นกัน ส่วน Relocation Tool จะเห็นผลชัดที่สุดเมื่อเล่น Frontline Expansion ซึ่งต้องจัด Facility บนพื้นที่ขนาดใหญ่กว่าเดิม</p></section>

      <section className="workshop-branches"><div className="section-title-row"><div><p className="eyebrow"><span /> Dependency map</p><h2>ของชิ้นไหนเปิดทางไปอะไร?</h2></div><span>อ่านจากซ้ายไปขวา</span></div><div>{branches.map((branch) => <article key={branch.title}><small>{branch.title}</small><h3>{branch.chain}</h3><p>{branch.note}</p></article>)}</div></section>

      <section className="workshop-catalog" id="unlock-list"><div className="section-title-row"><div><p className="eyebrow"><span /> Unlock archive</p><h2>รายการปลดล็อกทั้งหมด</h2><p>ต้นทุนที่มีคำว่า “เริ่ม” อาจเพิ่มตามระดับ ส่วนรายการรอตรวจคือช่องที่ Wiki ยังแสดงค่าไม่ครบ</p></div><span>{unlockCount} รายการ · v0.6.0 needs_review</span></div>{unlockGroups.map((group) => <section className={`workshop-group ${group.tone}`} key={group.title}><header><div><h3>{group.title}</h3><p>{group.subtitle}</p></div><b>{group.items.length} รายการ</b></header><div className="workshop-table"><div className="table-head"><span>ฟังก์ชัน</span><span>ต้นทุน</span><span>ต้องปลดก่อน</span><span>ผลที่ได้รับ</span></div>{group.items.map((item) => <article key={item.name}><strong>{item.name}</strong><span className={item.verifiedCost ? '' : 'pending-cost'}>{item.cost}</span><small>{item.requires}</small><p>{item.summary}</p></article>)}</div></section>)}</section>

      <section className="workshop-cautions"><div><h2>ข้อมูลที่ยังต้องตรวจในเกม</h2><ul><li>สกุลเงินของ Flow of Battle, Free Will, Relocation Tool, Summoning Crystal และ Vanguard Muster</li><li>ค่าใช้จ่ายของ Expansion Tool, Monster Sanctum, Transfer Tool, Ark of Memory และ Imprint Crystal</li><li>ราคาที่เพิ่มขึ้นในอัปเกรดหลายระดับ เช่น Pouch, Fragment of Dominance และ Abyssal Command</li><li>คำอธิบายบางระบบหลังการปรับ Architect&apos;s Workshop ครั้งใหญ่ในเวอร์ชัน 0.5 และการเปลี่ยนแปลงต่อเนื่องถึง v0.6.0</li></ul></div><aside><small>แหล่งข้อมูล</small><a href="https://dungeonwithin.miraheze.org/wiki/Architect%27s_Workshop" target="_blank" rel="noreferrer">Architect&apos;s Workshop — Dungeon Within Wiki ↗</a><a href="/wiki/systems">← กลับหน้าระบบเกม</a></aside></section>
    </section><SiteFooter />
  </main>;
}
