'use client';

import { useMemo, useState } from 'react';
import SiteHeader, { SiteFooter } from '../../components/site-header';
import { facilities, facilityCounts, type FacilityKind, type FacilityRarity } from '../../facilities-data';

const kinds: Array<'ทั้งหมด' | FacilityKind> = ['ทั้งหมด', 'สนามล่า', 'กับดัก', 'โครงสร้าง'];
const rarities: Array<'ทุกระดับ' | FacilityRarity> = ['ทุกระดับ', 'Normal', 'Rare', 'Epic', 'Unique'];

const layoutGuides = [
  {
    title: 'แนวรับเริ่มต้นแบบปลอดภัย', difficulty: 'มือใหม่', status: 'อิงคำแนะนำชุมชน', focus: 'ให้กับดัก Safe ช่วยยิงขณะมอนสเตอร์หยุดศัตรู และมีสนามล่าด่านสุดท้ายก่อนห้องจอมมาร',
    cells: [['Ballista', 'trap'], ['สนามล่า', 'hunt'], ['Zone Trap', 'trap'], ['สนามล่าสุดท้าย', 'hunt'], ['สนามล่า', 'hunt'], ['Guillotine', 'trap'], ['โครงสร้าง', 'support'], ['สนามล่า', 'hunt'], ['Zone Trap', 'trap']],
    why: ['Ballista และ Guillotine มีระยะ Adjacent: Safe จึงช่วยสนามล่าโดยไม่ทำร้ายมอนสเตอร์', 'สนามล่า 2 ทำหน้าที่เป็นด่านสุดท้ายก่อนศัตรูเข้าห้องจอมมาร', 'ใช้ห้องโครงสร้างเสริมจุดที่คุ้มที่สุด ไม่ต้องเติมทุกช่อง'],
  },
  {
    title: 'ศูนย์กลางกับดัก', difficulty: 'ปานกลาง', status: 'แนวทางวิเคราะห์ · ควรทดสอบ', focus: 'ใช้ Maintenance Room และ Precision Scope เพิ่มความทนทาน ความแม่น และ Save DC ให้กับดักรอบจุดสนับสนุน',
    cells: [['กับดัก A', 'trap'], ['Maintenance', 'support'], ['กับดัก B', 'trap'], ['สนามล่าสุดท้าย', 'hunt'], ['Precision Scope', 'support'], ['กับดัก C', 'trap'], ['กับดัก D', 'trap'], ['โครงสร้าง', 'support'], ['สนามล่า', 'hunt']],
    why: ['เหมาะกับจอมมาร INT/CON สูง เพราะปลดยากและใช้ได้นานกว่า', 'ตรวจคำว่า Adjacent ของโครงสร้างกับตำแหน่งจริงทุกครั้ง', 'อย่าให้ห้องสนับสนุนเปิดเส้นทางลัดจนฮีโร่ข้ามสนามล่า'],
  },
  {
    title: 'แนว Dangerous แบบมีภูมิคุ้มกัน', difficulty: 'สูง', status: 'แนวทางวิเคราะห์ · ควรทดสอบ', focus: 'เปลี่ยน Friendly Fire เป็นข้อได้เปรียบด้วยมอนสเตอร์ที่ต้านทานหรือป้องกันชนิดความเสียหายของกับดัก',
    cells: [['ทีมต้านธาตุ', 'resist'], ['Dangerous', 'danger'], ['ทีมต้านธาตุ', 'resist'], ['สนามล่าสุดท้าย', 'hunt'], ['Dangerous', 'danger'], ['โครงสร้าง', 'support'], ['ทีมต้านธาตุ', 'resist'], ['Dangerous', 'danger'], ['Safe Trap', 'trap']],
    why: ['เลือก Resistance/Immunity ให้ตรงกับ Fire, Cold, Lightning หรือชนิดที่กับดักสร้างจริง', 'ตรวจ Row / Column / Cross ทั้งหมด ไม่ใช่เฉพาะห้องติดกัน', 'ถ้ายังไม่มีภูมิคุ้มกันที่แน่นอน ให้ใช้ Safe หรือ Zone Trap แทน'],
  },
] as const;

const lordFacilityPlans = [
  { lord: 'Desponia', stat: 'INT 14 · CON 16 · WIS 18', tone: 'purple', role: 'ดีบัฟและยื้อเวลา', rooms: ['Corridor of the Void', 'Last Stand Fortress', 'สนามล่าก่อนห้องจอมมาร'], traps: ['Veil of Plague', 'Decay Spore Colony', 'Venom Torrent'], structures: ['Maintenance Room', 'Precision Scope'], plan: 'ใช้สนามล่าถ่วงเวลาให้ Erosion สะสม แล้วเสริมกับดัก WIS ที่สร้าง Necrotic, Poison หรือดีบัฟ การมี INT/CON ระดับกลางช่วยให้กับดักปลดยากและคงทนกว่าทีมที่ไม่มีค่าสองตัวนี้', avoid: 'อย่าซ้อน Psychic/Necrotic เพียงชนิดเดียวจนไม่มีคำตอบต่อศัตรูที่ต้านทาน' },
  { lord: 'Aura', stat: 'INT 10 · CON 14 · WIS 16', tone: 'green', role: 'แนวหลังและการฟื้นฟู', rooms: ['Highland Watchtower', 'Fountain of Life', 'Life Exchange Chamber'], traps: ['Radiant Orb', 'Guillotine', 'Auto-Intercept Ballista'], structures: ['Unholy Altar', 'War Room'], plan: 'เน้นสนามล่าที่ขยายพลังแนวหลังและการฮีล ใช้ Safe Trap ช่วยยิงจากข้างห้อง เพราะ INT ไม่สูงพอให้พึ่งการปลดกับดักล้มเหลวเป็นแกนหลัก Radiant Orb ใช้ WIS และช่วยทำให้ Blinded', avoid: 'ระวัง Highland Watchtower ลด AC แนวหน้า และอย่าปล่อยให้ทีมมีแต่การฮีลโดยไม่มีดาเมจปิดไฟต์' },
  { lord: 'Rhea', stat: 'INT 6 · CON 18 · STR 18', tone: 'gold', role: 'แนวหน้าปะทะตรง', rooms: ['Shield Wall', 'Gladiator Arena', 'Last Stand Fortress'], traps: ['Arrow', 'Falling Rock', "Titan's Iron Fist"], structures: ['War Room', "Giant's Rampart"], plan: 'ให้สนามล่าและมอนสเตอร์ STR เป็นแกน แล้วใช้กับดัก STR เป็นแรงเสริม CON สูงช่วย Durability แต่ INT ต่ำทำให้ Trap DC สำหรับการปลดต่ำ จึงไม่ควรสร้างผังที่แพ้ทันทีเมื่อกับดักถูกปลดเร็ว', avoid: 'Titan’s Iron Fist เป็น Dangerous แบบทั้งคอลัมน์ ต้องตรวจตำแหน่งฝ่ายเราและการต้านทานก่อนใช้' },
] as const;

const facilityBundles = [
  ['ป้อมฮีลสวนกลับ', 'Fountain of Life + Life Exchange Chamber', 'ฮีลทีมเมื่อเริ่มต่อสู้ และเปลี่ยนการฮีลเป้าหมายฝ่ายเดียวให้เป็นความเสียหาย Necrotic', 'Aura / ทีม WIS และฮีล'],
  ['แนวหลังยิงฟรี', 'Highland Watchtower + Shield Wall', 'แนวหลังได้ Ranged Advantage ขณะที่ Shield Wall ช่วยชดเชย AC ให้แนวหน้า', 'ทีม Ranged ที่มีแนวหน้าค่า CON สูง'],
  ['กับดักยิงข้างห้อง', 'Ballista + Guillotine + Hunting Ground', 'กับดัก Safe ระยะติดกันช่วยสร้าง Damage และ Bleeding ขณะสนามล่าหยุดปาร์ตี้ฮีโร่', 'ชุดเริ่มต้นที่ปลอดภัยกับทุกจอมมาร'],
  ['ศูนย์ซ่อมกับดัก', 'Maintenance Room + Precision Scope + Traps', 'เพิ่ม Durability, Attack Roll และ Save DC ให้กับดักในพื้นที่ติดกัน', 'จอมมาร INT/CON สูง'],
  ['กำแพงคอลัมน์', "Last Stand Fortress + Giant's Rampart", 'เพิ่ม Save, AC และ Critical Immunity พร้อมกระจาย Defense Stance เมื่อฝ่ายเราในห้องรับดาเมจ', 'ทีมแทงก์และยื้อเวลา'],
  ['อันตรายควบคุมฝูง', 'Rune of Absolute Zero + ทีมต้าน Cold', 'สร้าง Cold และ Restrained ทั้งคอลัมน์ โดยลดผลเสีย Friendly Fire ด้วยภูมิต้านทานที่ตรงชนิด', 'ทีมเฉพาะทาง · ต้องทดสอบ'],
] as const;

export default function FacilitiesPage() {
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<(typeof kinds)[number]>('ทั้งหมด');
  const [rarity, setRarity] = useState<(typeof rarities)[number]>('ทุกระดับ');
  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase('th');
    return facilities.filter((entry) => {
      const matchesKind = kind === 'ทั้งหมด' || entry.kind === kind;
      const matchesRarity = rarity === 'ทุกระดับ' || entry.rarity === rarity;
      const haystack = `${entry.name} ${entry.nameTh} ${entry.summary} ${entry.formula ?? ''} ${entry.tags.join(' ')}`.toLocaleLowerCase('th');
      return matchesKind && matchesRarity && (!term || haystack.includes(term));
    });
  }, [query, kind, rarity]);

  return <main className="hub-page"><SiteHeader />
    <section className="data-hero facility-hero"><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span>ห้องและกับดัก</p><p className="eyebrow"><span /> Phase 2.4</p><h1>ห้อง กับดัก และ<br />โครงสร้างสนับสนุน</h1><p>ดูหน้าที่ พื้นที่ออกผล สูตรความเสียหาย และข้อควรระวังก่อนวางสิ่งปลูกสร้างแต่ละชนิดในดันเจี้ยน</p><div className="data-warning"><b>สถานะข้อมูล</b><span>แปลจากหน้า Facilities ของ Wiki ชุมชน ตัวเลขทั้งหมดควรตรวจซ้ำในเกมเวอร์ชัน 0.6.0</span></div></section>

    <section className="hub-content facility-content">
      <div className="facility-summary"><article><span>♞</span><div><small>Hunting Grounds</small><b>{facilityCounts.huntingGrounds} สนามล่า</b><p>วางมอนสเตอร์ได้ 1–4 ตัว แบ่งแนวหน้า 2 และแนวหลัง 2</p></div></article><article><span>⌁</span><div><small>Traps</small><b>{facilityCounts.traps} กับดัก</b><p>สร้างความเสียหายหรือสถานะเมื่อฝ่ายฮีโร่ปลดกับดักไม่สำเร็จ</p></div></article><article><span>◇</span><div><small>Structures</small><b>{facilityCounts.structures} โครงสร้าง</b><p>เสริมพลังห้อง กับดัก หรือมอนสเตอร์ และถูกนับเป็นห้องว่าง</p></div></article></div>
      <nav className="facility-page-nav" aria-label="นำทางหน้าห้องและกับดัก"><a href="#layout-guide"><b>2.4b</b><span>แนวทางจัดผัง</span></a><a href="#lord-facilities"><b>3</b><span>ชุดตามจอมมาร</span></a><a href="#facility-bundles"><b>6</b><span>คู่ห้องแนะนำ</span></a><a href="#facility-catalog"><b>41</b><span>รายการทั้งหมด</span></a></nav>

      <section className="facility-basics"><div className="section-title-row"><h2>กลไกที่ควรรู้ก่อนเลือกห้อง</h2><span>อ่านส่วนนี้ก่อน</span></div><div><article><b>01</b><h3>สนามล่าหยุดฮีโร่ไว้ต่อสู้</h3><p>การต่อสู้จบเมื่อฮีโร่ตายหมด มอนสเตอร์ตายหมด หรือผ่านจำนวนเทิร์นที่กำหนด หากห้องว่าง ฮีโร่จะเดินผ่านได้อย่างปลอดภัย</p></article><article><b>02</b><h3>กับดักมีค่าความทนทาน</h3><p>การปลดกับดักจะลด Durability และเมื่อเหลือ 0 กับดักจะไม่ทำงาน มีฮีโร่เพียงหนึ่งปาร์ตี้ที่กำลังปลดกับดักเดียวกันได้ในแต่ละครั้ง</p></article><article><b>03</b><h3>โครงสร้างไม่หยุดฮีโร่</h3><p>ฮีโร่มองโครงสร้างเป็นห้องว่าง จึงควรวางเพื่อเสริมพื้นที่สำคัญ ไม่ควรคาดหวังให้ใช้เป็นแนวกั้นด้วยตัวมันเอง</p></article></div></section>

      <section className="trap-rule"><div><p className="eyebrow"><span /> Disarm check</p><h2>ฮีโร่ปลดกับดักอย่างไร?</h2><p>ฮีโร่ใช้ <b>DEX Check</b> เทียบกับ DC ของกับดัก ส่วน INT ของจอมมารในสูตรหมายถึง <b>Ability Modifier</b> ไม่ใช่คะแนน INT ดิบ</p></div><div className="trap-equation"><small>Trap Disarm DC</small><code>12 + INT Modifier ของจอมมาร</code><span>ตัวอย่าง INT 18 → Modifier +4 → <b>DC 16</b></span><a href="/wiki/stats">ดูวิธีคำนวณ Modifier →</a></div></section>

      <section className="effect-legend"><div className="section-title-row"><h2>อ่านขอบเขตของกับดัก</h2><span>Safe กับ Dangerous ต่างกันมาก</span></div><div><article><b>Zone</b><p>มีผลกับกลุ่มฮีโร่ที่กำลังปลดกับดักในห้อง ไม่กระทบกลุ่มที่เพียงเดินผ่าน</p></article><article><b>Safe</b><p>โจมตีหลายปาร์ตี้ในพื้นที่ที่ระบุ และไม่ระบุว่าโดนมอนสเตอร์ฝ่ายเรา</p></article><article className="danger"><b>Dangerous</b><p>โจมตีทั้งฮีโร่และมอนสเตอร์ฝ่ายเราในระยะ ควรจัดทีมที่มี Resistance หรือ Immunity ตรงชนิดความเสียหาย</p></article><article><b>Row / Column / Cross</b><p>ออกผลทั้งแถว ทั้งคอลัมน์ หรือเป็นรูปกากบาทตามตำแหน่งห้อง</p></article></div></section>

      <section className="layout-guide" id="layout-guide"><div className="section-title-row"><div><p className="eyebrow"><span /> Phase 2.4b</p><h2>ตัวอย่างผังจริง: ห้องจอมมาร + กริด 3×3</h2></div><span>อิงตำแหน่งจากภาพภายในเกม</span></div><div className="layout-anatomy"><div className="anatomy-lord"><small>อยู่นอกกริด</small><b>ห้องจอมมาร</b></div><i>←</i><div className="anatomy-grid"><span>3 แถว</span><b>พื้นที่วาง Facility 3×3</b><small>9 ช่องทางด้านขวา</small></div><i>←</i><div className="anatomy-entry"><small>ทิศทางการบุก</small><b>ฝั่งทางเข้า</b></div></div><p className="layout-correction"><b>โครงสร้างที่ถูกต้อง:</b> ห้องจอมมารอยู่แยกซ้ายสุดและไม่นับเป็นหนึ่งใน 9 ช่อง ส่วนแผนภาพด้านล่างเรียงคอลัมน์จาก “ใกล้จอมมาร” ทางซ้าย ไปยัง “ฝั่งทางเข้า” ทางขวา</p><div className="layout-principles"><article><b>1</b><span><strong>สนามล่าในคอลัมน์ซ้าย</strong><small>วางแนวรับด่านสุดท้ายในฝั่งที่อยู่ใกล้ห้องจอมมาร</small></span></article><article><b>2</b><span><strong>Safe Trap อยู่ข้างสนามล่า</strong><small>ช่วยยิงระหว่างที่มอนสเตอร์หยุดฮีโร่โดยไม่โดนฝ่ายเรา</small></span></article><article><b>3</b><span><strong>Dangerous ต้องตรวจทั้งระยะ</strong><small>เช็กทุกห้องใน Row, Column หรือ Cross ก่อนวางมอนสเตอร์</small></span></article><article><b>4</b><span><strong>โครงสร้างต้องคุ้มพื้นที่</strong><small>ฮีโร่เดินผ่านได้ จึงควรเสริมห้องสำคัญมากกว่าวางโดด ๆ</small></span></article><article><b>5</b><span><strong>INT + CON คือแกนกับดัก</strong><small>INT เพิ่ม DC การปลด ส่วน CON เพิ่ม Durability</small></span></article></div><div className="layout-card-grid">{layoutGuides.map((layout) => <article className="layout-card" key={layout.title}><div className="layout-card-heading"><div><small>{layout.difficulty}</small><h3>{layout.title}</h3></div><span>{layout.status}</span></div><p>{layout.focus}</p><div className="dungeon-board"><div className="dark-lord-outside"><small>ปลายทาง</small><b>ห้อง<br />จอมมาร</b></div><i className="board-arrow">←</i><div className="grid-side"><div className="grid-axis"><span>ใกล้จอมมาร</span><span>กึ่งกลาง</span><span>ฝั่งทางเข้า</span></div><div className="dungeon-grid" aria-label={`ผังตัวอย่าง ${layout.title}`}>{layout.cells.map(([label,tone], index) => <div className={`room-cell ${tone}`} key={`${label}-${index}`}><small>แถว {Math.floor(index / 3) + 1} · ช่อง {(index % 3) + 1}</small><b>{label}</b></div>)}</div><div className="invasion-direction"><span>ห้องจอมมาร</span><b>← ทิศทางการบุก ←</b><span>ทางเข้า</span></div></div></div><ul>{layout.why.map((reason) => <li key={reason}>{reason}</li>)}</ul></article>)}</div><div className="layout-legend"><span className="hunt">สนามล่า</span><span className="trap">กับดัก Safe / Zone</span><span className="danger">กับดัก Dangerous</span><span className="resist">ทีมต้านธาตุ</span><span className="support">โครงสร้าง</span><span className="lord">ห้องจอมมาร (นอกกริด)</span></div></section>

      <section className="lord-facilities" id="lord-facilities"><div className="section-title-row"><div><p className="eyebrow"><span /> Dark Lord synergy</p><h2>ชุดห้องตามจอมมาร</h2></div><span>คำแนะนำเชิงวิเคราะห์ · ไม่ใช่สูตรบังคับ</span></div><div>{lordFacilityPlans.map((plan) => <article className={plan.tone} key={plan.lord}><div className="lord-plan-title"><span>{plan.lord.slice(0,1)}</span><div><small>{plan.role}</small><h3>{plan.lord}</h3><p>{plan.stat}</p></div></div><p className="lord-plan-copy">{plan.plan}</p><dl><div><dt>สนามล่า</dt><dd>{plan.rooms.join(' · ')}</dd></div><div><dt>กับดัก</dt><dd>{plan.traps.join(' · ')}</dd></div><div><dt>โครงสร้าง</dt><dd>{plan.structures.join(' · ')}</dd></div></dl><p className="lord-plan-warning"><b>ข้อควรระวัง</b>{plan.avoid}</p><a href={`/wiki/dark-lords/${plan.lord.toLocaleLowerCase()}`}>ดูแนวทางเล่น {plan.lord} →</a></article>)}</div></section>

      <section className="facility-bundles" id="facility-bundles"><div className="section-title-row"><div><p className="eyebrow"><span /> Facility bundles</p><h2>คู่ห้องและชุดกับดักที่น่าลอง</h2></div><span>เริ่มจาก 2–3 ห้อง แล้วค่อยขยาย</span></div><div>{facilityBundles.map(([name,combo,result,bestFor], index) => <article key={name}><span>{String(index + 1).padStart(2,'0')}</span><div><small>{bestFor}</small><h3>{name}</h3><code>{combo}</code><p>{result}</p></div></article>)}</div></section>

      <section className="facility-catalog" id="facility-catalog"><div className="section-title-row"><div><h2>รายการสิ่งปลูกสร้างทั้งหมด</h2><p>แสดง {results.length} จาก {facilityCounts.total} รายการ</p></div><span>ชื่ออังกฤษเป็นชื่อที่ใช้ค้นในเกม</span></div><div className="facility-tools"><label><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ค้นชื่อ สูตร สถานะ หรือชนิดความเสียหาย..." aria-label="ค้นหาห้องและกับดัก" /></label><select value={rarity} onChange={(event) => setRarity(event.target.value as (typeof rarities)[number])} aria-label="กรองตามระดับความหายาก">{rarities.map((item) => <option key={item}>{item}</option>)}</select></div><div className="facility-kind-tabs" role="group" aria-label="กรองตามประเภท">{kinds.map((item) => <button className={kind === item ? 'active' : ''} onClick={() => setKind(item)} key={item}>{item}<small>{item === 'ทั้งหมด' ? facilityCounts.total : item === 'สนามล่า' ? facilityCounts.huntingGrounds : item === 'กับดัก' ? facilityCounts.traps : facilityCounts.structures}</small></button>)}</div>
        {results.length ? <div className="facility-grid">{results.map((entry) => <article className={`facility-card ${entry.kind === 'สนามล่า' ? 'kind-hunting' : entry.kind === 'กับดัก' ? 'kind-trap' : 'kind-structure'} rarity-${entry.rarity.toLocaleLowerCase()}`} key={entry.name}><div className="facility-card-head"><span>{entry.kind === 'สนามล่า' ? '♞' : entry.kind === 'กับดัก' ? '⌁' : '◇'}</span><div><small>{entry.kind} · {entry.scope}</small><h3>{entry.name}</h3><p>{entry.nameTh}</p></div><b>{entry.rarity}</b></div><p className="facility-description">{entry.summary}</p>{entry.formula && <code>{entry.formula}</code>}<div className="facility-tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{entry.caution && <p className="facility-caution"><b>ระวัง</b>{entry.caution}</p>}</article>)}</div> : <div className="monster-empty"><b>ไม่พบรายการที่ตรงกัน</b><p>ลองลบคำค้นหรือเปลี่ยนตัวกรองประเภทและความหายาก</p></div>}
      </section>

      <div className="inline-warning">ชื่อภาษาไทยในหน้านี้เป็นคำแปลเพื่อช่วยทำความเข้าใจ ไม่ใช่ชื่อภาษาไทยอย่างเป็นทางการในเกม แหล่งข้อมูล: Dungeon Within Wiki — Facilities (CC BY-SA 4.0)</div>
    </section><SiteFooter />
  </main>;
}
