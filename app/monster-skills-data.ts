export type MonsterSkillSlot = 'A' | 'B' | 'M' | 'S1' | 'S2';

export type MonsterSkillTranslation = {
  name: string;
  tier: 1 | 2 | 3;
  type: 'Beast' | 'Elemental' | 'Undead';
  sourceUpdated: string;
  skills: readonly {
    slot: MonsterSkillSlot;
    kind: string;
    en: string;
    th: string;
  }[];
};

const kinds: Record<MonsterSkillSlot, string> = {
  A: 'การโจมตีพื้นฐาน',
  B: 'คุณลักษณะติดตัว',
  M: 'ชิ้นส่วนหลัก',
  S1: 'ชิ้นส่วนเสริม 1',
  S2: 'ชิ้นส่วนเสริม 2',
};

function monster(
  name: string,
  tier: 1 | 2 | 3,
  type: MonsterSkillTranslation['type'],
  sourceUpdated: string,
  skills: readonly [MonsterSkillSlot, string, string][],
): MonsterSkillTranslation {
  return { name, tier, type, sourceUpdated, skills: skills.map(([slot, en, th]) => ({ slot, kind: kinds[slot], en, th })) };
}

export const monsterSkillTranslations = [
  monster('Ratatoskr', 1, 'Beast', '25 ส.ค. 2026', [
    ['A', 'Quick Slash', 'ฟันฉับไว'], ['B', 'Nimble Movement', 'การเคลื่อนไหวคล่องแคล่ว'], ['M', 'Taunting Acorn', 'ลูกโอ๊กยั่วยุ'], ['S1', 'Eye of Yggdrasil', 'ดวงตาแห่งอิกดราซิล'], ['S2', 'Swift Tail', 'หางว่องไว'],
  ]),
  monster('Selkie', 1, 'Beast', '25 ส.ค. 2026', [
    ['A', 'Mind Blast', 'ระเบิดพลังจิต'], ['B', 'Aquatic Adaptation', 'การปรับตัวใต้น้ำ'], ['M', 'Song of the Winter Sea', 'บทเพลงแห่งทะเลเหมันต์'], ['S1', "Wave's Grace", 'พรแห่งเกลียวคลื่น'], ['S2', 'Healing Mist', 'หมอกเยียวยา'],
  ]),
  monster('Lesser Water Elemental', 1, 'Elemental', '25 ส.ค. 2026', [
    ['A', 'Ice Arrow', 'ศรน้ำแข็ง'], ['B', 'Water Form', 'ร่างวารี'], ['M', 'Wave Binding Arm', 'แขนพันธนาการคลื่น'], ['S1', 'Watery Skin', 'ผิวกายวารี'], ['S2', 'Healing Droplet', 'หยดน้ำเยียวยา'],
  ]),
  monster('Lesser Fire Elemental', 1, 'Elemental', '3 ส.ค. 2026', [
    ['A', 'Flame Thrust', 'แทงเพลิง'], ['B', 'Flame Form', 'ร่างเพลิง'], ['M', 'Scorching Skewer', 'เสียบทะลวงแผดเผา'], ['S1', 'Burning Heart', 'หัวใจลุกไหม้'], ['S2', 'Flame Shield', 'โล่เพลิง'],
  ]),
  monster('Lesser Air Elemental', 1, 'Elemental', '23 ก.ค. 2026', [
    ['A', 'Basic Shot', 'ยิงพื้นฐาน'], ['B', 'Air Form', 'ร่างวายุ'], ['M', 'Gust Core', 'แก่นลมกรรโชก'], ['S1', 'Blurred Form', 'ร่างพร่าเลือน'], ['S2', 'Electro Shocker', 'เครื่องช็อตไฟฟ้า'],
  ]),
  monster('Slime', 1, 'Elemental', '18 ส.ค. 2026', [
    ['A', 'Acid Splash', 'สาดกรด'], ['B', 'Amorphous Body', 'ร่างไร้รูป'], ['M', 'Corrosive Vent', 'ช่องระบายไอกรด'], ['S1', 'Viscous Membrane', 'เยื่อเหนียวหนืด'], ['S2', 'Unstable Core', 'แก่นไม่เสถียร'],
  ]),
  monster('Zombie', 1, 'Beast', '22 ก.ค. 2026', [
    ['A', 'Heavy Strike', 'โจมตีหนัก'], ['B', 'Undead Fortitude', 'ความทรหดแห่งอันเดด'], ['M', 'Rotting Grasp', 'กรงเล็บเน่าเปื่อย'], ['S1', 'Plague Sac', 'ถุงโรคระบาด'], ['S2', 'Dulled Nerves', 'ประสาทด้านชา'],
  ]),
  monster('Skeleton', 1, 'Undead', '14 ก.ค. 2026', [
    ['A', 'Quick Slash', 'ฟันฉับไว'], ['B', 'Bone Structure', 'โครงกระดูก'], ['M', 'Skeleton Shield Arm', 'แขนโล่โครงกระดูก'], ['S1', 'Hollow Skull', 'กะโหลกกลวง'], ['S2', 'Rattling Legs', 'ขากระดูกสั่นกราว'],
  ]),
  monster('Skeleton Mage', 1, 'Undead', '23 ก.ค. 2026', [
    ['A', 'Fire Arrow', 'ศรเพลิง'], ['B', 'Magic Resistance', 'ต้านทานเวทมนตร์'], ['M', 'Chilling Touch Arm', 'แขนสัมผัสเย็นเยียบ'], ['S1', 'Shade Robe', 'เสื้อคลุมเงา'], ['S2', 'Mana Repulsion Bone', 'กระดูกผลักไสมานา'],
  ]),
  monster('Harpy', 2, 'Beast', '23 ก.ค. 2026', [
    ['A', 'Basic Shot(T2)', 'ยิงพื้นฐาน (T2)'], ['B', 'Harpy’s Wings', 'ปีกฮาร์ปี'], ['M', 'Steelfeather Gust', 'ลมกรรโชกขนเหล็ก'], ['S1', 'Sharp Blade Feathers', 'ขนคมดั่งใบมีด'], ['S2', 'Evasive Maneuver', 'ยุทธวิธีหลบหลีก'],
  ]),
  monster('Tiger', 2, 'Beast', '22 ก.ค. 2026', [
    ['A', 'Basic Slash', 'ฟันพื้นฐาน'], ['B', 'Scent of Blood', 'กลิ่นคาวเลือด'], ['M', 'Rending Forepaws', 'อุ้งเท้าหน้าฉีกกระชาก'], ['S1', 'Wild Instincts', 'สัญชาตญาณป่า'], ['S2', 'Tiger Hide', 'หนังเสือ'],
  ]),
  monster('Dream Elemental', 2, 'Elemental', '14 ก.ค. 2026', [
    ['A', 'Chill Touch', 'สัมผัสเย็นเยียบ'], ['B', 'Dream Walk', 'ท่องฝัน'], ['M', 'Dream Devour', 'กลืนกินความฝัน'], ['S1', 'Hypnotic Eye', 'ดวงตาสะกดจิต'], ['S2', 'Mental Blessing', 'พรแห่งจิตใจ'],
  ]),
  monster('Nymph', 2, 'Elemental', '19 ก.ค. 2026', [
    ['A', 'Mind Pressure', 'แรงกดดันทางจิต'], ['B', 'Fey Charm', 'เสน่ห์แห่งเฟย์'], ['M', "Nature's Blessing", 'พรแห่งธรรมชาติ'], ['S1', 'Life Aura', 'รัศมีชีวิต'], ['S2', 'Guardian Touch', 'สัมผัสผู้พิทักษ์'],
  ]),
  monster('Sprout Soldier', 2, 'Elemental', '2 ส.ค. 2026', [
    ['A', 'Basic Slash', 'ฟันพื้นฐาน'], ['B', 'Thorny Bark', 'เปลือกหนาม'], ['M', 'Thorn Spear', 'หอกหนาม'], ['S1', 'Sturdy Stem', 'ลำต้นแข็งแรง'], ['S2', 'Layered Petals', 'กลีบดอกซ้อนชั้น'],
  ]),
  monster('Ghoul', 2, 'Undead', '14 ก.ค. 2026', [
    ['A', 'Quick Slash', 'ฟันฉับไว'], ['B', 'Paralyzing Touch', 'สัมผัสอัมพาต'], ['M', 'Neurotoxin Claw', 'กรงเล็บพิษประสาท'], ['S1', "Ambusher's Claw", 'กรงเล็บนักซุ่มโจมตี'], ['S2', 'Gluttonous Stomach', 'กระเพาะตะกละ'],
  ]),
  monster('Death Soldier', 2, 'Undead', '2 ส.ค. 2026', [
    ['A', 'Basic Slash', 'ฟันพื้นฐาน'], ['B', 'Life Drain', 'ดูดพลังชีวิต'], ['M', 'Soul Drain Strike', 'โจมตีดูดวิญญาณ'], ['S1', 'Undead Resilience', 'ความทรหดแห่งอันเดด'], ['S2', 'Black Armor of Retribution', 'เกราะดำแห่งการตอบโต้'],
  ]),
  monster('Skeletal Steed', 2, 'Undead', '2 ส.ค. 2026', [
    ['A', 'Basic Thrust', 'แทงพื้นฐาน'], ['B', 'Spectral Dash', 'พุ่งทะยานวิญญาณ'], ['M', 'Death Charge', 'พุ่งชาร์จมรณะ'], ['S1', 'Hollow Hooves', 'กีบกลวง'], ['S2', 'Wail of the Dead', 'เสียงคร่ำครวญแห่งผู้ตาย'],
  ]),
  monster('Vampire Spawn', 2, 'Undead', '29 ก.ค. 2026', [
    ['A', 'Blood Extraction', 'สกัดโลหิต'], ['B', "Vampire's Regeneration", 'การฟื้นฟูของแวมไพร์'], ['M', 'Charming Bite', 'รอยกัดสะกดใจ'], ['S1', 'Unassuming Approach', 'ย่างกรายไร้พิรุธ'], ['S2', 'Exploit Weakness', 'ฉวยจุดอ่อน'],
  ]),
  monster('Wendigo', 3, 'Beast', '18 ส.ค. 2026', [
    ['A', 'Heavy Strike', 'โจมตีหนัก'], ['B', 'Insatiable Hunger', 'ความหิวไม่รู้จบ'], ['M', 'Ruthless Strike', 'โจมตีไร้ปรานี'], ['S1', 'Glacial Guardian', 'ผู้พิทักษ์ธารน้ำแข็ง'], ['S2', 'Thick Hide', 'หนังหนา'],
  ]),
  monster('Lamia', 3, 'Undead', '14 ก.ค. 2026', [
    ['A', 'Quick Slash', 'ฟันฉับไว'], ['B', 'Serpent Dance', 'ระบำอสรพิษ'], ['M', 'Riccochet Chakram', 'จักรสะท้อน'], ['S1', 'Venomous Chakram', 'จักรพิษ'], ['S2', 'Coiling Tail', 'หางขดรัด'],
  ]),
  monster('Kelpie', 3, 'Elemental', '16 ส.ค. 2026', [
    ['A', 'Basic Thrust', 'แทงพื้นฐาน'], ['B', 'Deep Sea Pressure', 'แรงกดดันใต้ทะเลลึก'], ['M', 'Seaweed Spear', 'หอกสาหร่าย'], ['S1', 'Seaweed Form', 'ร่างสาหร่าย'], ['S2', 'Drowning Vortex', 'วังวนกลืนจม'],
  ]),
  monster('Salamander', 3, 'Elemental', '16 ส.ค. 2026', [
    ['A', 'Flame Thrust', 'แทงเพลิง'], ['B', 'Burning Skin', 'ผิวกายลุกไหม้'], ['M', 'Lava Spear', 'หอกลาวา'], ['S1', 'Blazing Aura', 'รัศมีเพลิง'], ['S2', 'Seething Heart', 'หัวใจเดือดพล่าน'],
  ]),
  monster('Sylph', 3, 'Elemental', '16 ส.ค. 2026', [
    ['A', 'Quick Slash', 'ฟันฉับไว'], ['B', 'Air Current', 'กระแสลม'], ['M', 'Wind Strike', 'โจมตีวายุ'], ['S1', 'Flow Rider', 'ผู้ขี่กระแส'], ['S2', "Assassin's Blade", 'ใบมีดนักลอบสังหาร'],
  ]),
  monster('Ghast', 3, 'Undead', '14 ก.ค. 2026', [
    ['A', 'Quick Slash', 'ฟันฉับไว'], ['B', 'Septic Claws', 'กรงเล็บติดเชื้อ'], ['M', 'Frenzied Assault', 'จู่โจมคลุ้มคลั่ง'], ['S1', 'Savage Predator', 'นักล่าดุร้าย'], ['S2', 'Gluttonous Entrails', 'เครื่องในตะกละ'],
  ]),
  monster('Marionette', 3, 'Undead', '22 ก.ค. 2026', [
    ['A', 'Quick Slash', 'ฟันฉับไว'], ['B', 'Frenzied Movement', 'การเคลื่อนไหวคลุ้มคลั่ง'], ['M', 'Frenzied Strike', 'โจมตีคลุ้มคลั่ง'], ['S1', "Acrobat's Thread", 'ด้ายนักกายกรรม'], ['S2', 'Mocking Thread', 'ด้ายเย้ยหยัน'],
  ]),
  monster('Banshee', 3, 'Undead', '24 ก.ค. 2026', [
    ['A', 'Mind Pressure', 'แรงกดดันทางจิต'], ['B', 'Screaming Soul', 'วิญญาณกรีดร้อง'], ['M', 'Cry of Despair', 'เสียงร่ำไห้แห่งความสิ้นหวัง'], ['S1', 'Etherealize', 'แปรสภาพไร้กาย'], ['S2', 'Death Omen', 'ลางมรณะ'],
  ]),
] as const;

export const monsterSkillCount = monsterSkillTranslations.reduce((total, entry) => total + entry.skills.length, 0);

export function monsterSkillSlug(name: string) {
  return name.toLowerCase().replaceAll(' ', '-');
}
