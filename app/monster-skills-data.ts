export type MonsterSkillSlot = 'A' | 'B' | 'M' | 'S1' | 'S2';

export type MonsterSkillTranslation = {
  name: string;
  tier: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  type: 'Beast' | 'Elemental' | 'Undead' | 'รอตรวจ';
  sourceUpdated: string;
  sourceAvailable: boolean;
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
  tier: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
  type: MonsterSkillTranslation['type'],
  sourceUpdated: string,
  skills: readonly [MonsterSkillSlot, string, string][],
): MonsterSkillTranslation {
  return { name, tier, type, sourceUpdated, sourceAvailable: true, skills: skills.map(([slot, en, th]) => ({ slot, kind: kinds[slot], en, th })) };
}

function pendingMonster(name: string, tier: 4 | 5 | 6): MonsterSkillTranslation {
  return { name, tier, type: 'รอตรวจ', sourceUpdated: 'ตรวจเมื่อ 31 ส.ค. 2026', sourceAvailable: false, skills: [] };
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
  pendingMonster('Minotaur', 4), pendingMonster('Griffon', 4), pendingMonster('Manticore', 4), pendingMonster('Unicorn', 4), pendingMonster('Grief Elemental', 4),
  monster('Nightmare', 4, 'Elemental', '4 ส.ค. 2026', [
    ['A', 'Mind Blast', 'ระเบิดพลังจิต'], ['B', 'Fear Devourer', 'ผู้กลืนกินความกลัว'], ['M', 'Nightmare Arrow', 'ศรฝันร้าย'], ['S1', 'Fear Aura', 'รัศมีความหวาดกลัว'], ['S2', 'Harvest of Fear', 'เก็บเกี่ยวความกลัว'],
  ]),
  pendingMonster('Sprout Knight', 4),
  monster('Nosferatu', 4, 'Undead', '16 ส.ค. 2026', [
    ['A', 'Quick Thrust', 'แทงฉับไว'], ['B', 'Blood Claw', 'กรงเล็บโลหิต'], ['M', 'Blood Rain', 'พิรุณโลหิต'], ['S1', 'Shadow Cloak', 'เสื้อคลุมเงา'], ['S2', 'Mist Step', 'ย่างก้าวหมอก'],
  ]),
  pendingMonster('Death Priest', 4), pendingMonster('Death Ranger', 4),
  monster('Sphinx', 5, 'Beast', '23 ก.ค. 2026', [
    ['A', 'Heavy Strike', 'โจมตีหนัก'], ['B', "Sphinx's Riddle", 'ปริศนาแห่งสฟิงซ์'], ['M', 'Hammer of Judgment', 'ค้อนพิพากษา'], ['S1', 'Scroll of Truth', 'คัมภีร์แห่งสัจจะ'], ['S2', 'Final Verdict', 'คำตัดสินสุดท้าย'],
  ]),
  monster('Basilisk', 5, 'Beast', '25 ส.ค. 2026', [
    ['A', 'Poison Spray', 'พ่นพิษ'], ['B', "Basilisk's Venom", 'พิษแห่งบาซิลิสก์'], ['M', 'Breath of Decay', 'ลมหายใจแห่งความเสื่อมสลาย'], ['S1', 'Hex of Weakness', 'คำสาปอ่อนกำลัง'], ['S2', 'Toxin Release', 'ปลดปล่อยพิษ'],
  ]),
  monster('Cockatrice', 5, 'Beast', '16 ส.ค. 2026', [
    ['A', 'Flash', 'แสงวาบ'], ['B', 'Petrifying Gaze', 'เนตรกลายเป็นหิน'], ['M', 'Death Ray', 'รังสีมรณะ'], ['S1', 'Shatter', 'แตกสลาย'], ['S2', 'Petrified Skin', 'ผิวศิลา'],
  ]),
  monster('Water Elemental', 5, 'Elemental', '14 ก.ค. 2026', [
    ['A', 'Flash', 'แสงวาบ'], ['B', 'Song of Inspiration', 'บทเพลงแห่งแรงบันดาลใจ'], ['M', 'Dissonance', 'เสียงไม่ประสาน'], ['S1', 'Melody of Encouragement', 'ทำนองแห่งกำลังใจ'], ['S2', 'Song of Protection', 'บทเพลงแห่งการปกป้อง'],
  ]),
  pendingMonster('Air Elemental', 5), pendingMonster('Fire Elemental', 5), pendingMonster('Skeleton Lord', 5), pendingMonster('Vampire', 5), pendingMonster('Lich', 5),
  monster('Pegasus', 6, 'Beast', '16 ส.ค. 2026', [
    ['A', 'Quick Thrust', 'แทงฉับไว'], ['B', 'Sacred Radiance', 'รัศมีศักดิ์สิทธิ์'], ['M', 'Meteor Kick', 'ลูกเตะอุกกาบาต'], ['S1', 'Mystic Wings', 'ปีกเร้นลับ'], ['S2', 'Clairvoyance', 'ญาณทิพย์'],
  ]),
  pendingMonster('Gorgon', 6),
  monster('Ugallu', 6, 'Beast', '9 ส.ค. 2026', [
    ['A', 'Heavy Strike', 'โจมตีหนัก'], ['B', 'Storm Herald', 'ผู้ประกาศแห่งพายุ'], ['M', 'Thundercrush', 'บดขยี้อัสนี'], ['S1', 'Wind Blade', 'คมดาบวายุ'], ['S2', 'Eye of the Storm', 'ดวงตาพายุ'],
  ]),
  monster('Mind Elemental', 6, 'Elemental', '4 ส.ค. 2026', [
    ['A', 'Mind Blast', 'ระเบิดพลังจิต'], ['B', 'Dream Lantern', 'โคมแห่งความฝัน'], ['M', 'Nightmare Fog', 'หมอกฝันร้าย'], ['S1', 'Dreamscape Veil', 'ม่านแดนฝัน'], ['S2', 'Phantom Shift', 'ย้ายร่างภูต'],
  ]),
  monster('Arachne', 6, 'Elemental', '14 ก.ค. 2026', [
    ['A', 'Basic Thrust', 'แทงพื้นฐาน'], ['B', 'Web Spinning', 'ชักใย'], ['M', 'Titan Stomp', 'กระทืบยักษ์'], ['S1', 'Steel Carapace', 'กระดองเหล็ก'], ['S2', 'Web Dome', 'โดมใยแมงมุม'],
  ]),
  pendingMonster('Phoenix', 6), pendingMonster('Vampire Lord', 6), pendingMonster('Night Crawler', 6), pendingMonster('Death Knight', 6),
  monster('Sandworm', 7, 'Beast', '6 ส.ค. 2026', [
    ['A', 'Poison Spray', 'พ่นพิษ'], ['B', 'Veil of Sand', 'ม่านทราย'], ['M', 'Crown of the Desert', 'มงกุฎแห่งทะเลทราย'], ['S1', "Queen's Scale", 'เกล็ดราชินี'], ['S2', "Sand's Protection", 'การคุ้มครองแห่งทราย'],
  ]),
  monster('Hydra', 7, 'Beast', '5 ส.ค. 2026', [
    ['A', 'Basic Slash', 'ฟันพื้นฐาน'], ['B', 'Multi-headed Regeneration', 'ฟื้นฟูหลายเศียร'], ['M', 'Venomous Fang Greatsword', 'ดาบใหญ่เขี้ยวพิษ'], ['S1', "Hydra's Scale", 'เกล็ดไฮดรา'], ['S2', 'Regenerating Head', 'เศียรฟื้นฟู'],
  ]),
  monster('Tethys', 7, 'Beast', '6 ส.ค. 2026', [
    ['A', 'Ice Arrow', 'ศรน้ำแข็ง'], ['B', 'Ruler of the Ocean', 'ผู้ครองมหาสมุทร'], ['M', 'Spiral Conch Spear', 'หอกสังข์เกลียว'], ['S1', 'Crown of Pearl', 'มงกุฎไข่มุก'], ['S2', 'Tidal Cloak', 'เสื้อคลุมคลื่นสมุทร'],
  ]),
  monster('Fire Lord', 7, 'Elemental', '7 ส.ค. 2026', [
    ['A', 'Flame Strike', 'โจมตีเพลิง'], ['B', 'Avatar of Magma', 'อวตารแมกมา'], ['M', 'Giant Magma Hammer', 'ค้อนแมกมายักษ์'], ['S1', "Burning Lord's Core", 'แก่นเจ้าแห่งเพลิง'], ['S2', 'Volcanic Rock Armor', 'เกราะหินภูเขาไฟ'],
  ]),
  monster('Air Lord', 7, 'Elemental', '7 ส.ค. 2026', [
    ['A', 'Enhanced Shot (T4)', 'ยิงเสริมพลัง (T4)'], ['B', 'Eye of the Storm', 'ดวงตาพายุ'], ['M', 'Bow of Thunder and Lightning', 'ธนูแห่งฟ้าร้องและสายฟ้า'], ['S1', 'Wings of Wind', 'ปีกแห่งสายลม'], ['S2', 'Arrow of Thunderclouds', 'ศรเมฆอัสนี'],
  ]),
  monster('Water Lord', 7, 'Elemental', '14 ก.ค. 2026', [
    ['A', 'Ice Arrow', 'ศรน้ำแข็ง'], ['B', "Sea God's Majesty", 'บารมีเทพสมุทร'], ['M', 'Spear of the Deep', 'หอกแห่งห้วงลึก'], ['S1', 'Core of the Vortex', 'แก่นวังวน'], ['S2', 'Tidal Scale', 'เกล็ดคลื่นสมุทร'],
  ]),
  monster('Titania', 7, 'Elemental', '5 ส.ค. 2026', [
    ['A', 'Ray', 'ลำแสง'], ['B', "Fairy Queen's Protection", 'การคุ้มครองแห่งราชินีภูต'], ['M', "World Tree's Staff", 'คทาแห่งต้นไม้โลก'], ['S1', "Queen's Corolla", 'มงกุฎบุปผาราชินี'], ['S2', "Spirit's Wings", 'ปีกวิญญาณ'],
  ]),
  monster('Body Reaper', 7, 'Undead', '16 ส.ค. 2026', [
    ['A', 'Heavy Strike', 'โจมตีหนัก'], ['B', 'Core of Flesh', 'แก่นเนื้อหนัง'], ['M', "Behemoth's Bone Fist", 'หมัดกระดูกเบฮีมอธ'], ['S1', 'Perfect Skeleton', 'โครงกระดูกสมบูรณ์แบบ'], ['S2', 'Chains of Restraint', 'โซ่พันธนาการ'],
  ]),
  monster('Soul Reaper', 7, 'Undead', '16 ส.ค. 2026', [
    ['A', 'Shadow Bolt', 'ศรเงา'], ['B', 'Veil of Souls', 'ม่านวิญญาณ'], ['M', "Reaper's Orb", 'ลูกแก้วแห่งยมทูต'], ['S1', "Wraith's Robe", 'เสื้อคลุมเรธ'], ['S2', 'Spirit Lantern', 'โคมวิญญาณ'],
  ]),
  monster('Abomination', 7, 'Undead', '6 ส.ค. 2026', [
    ['A', 'Basic Slash', 'ฟันพื้นฐาน'], ['B', 'Undying Flesh', 'เนื้อหนังอมตะ'], ['M', 'Greatsword of Slaughter', 'ดาบใหญ่แห่งการสังหาร'], ['S1', 'Stitched Flesh', 'เนื้อหนังเย็บปะ'], ['S2', "Monster's Spine", 'กระดูกสันหลังมอนสเตอร์'],
  ]),
  monster('Fenrir', 8, 'Beast', '30 ก.ค. 2026', [
    ['A', 'Basic Slash', 'ฟันพื้นฐาน'], ['B', 'Howl of the Apocalypse', 'เสียงหอนแห่งวันสิ้นโลก'], ['M', 'Frostfang Greatsword', 'ดาบใหญ่เขี้ยวเยือกแข็ง'], ['S1', 'Shatter', 'แตกสลาย'], ['S2', 'Predatory Instinct', 'สัญชาตญาณนักล่า'],
  ]),
  monster('Sleipnir', 8, 'Beast', '30 ก.ค. 2026', [
    ['A', 'Lethal Shot (T5)', 'ยิงสังหาร (T5)'], ['B', 'Hooves of the Gale', 'กีบเท้าวายุ'], ['M', 'Meteor Lance', 'ทวนอุกกาบาต'], ['S1', 'Comet Arrow', 'ศรดาวหาง'], ['S2', 'Evasive Maneuver/Counter Maneuver', 'ยุทธวิธีหลบหลีก/ยุทธวิธีโต้กลับ'],
  ]),
  monster('Kirin', 8, 'Elemental', '30 ก.ค. 2026', [
    ['A', 'Lightning Arrow', 'ศรสายฟ้า'], ['B', 'Overload', 'ประจุเกินขีด'], ['M', 'Wrathful Lightning', 'อัสนีพิโรธ'], ['S1', 'Lightning Leap', 'กระโจนสายฟ้า'], ['S2', 'Thundercloud Veil', 'ม่านเมฆอัสนี'],
  ]),
  monster('Ethereal', 8, 'Elemental', '30 ก.ค. 2026', [
    ['A', 'Ray', 'ลำแสง'], ['B', 'Tears of the Sun', 'หยาดน้ำตาแห่งสุริยัน'], ['M', 'Ray of Judgement', 'ลำแสงพิพากษา'], ['S1', 'Mirror of Retribution', 'กระจกแห่งการตอบโต้'], ['S2', 'Ethereal Shield', 'โล่ไร้กาย'],
  ]),
  monster('Lich Queen', 8, 'Elemental', '30 ก.ค. 2026', [
    ['A', 'Shadow Bolt', 'ศรเงา'], ['B', 'Power Word Death', 'วาจาอำนาจ: มรณะ'], ['M', 'Finger of Death', 'นิ้วมรณะ'], ['S1', 'Necrotic Wave', 'คลื่นเนโครติก'], ['S2', 'Echo of Death', 'เสียงสะท้อนแห่งความตาย'],
  ]),
  monster('Nightwalker', 8, 'Undead', '30 ก.ค. 2026', [
    ['A', 'Quick Slash', 'ฟันฉับไว'], ['B', 'Abyssal Veil', 'ม่านแห่งห้วงเหว'], ['M', 'Sever Form', 'แยกร่าง'], ['S1', 'Devour Shadow', 'กลืนกินเงา'], ['S2', 'Dread Strike', 'โจมตีสะพรึง'],
  ]),
  monster('Behemoth', 9, 'Beast', '7 ส.ค. 2026', [
    ['A', 'Heavy Strike', 'โจมตีหนัก'], ['B', "Behemoth's Carapace", 'กระดองเบฮีมอธ'], ['M', 'Fist of the Great Mountain', 'หมัดแห่งมหาบรรพต'], ['S1', 'Indestructible Body', 'ร่างกายมิอาจทำลาย'], ['S2', "Behemoth's Vitality", 'พลังชีวิตเบฮีมอธ'],
  ]),
  monster('Nemea', 9, 'Beast', '4 ส.ค. 2026', [
    ['A', 'Magic Arrow', 'ศรเวทมนตร์'], ['B', 'Heart of the Lion King', 'หัวใจแห่งราชสีห์ราชัน'], ['M', 'Scepter of Truth', 'คทาแห่งสัจจะ'], ['S1', 'Insight into All Things', 'หยั่งรู้สรรพสิ่ง'], ['S2', 'Mantle of Transcendence', 'เสื้อคลุมแห่งการก้าวข้าม'],
  ]),
  monster('Emmelia', 9, 'Elemental', '4 ส.ค. 2026', [
    ['A', 'Lightning Arrow', 'ศรสายฟ้า'], ['B', 'Power of the Spirit Realm', 'พลังแห่งแดนวิญญาณ'], ['M', 'Harmony of All Things', 'ความกลมกลืนแห่งสรรพสิ่ง'], ['S1', 'Spirit Dominion', 'อำนาจเหนือวิญญาณ'], ['S2', 'Elemental Wreath', 'มงกุฎธาตุ'],
  ]),
  monster('Transcendent', 9, 'Elemental', '12 ส.ค. 2026', [
    ['A', 'Mind Pressure', 'แรงกดดันทางจิต'], ['B', 'Mind of the World', 'จิตแห่งโลก'], ['M', 'Staff of Transcendence', 'คทาแห่งการก้าวข้าม'], ['S1', 'Insight into All Minds', 'หยั่งรู้ทุกจิต'], ['S2', 'Branch of the World Tree', 'กิ่งแห่งต้นไม้โลก'],
  ]),
  monster('Grim Reaper', 9, 'Undead', '30 ก.ค. 2026', [
    ['A', 'Quick Slash', 'ฟันฉับไว'], ['B', 'Urn of the Dead', 'โกศแห่งผู้ตาย'], ['M', 'Scythe of the Soul Harvest', 'เคียวเก็บเกี่ยววิญญาณ'], ['S1', "Reaper's Robe", 'เสื้อคลุมยมทูต'], ['S2', "Death's Echo", 'เสียงสะท้อนแห่งความตาย'],
  ]),
  monster('Physis', 9, 'Undead', '4 ส.ค. 2026', [
    ['A', 'Blood Extraction', 'สกัดโลหิต'], ['B', 'Dominion of Blood', 'อำนาจแห่งโลหิต'], ['M', 'Crimson Throne', 'บัลลังก์ชาด'], ['S1', 'Veil of Blood', 'ม่านโลหิต'], ['S2', 'Source of Life', 'ต้นกำเนิดชีวิต'],
  ]),
] as const;

export const monsterSkillCount = monsterSkillTranslations.reduce((total, entry) => total + entry.skills.length, 0);

export function monsterSkillSlug(name: string) {
  return name.toLowerCase().replaceAll(' ', '-');
}
