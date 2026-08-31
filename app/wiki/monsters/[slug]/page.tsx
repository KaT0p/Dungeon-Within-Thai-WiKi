import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SiteHeader, { SiteFooter } from '../../../components/site-header';
import { monsterImagePath, monsters, prototypeMonsters, statusEffects } from '../../../content-data';
import { monsterSkillSlug, monsterSkillTranslations } from '../../../monster-skills-data';

export function generateStaticParams() {
  return Array.from(new Set([...prototypeMonsters.map((monster) => monster.slug), ...monsterSkillTranslations.map((monster) => monsterSkillSlug(monster.name))])).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const monster = prototypeMonsters.find((item) => item.slug === slug);
  if (monster) return {
    title: `${monster.name} | Dungeon Within Thailand Wiki`, description: monster.summaryTh,
    openGraph: { title: monster.name, description: monster.summaryTh, images: [] },
    twitter: { title: monster.name, description: monster.summaryTh, images: [] },
  };
  const translated = monsterSkillTranslations.find((item) => monsterSkillSlug(item.name) === slug);
  const description = translated ? translated.sourceAvailable ? `คำแปลไทย–อังกฤษของสกิลและชิ้นส่วน ${translated.name} Tier ${translated.tier}` : `สถานะข้อมูล ${translated.name} Tier ${translated.tier} ซึ่งยังไม่มีหน้ารายละเอียดใน Wiki ต้นทาง` : '';
  return translated ? { title: `${translated.name} | Dungeon Within Thailand Wiki`, description, openGraph: { title: translated.name, description, images: [] }, twitter: { title: translated.name, description, images: [] } } : {};
}

export default async function MonsterDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const monster = prototypeMonsters.find((item) => item.slug === slug);
  if (!monster) {
    const translated = monsterSkillTranslations.find((item) => monsterSkillSlug(item.name) === slug);
    if (!translated) notFound();
    const inventory = monsters.find(([name]) => name === translated.name);
    if (!inventory) notFound();
    const [, tier, type, keyStat, attack] = inventory;
    return <main className="hub-page"><SiteHeader />
      <section className="monster-detail-hero rose">
        <div><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span><a href="/wiki/monsters">มอนสเตอร์</a><span>/</span>{translated.name}</p><span className="status-pill review">{translated.sourceAvailable ? 'ชื่อแปลแล้ว · เอฟเฟกต์รอตรวจ' : 'รอข้อมูลต้นทาง'}</span><h1>{translated.name}</h1><p>{translated.sourceAvailable ? 'รวมชื่อภาษาไทยและอังกฤษของการโจมตีพื้นฐาน คุณลักษณะติดตัว และชิ้นส่วนทั้งสามช่อง โดยคงชื่ออังกฤษไว้สำหรับค้นในเกม' : 'Wiki ต้นทางยังไม่มีหน้ารายละเอียดของมอนสเตอร์ตัวนี้ จึงแสดงเฉพาะข้อมูลจากหน้ารวมและยังไม่แต่งชื่อสกิลหรือค่าสถานะที่ยืนยันไม่ได้'}</p><div className="monster-hero-tags"><b>Tier {tier}</b><span>{type}</span><span>{translated.sourceAvailable ? `สกิล ${translated.skills.length} รายการ` : 'รอข้อมูลสกิล'}</span></div></div>
        <div className="monster-detail-image"><img src={monsterImagePath(translated.name, tier)} alt={`ภาพมอนสเตอร์ ${translated.name}`} /><span>Tier {tier} · {type}</span></div>
      </section>
      <section className="detail-layout"><article className="detail-main">
        <section><div className="section-title-row"><h2>ข้อมูลพื้นฐาน</h2><span>จากบัญชีมอนสเตอร์</span></div><div className="fact-grid"><div><small>Key Stat</small><b>{keyStat}</b></div><div><small>Damage</small><b>{attack}</b></div><div><small>Tier</small><b>{tier}</b></div><div><small>Type</small><b>{type}</b></div><div><small>สถานะข้อมูล</small><b>needs_review</b></div></div></section>
        <section><div className="section-title-row"><h2>สกิลและชิ้นส่วน</h2><span>{translated.sourceAvailable ? 'คำแปลไทย + ชื่ออังกฤษ' : 'ยังไม่มีข้อมูลยืนยัน'}</span></div>{translated.skills.length > 0 ? <div className="monster-skill-list">{translated.skills.map((skill) => <article key={skill.slot}><div className="monster-skill-head"><b>{skill.slot}</b><div><h3>{skill.th}</h3><small>{skill.en}</small></div><span>{skill.kind}</span></div><p>แปลชื่อแล้ว รายละเอียดเอฟเฟกต์ ตัวเลข สูตร และเงื่อนไขการทอยยังต้องตรวจเทียบกับ Codex ในเกม v0.6.0</p></article>)}</div> : <div className="pending-skill-data"><b>ยังไม่มีชื่อสกิลในแหล่งข้อมูล</b><p>ช่อง A, B, M, S1 และ S2 จะเพิ่มเมื่อ Wiki ต้นทางหรือ Codex ในเกมมีข้อมูลที่ตรวจสอบได้</p></div>}</section>
        <section className="missing-section"><h2>ขอบเขตข้อมูลหน้านี้</h2><ul><li>ชื่อไทยเป็นคำแปลแฟนเมด ไม่ใช่คำแปลทางการ</li><li>ยังไม่ระบุบทบาทหรือซินเนอร์จีจากการคาดเดา</li><li>เมื่อยืนยันเอฟเฟกต์ในเกมแล้ว หน้านี้จะขยายเป็นรายละเอียดฉบับเต็ม</li></ul></section>
      </article><aside className="detail-side"><div><small>{translated.sourceAvailable ? 'Wiki ต้นทางแก้ไขล่าสุด' : 'ตรวจสถานะต้นทาง'}</small><b>{translated.sourceUpdated}</b></div><div><small>สถานะ</small><b>{translated.sourceAvailable ? 'ชื่อแปลแล้ว · รอตรวจเอฟเฟกต์' : 'ไม่มีหน้ารายละเอียดต้นทาง'}</b></div><a href="/wiki/monster-skills">เปิดคลังคำแปลทั้งหมด →</a>{translated.sourceAvailable && <a href={`https://dungeonwithin.miraheze.org/wiki/${translated.name.replaceAll(' ', '_')}`} target="_blank" rel="noreferrer">เปิด Wiki ต้นทาง ↗</a>}<a href="/wiki/monsters">← กลับบัญชีมอนสเตอร์</a></aside></section><SiteFooter />
    </main>;
  }
  const statEntries = Object.entries(monster.stats);
  return <main className="hub-page"><SiteHeader />
    <section className={`monster-detail-hero ${monster.tone}`}>
      <div><p className="breadcrumbs"><a href="/wiki">คลังข้อมูล</a><span>/</span><a href="/wiki/monsters">มอนสเตอร์</a><span>/</span>{monster.name}</p><span className="status-pill review">NEEDS REVIEW · v0.6.0</span><h1>{monster.name}</h1><p>{monster.summaryTh}</p><div className="monster-hero-tags"><b>Tier {monster.tier}</b><span>{monster.type}</span><span>{monster.roleTh}</span></div></div>
      <div className="monster-detail-image"><img src={monsterImagePath(monster.name, monster.tier)} alt={`ภาพมอนสเตอร์ ${monster.name}`} /><span>Tier {monster.tier} · {monster.type}</span></div>
    </section>
    <section className="detail-layout"><article className="detail-main">
      <section><div className="section-title-row"><h2>ข้อมูลการต่อสู้</h2><span>Base Dominance {monster.dominance}</span></div><div className="fact-grid"><div><small>Key Stat</small><b>{monster.keyStat}</b></div><div><small>Damage</small><b>{monster.attackTypes.join(' / ')}</b></div><div><small>Immunity</small><b>{monster.immunity.join(' / ')}</b></div><div><small>Resistance</small><b>{monster.resistance.join(' / ')}</b></div><div><small>Vulnerability</small><b>{monster.vulnerability.join(' / ')}</b></div></div></section>
      <section><div className="section-title-row"><h2>ค่าสถานะตั้งต้น</h2><span>ก่อนติดตั้ง Part</span></div><div className="stats-grid">{statEntries.map(([name, value]) => <div key={name}><small>{name}</small><b>{value}</b></div>)}</div><p className="inline-warning">ตัวเลขและสูตรทั้งหมดเป็นข้อมูลจาก Wiki ชุมชน ต้องตรวจซ้ำกับ Codex ในเกม v0.6.0</p></section>
      <section><div className="section-title-row"><h2>สกิลและชิ้นส่วน</h2><span>คำแปลไทย + ชื่ออังกฤษ</span></div><div className="monster-skill-list">{monster.skills.map((skill) => <article key={skill.en}><div className="monster-skill-head"><b>{skill.slot}</b><div><h3>{skill.th}</h3><small>{skill.en}</small></div><span>{skill.kind}</span></div><p>{skill.description}</p><dl><div><dt>ผล / ความเสียหาย</dt><dd>{skill.damage}</dd></div><div><dt>การทอย / เงื่อนไข</dt><dd>{skill.checks}</dd></div></dl>{skill.statuses.length > 0 && <div className="skill-status-links"><small>สถานะที่เกี่ยวข้อง</small>{skill.statuses.map((statusSlug) => { const effect = statusEffects.find((item) => item.slug === statusSlug); return effect ? <a key={statusSlug} href={`/wiki/status-effects#${statusSlug}`}>{effect.th}<span>{effect.en}</span></a> : null; })}</div>}</article>)}</div></section>
      <section className="missing-section"><h2>ข้อควรรู้ก่อนนำไปจัดทีม</h2><ul><li>คำว่า {monster.roleTh} เป็นคำอธิบายจากกลไกสกิล ไม่ใช่ Role ทางการของเกม</li><li>ค่า Dominance ของ Part และสูตรบางรายการอาจเปลี่ยนตามแพตช์</li><li>ภาพมอนสเตอร์มาจากคลังไฟล์ที่จัดแยกตาม Tier ภายในโปรเจกต์</li></ul></section>
    </article><aside className="detail-side"><div><small>Wiki ต้นทางแก้ไขล่าสุด</small><b>{monster.sourceUpdated}</b></div><div><small>สถานะ</small><b>แปลแล้ว · รอตรวจในเกม</b></div><a href="/wiki/status-effects">พจนานุกรมสถานะ →</a><a href={`https://dungeonwithin.miraheze.org/wiki/${monster.name}`} target="_blank" rel="noreferrer">เปิด Wiki ต้นทาง ↗</a><a href="/wiki/monsters">← กลับบัญชีมอนสเตอร์</a></aside></section><SiteFooter />
  </main>;
}
