export type FacilityKind = 'สนามล่า' | 'กับดัก' | 'โครงสร้าง';
export type FacilityRarity = 'Normal' | 'Rare' | 'Epic' | 'Unique';

export type FacilityEntry = {
  name: string;
  nameTh: string;
  kind: FacilityKind;
  rarity: FacilityRarity;
  scope: string;
  summary: string;
  formula?: string;
  tags: string[];
  caution?: string;
};

export const facilities: FacilityEntry[] = [
  { name: 'Frenzy Pit', nameTh: 'หลุมคลั่ง', kind: 'สนามล่า', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'ทุกตัวละครได้รับ Frenzy 1 สแต็กทุกครั้งที่กระทำ และฝ่ายเราในห้องได้โบนัสความเสียหายประชิด', formula: 'Melee Damage +2 CHA', tags: ['Frenzy', 'Melee', 'CHA'], caution: 'Frenzy มีผลกับทุกตัวละครในห้อง รวมถึงฝ่ายศัตรู' },
  { name: 'Blazing Furnace', nameTh: 'เตาหลอมลุกไหม้', kind: 'สนามล่า', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'เพิ่มความเสียหายไฟที่ตัวละครทุกฝ่ายในห้องได้รับ', formula: 'Fire Damage +1d8 + INT', tags: ['Fire', 'INT'], caution: 'ฝ่ายเราก็ได้รับความเสียหายไฟแรงขึ้น ควรใช้กับมอนสเตอร์ที่ต้านทานไฟ' },
  { name: 'Intense Gravity Chamber', nameTh: 'ห้องแรงโน้มถ่วงเข้มข้น', kind: 'สนามล่า', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'ทำให้การทอยที่ใช้ DEX เสียเปรียบ และเพิ่มความเสียหายกระแทกที่ทุกตัวละครได้รับ', formula: 'Bludgeoning Damage +1d6 + WIS', tags: ['DEX', 'Bludgeoning', 'WIS'], caution: 'ผลเสียเปรียบ DEX กระทบมอนสเตอร์ฝ่ายเราด้วย' },
  { name: 'Highland Watchtower', nameTh: 'หอสังเกตการณ์ที่สูง', kind: 'สนามล่า', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'ฝ่ายเราแถวหลังได้โบนัสความเสียหายระยะไกลและได้เปรียบในการทอยโจมตี แต่ AC ของแถวหน้าลดลง', formula: 'Ranged Damage +3 DEX · Front AC −3', tags: ['Ranged', 'DEX', 'Advantage', 'AC'], caution: 'ต้องมีแนวหน้าที่ทนพอรับโทษ AC −3' },
  { name: 'Life Exchange Chamber', nameTh: 'ห้องแลกเปลี่ยนชีวิต', kind: 'สนามล่า', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'เมื่อฝ่ายเราใช้สกิลฮีลเป้าหมายฝ่ายเดียว จะสร้างความเสียหายเนโครติกแก่ศัตรูแบบสุ่ม 1 ตัว', formula: 'Necrotic Damage 1d8 + WIS', tags: ['Heal', 'Necrotic', 'WIS'] },
  { name: 'Pike Corridor', nameTh: 'ทางเดินหอกยาว', kind: 'สนามล่า', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'เมื่อเริ่มการต่อสู้ ฝ่ายเราแถวหน้าเข้าสู่สถานะ Counter ตลอดการต่อสู้', tags: ['Counter', 'Frontline'] },
  { name: 'Shield Wall', nameTh: 'กำแพงโล่', kind: 'สนามล่า', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'มอนสเตอร์ฝ่ายเราแถวหน้าได้รับโบนัส AC', formula: 'AC +3 (อิง CON)', tags: ['AC', 'CON', 'Frontline'] },
  { name: 'Corrosive Swamp', nameTh: 'หนองน้ำกัดกร่อน', kind: 'สนามล่า', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'ลดผลการฮีลของศัตรู และเพิ่มความเสียหายกรดกับพิษที่ตัวละครทุกฝ่ายได้รับ', formula: 'Healing Received ×0.5 · Acid/Poison +1d6 + WIS', tags: ['Heal Block', 'Acid', 'Poison', 'WIS'], caution: 'โบนัสความเสียหายกรดและพิษกระทบฝ่ายเราด้วย' },
  { name: 'Corridor of the Void', nameTh: 'ทางเดินแห่งความว่างเปล่า', kind: 'สนามล่า', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'เพิ่มความเสียหายไซคิกที่ตัวละครทุกฝ่ายในห้องได้รับ', formula: 'Psychic Damage +1d8 + CHA', tags: ['Psychic', 'CHA'], caution: 'ควรตรวจการต้านทาน Psychic ของฝ่ายเราก่อนวาง' },
  { name: 'Gladiator Arena', nameTh: 'สนามประลองกลาดิเอเตอร์', kind: 'สนามล่า', rarity: 'Rare', scope: 'ห้องนี้ + ห้องติดกัน', summary: 'แถวหน้าได้เปรียบในการโจมตีและโบนัสประชิด ขณะที่ฝ่ายเราแถวหลังเสียเปรียบ เมื่อมีผู้ตายในห้อง ฝ่ายเราในห้องติดกันได้รับ HP ชั่วคราว', formula: 'Melee Damage +2 STR · Temp HP 2d8 (อิง CON)', tags: ['Melee', 'STR', 'Temp HP', 'Adjacent'], caution: 'ไม่เหมาะกับทีมที่พึ่งตัวโจมตีแถวหลังเป็นหลัก' },
  { name: 'Last Stand Fortress', nameTh: 'ป้อมปราการยืนหยัดสุดท้าย', kind: 'สนามล่า', rarity: 'Epic', scope: 'ห้องนี้ + ทั้งคอลัมน์', summary: 'มอนสเตอร์ฝ่ายเราได้โบนัส STR Save และ CON Save เมื่อฝ่ายเราในห้องรับความเสียหาย ทุกฝ่ายเราในคอลัมน์ได้รับ Defense Stance 1 รอบ', formula: 'STR Save +5 STR · CON Save +5 CON', tags: ['STR Save', 'CON Save', 'Defense Stance', 'Column'] },
  { name: 'Fountain of Life', nameTh: 'น้ำพุแห่งชีวิต', kind: 'สนามล่า', rarity: 'Epic', scope: 'ห้องนี้ + ทั้งแถว', summary: 'ฮีลฝ่ายเราเมื่อเริ่มต่อสู้ และเมื่อใช้สกิลฮีลในห้องจะเพิ่มการฟื้นฟูที่ฝ่ายเราในแถวได้รับ', formula: 'Heal 1d8 · อิง WIS', tags: ['Heal', 'WIS', 'Row'] },

  { name: 'Acid Cloud', nameTh: 'เมฆกรด', kind: 'กับดัก', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'พ่นเมฆกรดใส่กลุ่มศัตรูแบบสุ่มในห้อง', formula: '2d8 + INT Acid · CON Save DC 12 + INT · CD 1', tags: ['Acid', 'INT', 'CON Save', 'AoE'] },
  { name: 'Arrow', nameTh: 'ลูกศร', kind: 'กับดัก', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'ยิงลูกศรสกัดกลุ่มศัตรูแบบสุ่มในห้อง', formula: '2d10 + STR Piercing · DEX Attack Roll · CD 1', tags: ['Piercing', 'STR', 'DEX Attack', 'AoE'] },
  { name: 'Axe Blade', nameTh: 'คมขวานยักษ์', kind: 'กับดัก', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'ทิ้งคมขวานขนาดใหญ่ใส่กลุ่มศัตรูแบบสุ่มในห้อง', formula: '2d12 + DEX Slashing · DEX Attack Roll · CD 1', tags: ['Slashing', 'DEX', 'AoE'] },
  { name: 'Falling Rock', nameTh: 'หินถล่ม', kind: 'กับดัก', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'ทิ้งก้อนหินใส่กลุ่มศัตรูแบบสุ่มในห้อง', formula: '2d10 + STR Bludgeoning · DEX Save DC 12 + STR · CD 1', tags: ['Bludgeoning', 'STR', 'DEX Save', 'AoE'] },
  { name: 'Flame Vent', nameTh: 'ช่องพ่นเปลวไฟ', kind: 'กับดัก', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'พ่นไฟใส่กลุ่มศัตรูแบบสุ่มและทำให้ติด Burn 2 เทิร์น', formula: '2d6 + INT Fire · DEX Save DC 12 + INT · CD 1', tags: ['Fire', 'Burn', 'INT', 'DEX Save'] },
  { name: 'Pitfall', nameTh: 'หลุมพราง', kind: 'กับดัก', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'ทำให้กลุ่มศัตรูแบบสุ่มตกหลุม รับความเสียหายกระแทกและเจาะแทง', formula: '2d6 + STR Bludgeoning + 1d12 + WIS Piercing · DEX Save · CD 1', tags: ['Bludgeoning', 'Piercing', 'STR', 'WIS'] },
  { name: 'Poison Gas', nameTh: 'แก๊สพิษ', kind: 'กับดัก', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'ปล่อยแก๊สพิษใส่กลุ่มศัตรูแบบสุ่มและทำให้ติด Poisoned', formula: '2d6 + INT Poison · CON Save DC 12 + INT · CD 1', tags: ['Poison', 'Poisoned', 'INT', 'CON Save'] },
  { name: 'Radiant Orb', nameTh: 'ลูกแก้วเรเดียนต์', kind: 'กับดัก', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'โจมตีกลุ่มศัตรูแบบสุ่มด้วยพลังเรเดียนต์และทำให้ Blinded', formula: '2d8 + WIS Radiant · CON Save DC 12 + WIS · CD 1', tags: ['Radiant', 'Blinded', 'WIS', 'CON Save'] },
  { name: 'Whisper of Shadows', nameTh: 'เสียงกระซิบแห่งเงา', kind: 'กับดัก', rarity: 'Normal', scope: 'ภายในห้อง', summary: 'โจมตีกลุ่มศัตรูแบบสุ่มและทำให้ติด Fear', formula: '2d8 + CHA Radiant · CON Save DC 12 + CHA · CD 1', tags: ['Radiant', 'Fear', 'CHA', 'CON Save'], caution: 'ต้นฉบับระบุ Radiant Damage แม้ชื่อและเอฟเฟกต์จะเป็นเงา จึงควรตรวจในเกม' },
  { name: 'Auto-Intercept Ballista', nameTh: 'บัลลิสตาสกัดอัตโนมัติ', kind: 'กับดัก', rarity: 'Rare', scope: 'ห้องติดกัน · ปลอดภัย', summary: 'ยิงกลุ่มศัตรูแบบสุ่มในห้องที่อยู่ติดกัน โดยไม่ระบุว่าโดนฝ่ายเรา', formula: '4d10 + DEX Piercing · DEX Attack Roll · CD 2', tags: ['Piercing', 'DEX', 'Adjacent', 'Safe'] },
  { name: 'Phantom Guillotine', nameTh: 'กิโยตินภูต', kind: 'กับดัก', rarity: 'Rare', scope: 'ห้องติดกัน · ปลอดภัย', summary: 'ฟันกลุ่มศัตรูแบบสุ่มในห้องติดกันและทำให้ Bleeding', formula: '4d8 + DEX Slashing · DEX Attack Roll · CD 2', tags: ['Slashing', 'Bleeding', 'DEX', 'Safe'] },
  { name: 'Veil of Plague', nameTh: 'ม่านโรคระบาด', kind: 'กับดัก', rarity: 'Rare', scope: 'ห้องติดกัน · อันตราย', summary: 'โจมตีกลุ่มศัตรูแบบสุ่มหนึ่งกลุ่มในแต่ละห้องติดกันและทำให้ Withering', formula: '3d10 + WIS Necrotic · CON Save DC 12 + WIS · CD 2', tags: ['Necrotic', 'Withering', 'WIS', 'Dangerous'], caution: 'กับดักชนิด Dangerous โดนมอนสเตอร์ฝ่ายเราในระยะด้วย' },
  { name: 'Decay Spore Colony', nameTh: 'อาณานิคมสปอร์เน่าเปื่อย', kind: 'กับดัก', rarity: 'Rare', scope: 'ห้องติดกัน · อันตราย', summary: 'สร้างความเสียหายพิษและทำให้ Poisoned แก่กลุ่มสุ่มในทุกห้องติดกัน', formula: '3d10 + WIS Poison · CON Save DC 12 + WIS · CD 2', tags: ['Poison', 'Poisoned', 'WIS', 'Dangerous'], caution: 'กับดักชนิด Dangerous โดนมอนสเตอร์ฝ่ายเราในระยะด้วย' },
  { name: 'Unstable Tesla Coil', nameTh: 'ขดลวดเทสลาไม่เสถียร', kind: 'กับดัก', rarity: 'Rare', scope: 'ห้องติดกัน · อันตราย', summary: 'ปล่อยไฟฟ้าใส่กลุ่มสุ่มในแต่ละห้องติดกัน', formula: '3d10 + INT Lightning · DEX Save DC 12 + INT · CD 2', tags: ['Lightning', 'INT', 'DEX Save', 'Dangerous'], caution: 'กับดักชนิด Dangerous โดนมอนสเตอร์ฝ่ายเราในระยะด้วย' },
  { name: 'Arcane Railgun', nameTh: 'ปืนรางอาคม', kind: 'กับดัก', rarity: 'Epic', scope: 'ห้องติดกัน · อันตราย', summary: 'ยิงลำแสงเวททะลุตัวละครทั้งหมดในแถว และเพิกเฉย Resistance ของเป้าหมาย', formula: '5d6 + INT Force · INT Attack Roll · CD 3', tags: ['Force', 'INT', 'Ignore Resistance', 'Dangerous'], caution: 'ลำแสงโดนตัวละครทุกฝ่ายในแถว' },
  { name: 'Thunderous Resonance Tower', nameTh: 'หอคอยสะท้อนอสนี', kind: 'กับดัก', rarity: 'Epic', scope: 'ทั้งแถว · อันตราย', summary: 'ทุก 4 เทิร์นปล่อยคลื่นกระแทกใส่ตัวละครทั้งหมดในแถวและทำให้ Stun', formula: '4d8 + INT Thunder · CON Save DC 12 + INT · CD 4', tags: ['Thunder', 'Stun', 'INT', 'Row'], caution: 'โดนทั้งฮีโร่และมอนสเตอร์ฝ่ายเราในแถว' },
  { name: "Titan's Iron Fist", nameTh: 'หมัดเหล็กไททัน', kind: 'กับดัก', rarity: 'Epic', scope: 'ทั้งคอลัมน์ · อันตราย', summary: 'บดขยี้ตัวละครทั้งหมดในคอลัมน์ด้วยหมัดยักษ์', formula: '4d8 + STR Bludgeoning · STR Attack Roll · CD 3', tags: ['Bludgeoning', 'STR', 'Column', 'Dangerous'], caution: 'โดนทั้งฮีโร่และมอนสเตอร์ฝ่ายเราในคอลัมน์' },
  { name: 'Venom Torrent', nameTh: 'กระแสพิษเชี่ยว', kind: 'กับดัก', rarity: 'Epic', scope: 'ทั้งแถว · อันตราย', summary: 'สร้างความเสียหายกรดแก่ตัวละครทั้งหมดในแถวและทำให้ AC Penalty', formula: '3d6 + WIS Acid · DEX Save DC 12 + WIS · CD 3', tags: ['Acid', 'AC Penalty', 'WIS', 'Row'], caution: 'โดนทั้งฮีโร่และมอนสเตอร์ฝ่ายเราในแถว' },
  { name: 'Rune of Absolute Zero', nameTh: 'รูนศูนย์สัมบูรณ์', kind: 'กับดัก', rarity: 'Epic', scope: 'ทั้งคอลัมน์ · อันตราย', summary: 'สร้างความเสียหายความเย็นแก่ตัวละครทั้งหมดในคอลัมน์และทำให้ Restrained', formula: '2d6 + INT Cold · CON Save DC 12 + INT · CD 3', tags: ['Cold', 'Restrained', 'INT', 'Column'], caution: 'โดนทั้งฮีโร่และมอนสเตอร์ฝ่ายเราในคอลัมน์' },
  { name: 'Orbital Strike Guidance Device', nameTh: 'อุปกรณ์ชี้เป้าโจมตีวงโคจร', kind: 'กับดัก', rarity: 'Unique', scope: 'รูปกากบาท · อันตราย', summary: 'ทุก 4 เทิร์นโจมตีเป้าหมายด้วยความเสียหายไฟรุนแรงในระยะรูปกากบาท', formula: '4d8 + INT Fire · DEX Save DC 12 + INT · CD 4', tags: ['Fire', 'INT', 'Cross', 'Dangerous'], caution: 'เป็นกับดัก Unique และระยะ Dangerous' },
  { name: 'Warp Gate', nameTh: 'ประตูวาร์ป', kind: 'กับดัก', rarity: 'Unique', scope: 'ภายในห้อง', summary: 'เมื่อศัตรูเข้าห้องจะทอย 1d10: ผล 1–4 ส่งกลับห้องที่เคยผ่านแบบสุ่ม ส่วนผล 10 ส่งตรงไปห้องจอมมาร', formula: '1d10 · 1–4 ย้อนกลับ · 10 ไปห้องจอมมาร', tags: ['Movement', '1d10', 'Unique'], caution: 'ผล 10 อาจพาศัตรูข้ามแนวป้องกันไปถึงจอมมารทันที' },

  { name: 'Lounge', nameTh: 'ห้องพักผ่อน', kind: 'โครงสร้าง', rarity: 'Normal', scope: 'ทั้งดันเจี้ยน', summary: 'เพิ่มค่าควบคุมสูงสุดของจอมมาร ทำให้วางยูนิตและสิ่งปลูกสร้างได้มากขึ้น', formula: 'Dominance สูงสุด +16', tags: ['Dominance'] },
  { name: 'Maintenance Room', nameTh: 'ห้องบำรุงรักษา', kind: 'โครงสร้าง', rarity: 'Normal', scope: 'ห้องติดกัน', summary: 'เพิ่มความทนทานให้กับดักในห้องที่อยู่ติดกัน', formula: 'Durability +3 (อิง CON)', tags: ['Durability', 'CON', 'Adjacent'] },
  { name: 'Precision Scope', nameTh: 'ศูนย์เล็งแม่นยำ', kind: 'โครงสร้าง', rarity: 'Rare', scope: 'ห้องติดกัน', summary: 'เพิ่ม Attack Roll และ Spell Save DC ให้กับดักในห้องติดกัน', formula: 'All Attacks +2 (อิง INT) · Spell Save DC +2 (อิง WIS)', tags: ['Attack Roll', 'Save DC', 'INT', 'WIS'] },
  { name: 'Unholy Altar', nameTh: 'แท่นบูชาอัปมงคล', kind: 'โครงสร้าง', rarity: 'Rare', scope: 'ห้องติดกัน', summary: 'เมื่อเริ่มการบุก มอนสเตอร์ฝ่ายเราในห้องติดกันได้รับ HP ชั่วคราว', formula: 'Temp HP 8 (อิง CON)', tags: ['Temp HP', 'CON', 'Adjacent'] },
  { name: 'War Room', nameTh: 'ห้องบัญชาการรบ', kind: 'โครงสร้าง', rarity: 'Rare', scope: 'ห้องติดกัน', summary: 'ฝ่ายเราในห้องติดกันได้รับโบนัส Initiative', formula: 'Initiative +5 DEX', tags: ['Initiative', 'DEX', 'Adjacent'] },
  { name: 'Mana Ley Line', nameTh: 'แนวเส้นพลังมานา', kind: 'โครงสร้าง', rarity: 'Epic', scope: 'ทั้งแถว', summary: 'เพิ่ม Spell Save DC ให้ฝ่ายเราในแถว และเพิ่มความเสียหาย Force ที่ศัตรูในแถวได้รับ', formula: 'Spell Save DC +1 (อิง CHA) · Force +1d8 + CHA', tags: ['Save DC', 'Force', 'CHA', 'Row'] },
  { name: "Giant's Rampart", nameTh: 'แนวกำแพงยักษ์', kind: 'โครงสร้าง', rarity: 'Epic', scope: 'ทั้งคอลัมน์', summary: 'เพิ่ม AC ให้มอนสเตอร์ฝ่ายเราในคอลัมน์และทำให้ป้องกัน Critical Hit', formula: 'AC +2 (อิง CON)', tags: ['AC', 'Critical Immunity', 'CON', 'Column'] },
  { name: 'Force Field Generator', nameTh: 'เครื่องกำเนิดสนามพลัง', kind: 'โครงสร้าง', rarity: 'Unique', scope: 'รูปกากบาท', summary: 'ทุก 3 เทิร์นมอบ Force Shield ให้ฝ่ายเรา เพิ่ม AC และต้านทานความเสียหายกายภาพ', formula: 'ทุก 3 เทิร์น · Cross Effect', tags: ['Force Shield', 'AC', 'Physical Resistance', 'Cross'] },
];

export const facilityCounts = {
  total: facilities.length,
  huntingGrounds: facilities.filter((entry) => entry.kind === 'สนามล่า').length,
  traps: facilities.filter((entry) => entry.kind === 'กับดัก').length,
  structures: facilities.filter((entry) => entry.kind === 'โครงสร้าง').length,
};
