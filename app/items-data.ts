export type RelicRarity = 'Normal' | 'Rare' | 'Epic' | 'Legendary';
export type RelicGroup = 'ทั่วไป' | 'จอมมาร' | 'อีเวนต์' | 'Demon Lord';

export type RelicEntry = {
  name: string;
  nameTh: string;
  rarity: RelicRarity;
  group: RelicGroup;
  summary: string;
  tags: string[];
  owner?: 'Aura' | 'Desponia' | 'Rhea' | 'Tania' | 'Lilith' | 'Meryelle';
  caution?: string;
};

export const relics: RelicEntry[] = [
  { name: 'Small Pouch', nameTh: 'ถุงใบเล็ก', rarity: 'Normal', group: 'ทั่วไป', summary: 'ได้รับ Dream Dust 5–25 ทันทีเมื่อเก็บ', tags: ['Dream Dust', 'ทรัพยากร'] },
  { name: "Ancestor's Coffer", nameTh: 'หีบบรรพชน', rarity: 'Normal', group: 'ทั่วไป', summary: 'ได้รับ Dream Dust 200–400 ทันทีเมื่อเก็บ', tags: ['Dream Dust', 'ทรัพยากร'] },
  { name: "Apprentice's Hammer", nameTh: 'ค้อนช่างฝึกหัด', rarity: 'Normal', group: 'ทั่วไป', summary: 'เมื่อ Train หรือ Modify ที่ Sanctuary มีโอกาส 20–40% เพิ่มผลให้เป้าหมายสุ่มอีก 1 ตัว', tags: ['Sanctuary', 'Train', 'Modify'] },
  { name: "Beginner's Luck", nameTh: 'โชคของมือใหม่', rarity: 'Normal', group: 'ทั่วไป', summary: 'หนึ่งครั้งต่อ Stage รับโอกาสกระทำที่ Sanctuary เพิ่มอีก 1 ครั้ง', tags: ['Sanctuary', 'Action'] },
  { name: "Collector's Loupe", nameTh: 'แว่นขยายของนักสะสม', rarity: 'Normal', group: 'ทั่วไป', summary: 'เพิ่มโอกาส 10–20% ที่ Normal Battle จะให้ Monster Part แบบสุ่มเป็นรางวัลเพิ่มเติม', tags: ['Part', 'Normal Battle', 'Reward'] },
  { name: "Healer's Kit", nameTh: 'ชุดปฐมพยาบาล', rarity: 'Normal', group: 'ทั่วไป', summary: 'หนึ่งครั้งต่อ Stage เมื่อจอมมารได้รับความเสียหายถึงตาย จะฟื้น HP 50% ของ Max HP', tags: ['Dark Lord', 'ฟื้นชีวิต', 'HP'] },
  { name: 'Fresh Bait', nameTh: 'เหยื่อสด', rarity: 'Normal', group: 'ทั่วไป', summary: 'เพิ่มโอกาส 10–20% ให้มีชุดรางวัลเพิ่มจาก Normal Battle และ Elite Battle', tags: ['Battle', 'Reward'] },
  { name: 'Feather of Swiftness', nameTh: 'ขนนกว่องไว', rarity: 'Normal', group: 'ทั่วไป', summary: 'เพิ่ม Initiative ของมอนสเตอร์ฝ่ายเราทั้งหมด 3–6', tags: ['Initiative', 'Monster'] },
  { name: 'Hardened Carapace', nameTh: 'กระดองแข็งแกร่ง', rarity: 'Normal', group: 'ทั่วไป', summary: 'เพิ่ม AC ของมอนสเตอร์ฝ่ายเราทั้งหมด 2–4', tags: ['AC', 'Monster', 'ป้องกัน'] },
  { name: 'Jar of Greed', nameTh: 'โถแห่งความละโมบ', rarity: 'Normal', group: 'ทั่วไป', summary: 'เพิ่ม Dream Dust ที่ได้จาก Explore ใน Sanctuary 50–100%', tags: ['Dream Dust', 'Explore', 'Sanctuary'] },
  { name: "Dark Lord's Majesty", nameTh: 'บารมีแห่งจอมมาร', rarity: 'Normal', group: 'ทั่วไป', summary: 'เพิ่ม STR, DEX, CON, INT, WIS และ CHA ของจอมมารทั้งหมด 2–5', tags: ['Dark Lord', 'Stats'] },
  { name: "Marauder's Sack", nameTh: 'กระสอบนักปล้น', rarity: 'Normal', group: 'ทั่วไป', summary: 'เพิ่ม Dream Dust จากชัยชนะในการต่อสู้ 25–40%', tags: ['Dream Dust', 'Battle'] },
  { name: "Merchant Guild's Pass", nameTh: 'บัตรผ่านสมาคมพ่อค้า', rarity: 'Normal', group: 'ทั่วไป', summary: 'ลดราคาซื้อไอเทมทั้งหมดที่ Merchant 25–40', tags: ['Merchant', 'ส่วนลด'] },
  { name: "Recruit's Banner", nameTh: 'ธงรับสมัคร', rarity: 'Normal', group: 'ทั่วไป', summary: 'เพิ่ม Dominance สูงสุดของจอมมาร 30–60', tags: ['Dominance', 'Dark Lord'] },
  { name: 'Reinforced Heartstone', nameTh: 'ศิลาหัวใจเสริมแกร่ง', rarity: 'Normal', group: 'ทั่วไป', summary: 'เมื่อเข้า Sanctuary จอมมารได้รับ Soul Charge ป้องกันความเสียหายถึงตายครั้งถัดไปและเป็นอมตะ 1 เทิร์น', tags: ['Dark Lord', 'Soul Charge', 'Sanctuary'] },
  { name: 'Shard of the Rampart', nameTh: 'เศษกำแพงปราการ', rarity: 'Normal', group: 'ทั่วไป', summary: 'เมื่อเริ่มการบุก มอนสเตอร์ฝ่ายเราแถวหน้าได้รับ Resistance ต่อความเสียหายทุกชนิด 4–8 เทิร์น', tags: ['Frontline', 'Resistance', 'Monster'] },
  { name: 'Amulet of Vitality', nameTh: 'เครื่องรางพลังชีวิต', rarity: 'Normal', group: 'ทั่วไป', summary: 'เพิ่ม Max HP ของมอนสเตอร์ฝ่ายเราทั้งหมด 10–30', tags: ['HP', 'Monster'] },
  { name: 'Whetstone of Honing', nameTh: 'หินลับคม', rarity: 'Normal', group: 'ทั่วไป', summary: 'เพิ่มความเสียหายการโจมตีพื้นฐานของมอนสเตอร์ฝ่ายเราทั้งหมด 3–6', tags: ['Base Attack', 'Damage', 'Monster'] },
  { name: 'Blood Chalice', nameTh: 'จอกโลหิต', rarity: 'Epic', group: 'ทั่วไป', summary: 'เมื่อมอนสเตอร์ฝ่ายเรา Critical Hit มอนสเตอร์ฝ่ายเราทั้งกลุ่มฟื้น HP 4–10', tags: ['Critical Hit', 'Heal', 'Group'] },
  { name: 'Burning Heartstone', nameTh: 'ศิลาหัวใจลุกไหม้', rarity: 'Epic', group: 'ทั่วไป', summary: 'เพิ่ม Fire Damage ของฝ่ายเรา 2–4 และมอบ Resistance ต่อ Cold Damage', tags: ['Fire', 'Cold Resistance'] },
  { name: 'Combat Manual', nameTh: 'คู่มือการต่อสู้', rarity: 'Epic', group: 'ทั่วไป', summary: 'เพิ่ม Attack Roll และ Save DC ของมอนสเตอร์ฝ่ายเราทั้งหมด 3–6', tags: ['Attack Roll', 'Save DC', 'Monster'] },
  { name: 'Corrosive Bile', nameTh: 'น้ำดีกร่อน', rarity: 'Epic', group: 'ทั่วไป', summary: 'เมื่อสร้าง Acid Damage แก่ศัตรู จะลด AC ของเป้าหมาย 2 เป็นเวลา 3–6 เทิร์น', tags: ['Acid', 'AC Penalty'] },
  { name: 'Crown of Domination', nameTh: 'มงกุฎแห่งการครอบงำ', rarity: 'Epic', group: 'ทั่วไป', summary: 'เมื่อเลือก Stat Enhancement จาก Dark Lord Ascension มีโอกาส 25–45% ได้ Stat เพิ่มอีก 1', tags: ['Dark Lord', 'Ascension', 'Stats'] },
  { name: "Dungeon Master's Keys", nameTh: 'กุญแจเจ้าแห่งดันเจี้ยน', rarity: 'Epic', group: 'ทั่วไป', summary: 'เพิ่มโอกาส 35–55% ที่ผลตอบแทน Explore ใน Sanctuary จะเพิ่มเป็นสองเท่า', tags: ['Explore', 'Sanctuary', 'Reward'] },
  { name: 'Golden Loupe', nameTh: 'แว่นขยายทองคำ', rarity: 'Epic', group: 'ทั่วไป', summary: 'เพิ่มสิทธิ์ Refresh ฟรีที่ Merchant อีก 1 ครั้ง', tags: ['Merchant', 'Refresh'] },
  { name: 'Horn of Ambush', nameTh: 'แตรซุ่มโจมตี', rarity: 'Epic', group: 'ทั่วไป', summary: 'ในเทิร์นแรกของทุก Combat มอนสเตอร์ฝ่ายเราทั้งหมดได้เปรียบใน Attack Roll', tags: ['Advantage', 'Attack Roll', 'First Turn'] },
  { name: 'Ironclad Shell', nameTh: 'เกราะเหล็กกล้า', rarity: 'Epic', group: 'ทั่วไป', summary: 'เมื่อเริ่ม Combat มอนสเตอร์ฝ่ายเราได้รับเอฟเฟกต์ลดความเสียหายครั้งแรกตามระดับของ Relic', tags: ['Damage Reduction', 'Monster', 'Combat'] },
  { name: "Smith's Hammer", nameTh: 'ค้อนช่างตีเหล็ก', rarity: 'Epic', group: 'ทั่วไป', summary: 'Structure ที่ปรากฏในชุดรางวัลหลังจากนี้จะผ่านการ Modify แล้ว', tags: ['Structure', 'Modify', 'Reward'] },
  { name: "Trapmaker's Tools", nameTh: 'เครื่องมือช่างกับดัก', rarity: 'Epic', group: 'ทั่วไป', summary: 'เพิ่ม Disarm DC ของกับดักฝ่ายเรา 3–6 และเพิ่ม Durability 2', tags: ['Trap', 'Disarm DC', 'Durability'] },
  { name: "Vanguard's Banner", nameTh: 'ธงกองหน้า', rarity: 'Epic', group: 'ทั่วไป', summary: 'มอนสเตอร์ฝ่ายเราแถวหน้าได้รับ AC +2–4 และ Max HP +24–48', tags: ['Frontline', 'AC', 'HP'] },
  { name: "Veteran's Badge", nameTh: 'ตราทหารผ่านศึก', rarity: 'Epic', group: 'ทั่วไป', summary: 'เมื่อมอนสเตอร์ฝ่ายเราโจมตีศัตรูที่สูงกว่าอย่างน้อย 2 Tier จะได้โบนัส Attack Roll 5–9', tags: ['Tier', 'Attack Roll', 'Monster'] },
  { name: 'Ancient Runes', nameTh: 'รูนโบราณ', rarity: 'Legendary', group: 'ทั่วไป', summary: 'เมื่อเริ่มการบุก ศัตรูทั้งหมดติดคำสาปและถูกหัก All Saves ตามระดับของ Relic', tags: ['Curse', 'All Saves', 'Invasion'] },
  { name: "Guardian's Bastion", nameTh: 'ปราการผู้พิทักษ์', rarity: 'Legendary', group: 'ทั่วไป', summary: 'หนึ่งครั้งต่อ Combat ต่อมอนสเตอร์ ยกเลิกความเสียหายถึงตายและคง HP ไว้ที่ 1', tags: ['ป้องกันตาย', 'Monster', 'Combat'] },
  { name: "Giant's Contract", nameTh: 'สัญญาแห่งยักษ์', rarity: 'Legendary', group: 'ทั่วไป', summary: 'ลด Dominance ของมอนสเตอร์ Tier 6 ขึ้นไป 25–35% โดยมีค่าต่ำสุดตามระดับ Relic', tags: ['Dominance', 'Tier 6+'] },
  { name: "Minion's Shackles", nameTh: 'โซ่ตรวนสมุน', rarity: 'Legendary', group: 'ทั่วไป', summary: 'ลด Dominance ของมอนสเตอร์ Tier 3 หรือต่ำกว่า 50–80% โดยต่ำสุด 1', tags: ['Dominance', 'Tier 1–3'] },
  { name: 'Bag of Endless Riches', nameTh: 'ถุงทรัพย์ไม่สิ้นสุด', rarity: 'Legendary', group: 'ทั่วไป', summary: 'ที่ Merchant สินค้าสุ่ม 3–5 ชิ้นลดราคา 50%', tags: ['Merchant', 'ส่วนลด'] },
  { name: 'Echoing Soul', nameTh: 'วิญญาณสะท้อน', rarity: 'Legendary', group: 'ทั่วไป', summary: 'ฝ่ายเราทั้งหมดสามารถใช้ Reaction แรกของ Combat ได้ 2 ครั้งต่อ Combat', tags: ['Reaction', 'Combat'] },
  { name: 'Infinite Forge', nameTh: 'เตาหลอมอนันต์', rarity: 'Legendary', group: 'ทั่วไป', summary: 'เพิ่มการใช้ Train, Modify และ Dismantle ที่ Sanctuary อย่างละ 1 ครั้ง', tags: ['Sanctuary', 'Train', 'Modify', 'Dismantle'] },
  { name: "Lord's Insight", nameTh: 'ญาณหยั่งรู้แห่งจอมมาร', rarity: 'Legendary', group: 'ทั่วไป', summary: 'เมื่อได้รับ Dark Lord Ascension ค่าของ Stat Enhancement และ Dominance Enhancement ที่เสนอเพิ่มขึ้น 30–60%', tags: ['Dark Lord', 'Ascension', 'Dominance'] },
  { name: 'Throne of Dominion', nameTh: 'บัลลังก์แห่งอำนาจ', rarity: 'Legendary', group: 'ทั่วไป', summary: 'เพิ่ม Dominance 30–50%', tags: ['Dominance'] },
  { name: "Assassin's Eye", nameTh: 'ดวงตานักลอบสังหาร', rarity: 'Legendary', group: 'ทั่วไป', summary: 'ขยายช่วง Threat ของ Critical Hit ใน Attack Roll ของมอนสเตอร์ฝ่ายเราทั้งหมด 2–4', tags: ['Critical Hit', 'Attack Roll', 'Monster'] },

  { name: 'Morning Dew', nameTh: 'หยาดน้ำค้างยามเช้า', rarity: 'Normal', group: 'จอมมาร', owner: 'Aura', summary: 'เมื่อเริ่มการบุก ฝ่ายเราทั้งหมดได้รับ Bloom 2 สแต็ก และเมื่อฝ่ายเราได้รับ Radiant Damage จะได้รับ Bloom 1 สแต็ก', tags: ['Aura', 'Bloom', 'Radiant'] },
  { name: 'Nutrient Injection', nameTh: 'การฉีดสารอาหาร', rarity: 'Rare', group: 'จอมมาร', owner: 'Aura', summary: 'เมื่อ Bloom ฮีลเกิน Max HP ส่วนเกินจะกลายเป็น HP ชั่วคราว', tags: ['Aura', 'Bloom', 'Temp HP'] },
  { name: 'Coexisting Garden', nameTh: 'สวนแห่งการอยู่ร่วม', rarity: 'Epic', group: 'จอมมาร', owner: 'Aura', summary: 'Bloom ไม่ถูกลบขณะ Full Bloom และการเปิด Full Bloom ใช้ Bloom เพียงครึ่งหนึ่งโดยปัดลง', tags: ['Aura', 'Bloom', 'Full Bloom'] },
  { name: 'Eternal Sun', nameTh: 'สุริยะนิรันดร์', rarity: 'Legendary', group: 'จอมมาร', owner: 'Aura', summary: 'Full Bloom สะสมได้สูงสุด 5 และความเสียหาย Radiant เพิ่มตามจำนวนสแต็ก', tags: ['Aura', 'Full Bloom', 'Radiant'] },
  { name: 'Ominous Fog', nameTh: 'หมอกลางร้าย', rarity: 'Normal', group: 'จอมมาร', owner: 'Desponia', summary: 'เมื่อเริ่มการบุก ศัตรูทั้งหมดได้รับ Erosion 1–3 สแต็ก', tags: ['Desponia', 'Erosion'] },
  { name: 'Skull of Amplification', nameTh: 'กะโหลกขยายผล', rarity: 'Rare', group: 'จอมมาร', owner: 'Desponia', summary: 'เมื่อทำให้ศัตรูติด Erosion จะเพิ่มอีก 1 สแต็ก', tags: ['Desponia', 'Erosion'] },
  { name: 'Echo of Agony', nameTh: 'เสียงสะท้อนแห่งความทรมาน', rarity: 'Epic', group: 'จอมมาร', owner: 'Desponia', summary: 'ต้นเทิร์น ศัตรูที่มี Erosion ต้องทอย WIS Save DC 12 หากล้มเหลวรับ Necrotic Damage 2d6', tags: ['Desponia', 'Erosion', 'Necrotic'] },
  { name: 'Plague Bomb', nameTh: 'ระเบิดโรคระบาด', rarity: 'Legendary', group: 'จอมมาร', owner: 'Desponia', summary: 'ศัตรูที่มี Erosion เมื่อตายจะระเบิด สร้าง Necrotic 4d8 และ Erosion แก่ศัตรูใกล้เคียงเมื่อ DEX Save DC 14 ล้มเหลว', tags: ['Desponia', 'Erosion', 'Necrotic', 'AoE'] },
  { name: 'Horn of Valor', nameTh: 'แตรแห่งความกล้า', rarity: 'Normal', group: 'จอมมาร', owner: 'Rhea', summary: 'เมื่อเริ่มการบุก ฝ่ายเราทั้งหมดได้รับ Valor 1–3 สแต็ก', tags: ['Rhea', 'Valor'] },
  { name: 'Endless Fervor', nameTh: 'ความฮึกเหิมไม่สิ้นสุด', rarity: 'Rare', group: 'จอมมาร', owner: 'Rhea', summary: 'เมื่อได้รับ Valor จะได้รับเพิ่มอีก 1 สแต็ก', tags: ['Rhea', 'Valor'] },
  { name: 'Sword of Judgement', nameTh: 'ดาบแห่งคำพิพากษา', rarity: 'Epic', group: 'จอมมาร', owner: 'Rhea', summary: 'เพิ่มความเสียหายเสริมของ Valor เป็น Lightning Damage 3d8', tags: ['Rhea', 'Valor', 'Lightning'] },
  { name: "Lion King's Crown", nameTh: 'มงกุฎราชสีห์', rarity: 'Legendary', group: 'จอมมาร', owner: 'Rhea', summary: 'เมื่อ Valor เต็มสแต็ก การโจมตีจะไม่ใช้ Valor อีกต่อไป', tags: ['Rhea', 'Valor'] },

  { name: "Gambler's Dice", nameTh: 'ลูกเต๋านักพนัน', rarity: 'Legendary', group: 'อีเวนต์', summary: 'เมื่อฝ่ายเราทอย Attack Roll, Saving Throw หรือ Ability Check ได้ Natural 1 จะทอยใหม่อัตโนมัติ 1 ครั้ง', tags: ['Event', 'Reroll', 'Natural 1'], caution: 'Wiki ยังไม่ระบุชื่อ Event ที่ได้รับ' },
  { name: 'Golden Idol', nameTh: 'เทวรูปทองคำ', rarity: 'Legendary', group: 'อีเวนต์', summary: 'เพิ่ม Dream Dust จาก Battle และ Explore 75%', tags: ['Event', 'Dream Dust', 'Battle', 'Explore'] },
  { name: 'Aegis Shield', nameTh: 'โล่เอจิส', rarity: 'Legendary', group: 'อีเวนต์', summary: 'ครั้งแรกที่ Facility หรือ Trap จะเหลือ Durability 0 ให้เหลือ 1 แทน และบังคับศัตรูในห้องทอย CON Save DC 15 หากล้มเหลวจะ Petrified', tags: ['Event', 'Durability', 'Petrified'], caution: 'Wiki ยังไม่ระบุชื่อ Event ที่ได้รับ' },
  { name: 'Sword of Damocles', nameTh: 'ดาบดาโมคลีส', rarity: 'Legendary', group: 'อีเวนต์', summary: 'เมื่อมอนสเตอร์ฝ่ายเราโจมตีศัตรูที่ HP เต็ม ความเสียหายคูณ 1.75', tags: ['Event', 'Damage', 'Full HP'], caution: 'Wiki ยังไม่ระบุชื่อ Event ที่ได้รับ' },
  { name: "Trickster's Dice", nameTh: 'ลูกเต๋าจอมเจ้าเล่ห์', rarity: 'Legendary', group: 'อีเวนต์', summary: 'การทอย d20 ของฝ่ายเรา ถ้าออกเลขคู่ได้โบนัส +2 แต่ถ้าออกเลขคี่ถูกหัก −1', tags: ['Event', 'd20', 'Roll'], caution: 'Wiki ยังไม่ระบุชื่อ Event ที่ได้รับ' },
  { name: 'Unchained Heart', nameTh: 'หัวใจไร้พันธนาการ', rarity: 'Legendary', group: 'อีเวนต์', summary: 'เพิ่ม Necrotic Damage 1d8 ให้ Damage Roll ของฝ่ายเราทั้งหมด แต่ลด Max HP ของจอมมาร 50%', tags: ['Event', 'Necrotic', 'Dark Lord HP'], caution: 'พลังโจมตีสูงแลกกับความเสี่ยงที่จอมมารเสียชีวิตง่ายขึ้น' },

  { name: 'White Hot Armor', nameTh: 'เกราะร้อนขาว', rarity: 'Legendary', group: 'Demon Lord', owner: 'Tania', summary: 'ฝ่ายเราทั้งหมดได้รับ Resistance ต่อ Fire Damage และไม่ติด Burn', tags: ['War of the Gods', 'Tania', 'Fire Resistance', 'Burn Immunity'] },
  { name: 'Flame of Sacrifice', nameTh: 'เปลวไฟแห่งการสังเวย', rarity: 'Legendary', group: 'Demon Lord', owner: 'Tania', summary: 'เมื่อ Dismantle ที่ Sanctuary ฝ่ายเราทั้งหมดจะได้รับ Blazing Acceleration ในการต่อสู้ครั้งถัดไป', tags: ['War of the Gods', 'Tania', 'Dismantle', 'Blazing Acceleration'] },
  { name: 'Wings of Hellfire', nameTh: 'ปีกเพลิงนรก', rarity: 'Legendary', group: 'Demon Lord', owner: 'Tania', summary: 'Fire Damage ของฝ่ายเราเพิ่มจำนวนลูกเต๋า 1 ลูก และเพิ่มขนาดลูกเต๋าขึ้น 1 ขั้น', tags: ['War of the Gods', 'Tania', 'Fire', 'Damage Dice'] },
  { name: 'Ever-Burning Wick', nameTh: 'ไส้ตะเกียงไม่มอดดับ', rarity: 'Legendary', group: 'Demon Lord', owner: 'Tania', summary: 'ทุกครั้งที่ Persistent Damage ของ Burn ทำงาน จะเพิ่มลูกเต๋า 1 ลูกให้การทอย Burn ครั้งต่อ ๆ ไปของเป้าหมายนั้นอย่างถาวร', tags: ['War of the Gods', 'Tania', 'Burn', 'Persistent Damage'] },
  { name: "Tania's Call", nameTh: 'เสียงเรียกแห่ง Tania', rarity: 'Legendary', group: 'Demon Lord', owner: 'Tania', summary: 'เลือกมอนสเตอร์ 1 ตัวและอัญเชิญจาก Ark หากอยู่ใน Ark; ตลอด Run ได้ Tania’s Vanguard, STR/INT +8 และเมื่อสร้าง Direct Damage ใส่ศัตรูที่ติด Burn จะใส่ Ignited พร้อมรับ Overheat 1', tags: ['War of the Gods', 'Tania', 'Ark', 'STR', 'INT', 'Burn', 'Overheat'] },
  { name: 'Throne of Ashes', nameTh: 'บัลลังก์เถ้าถ่าน', rarity: 'Legendary', group: 'Demon Lord', owner: 'Tania', summary: 'ต้น Combat ศัตรูที่เข้าห้องจอมมารรับโบนัส Fire Damage 3d6 + INT และติด Burn 1 เทิร์น', tags: ['War of the Gods', 'Tania', 'Dark Lord Chamber', 'Fire', 'Burn'] },
  { name: 'Furnace of Retribution', nameTh: 'เตาหลอมทัณฑ์ตอบแทน', rarity: 'Legendary', group: 'Demon Lord', owner: 'Tania', summary: 'ศัตรูที่ปลดกับดักล้มเหลวรับโบนัส Fire Damage 4d8 + INT และติด Burn', tags: ['War of the Gods', 'Tania', 'Trap', 'Fire', 'Burn'] },
  { name: 'Overheated Heartstone', nameTh: 'ศิลาหัวใจร้อนเกินขีด', rarity: 'Legendary', group: 'Demon Lord', owner: 'Tania', summary: 'ทุกครั้งที่ฝ่ายเราใช้ความสามารถธาตุไฟ จะได้รับ Overheat 1', tags: ['War of the Gods', 'Tania', 'Fire Ability', 'Overheat'] },
  { name: 'Emberbrand Feather', nameTh: 'ขนนกตราเถ้าเพลิง', rarity: 'Legendary', group: 'Demon Lord', owner: 'Tania', summary: 'ทุกครั้งที่ Burn ของศัตรูทำงาน จะได้รับ Fire Stigma', tags: ['War of the Gods', 'Tania', 'Burn', 'Fire Stigma'] },
  { name: 'Ashen Afterimage', nameTh: 'เงาหลงเหลือแห่งเถ้าถ่าน', rarity: 'Legendary', group: 'Demon Lord', owner: 'Tania', summary: 'เมื่อ Burn ของศัตรูทำงาน เป้าหมายต้องทอย CON Save DC 14; หากล้มเหลวจะติด Fire Vulnerability', tags: ['War of the Gods', 'Tania', 'Burn', 'CON Save', 'Fire Vulnerability'] },

  { name: 'Crimson Promissory Note', nameTh: 'ตั๋วสัญญาสีชาด', rarity: 'Legendary', group: 'Demon Lord', owner: 'Lilith', summary: 'ได้รับ Dream Dust 500 ทันที แต่การต่อสู้บอสครั้งถัดไปจะไม่มี Relic ให้เลือก', tags: ['War of the Gods', 'Lilith', 'Dream Dust', 'Boss Battle'] },
  { name: 'Corrupted Chalice', nameTh: 'จอกเสื่อมทราม', rarity: 'Legendary', group: 'Demon Lord', owner: 'Lilith', summary: 'ทุกครั้งที่ชนะ Boss Battle มอนสเตอร์ฝ่ายเราทั้งหมดได้รับ CHA +2 สูงสุดไม่เกิน 20', tags: ['War of the Gods', 'Lilith', 'Boss Battle', 'CHA'] },
  { name: 'Mask of Brainwashing', nameTh: 'หน้ากากล้างสมอง', rarity: 'Legendary', group: 'Demon Lord', owner: 'Lilith', summary: 'ฝ่ายเราทั้งหมดได้รับ Resistance ต่อ Psychic Damage และไม่ติด Charmed', tags: ['War of the Gods', 'Lilith', 'Psychic Resistance', 'Charmed Immunity'] },
  { name: "Lilith's Call", nameTh: 'เสียงเรียกแห่ง Lilith', rarity: 'Legendary', group: 'Demon Lord', owner: 'Lilith', summary: 'เลือกมอนสเตอร์ 1 ตัวและอัญเชิญจาก Ark หากอยู่ใน Ark; ตลอด Run ได้ Lilith’s Servant, DEX/CHA +8 และเมื่อสร้างหรือรับ Damage จะใส่ Euphoria 1 ให้ศัตรู', tags: ['War of the Gods', 'Lilith', 'Ark', 'DEX', 'CHA', 'Euphoria'] },
  { name: 'Veil of the Bedchamber', nameTh: 'ม่านห้องบรรทม', rarity: 'Legendary', group: 'Demon Lord', owner: 'Lilith', summary: 'มอนสเตอร์ฝ่ายเราทั้งหมดได้รับ CHA +8 และศัตรูที่เริ่ม Engagement จะติด Charmed โดยอัตโนมัติโดยไม่ต้องทอย Save', tags: ['War of the Gods', 'Lilith', 'CHA', 'Charmed', 'Engagement'] },
  { name: 'Black Pearl Earrings', nameTh: 'ต่างหูไข่มุกดำ', rarity: 'Legendary', group: 'Demon Lord', owner: 'Lilith', summary: 'Psychic Damage ของฝ่ายเราเพิ่มจำนวนลูกเต๋า 1 ลูก และเพิ่มขนาดลูกเต๋าขึ้น 1 ขั้น', tags: ['War of the Gods', 'Lilith', 'Psychic', 'Damage Dice'] },
  { name: 'Secret Ledger', nameTh: 'สมุดบัญชีลับ', rarity: 'Legendary', group: 'Demon Lord', owner: 'Lilith', summary: 'ไอเทมทุกชิ้นในร้านค้าแรกหลังได้รับ Relic นี้มีราคา 0', tags: ['War of the Gods', 'Lilith', 'Merchant', 'Free Items'] },
  { name: 'Censer of Ecstasy', nameTh: 'กระถางกำยานแห่งความเคลิบเคลิ้ม', rarity: 'Legendary', group: 'Demon Lord', owner: 'Lilith', summary: 'Critical Hit หรือการทำให้ติด Charmed จะใส่ Euphoria 1; เมื่อถึงสแต็กสูงสุด เป้าหมายจะ Climax ทันที', tags: ['War of the Gods', 'Lilith', 'Critical Hit', 'Charmed', 'Euphoria', 'Climax'] },
  { name: 'Collar of Ruin', nameTh: 'ปลอกคอแห่งหายนะ', rarity: 'Legendary', group: 'Demon Lord', owner: 'Lilith', summary: 'ตัวละครทุกฝ่ายที่ติด Charmed จะได้รับ Psychic Vulnerability', tags: ['War of the Gods', 'Lilith', 'Charmed', 'Psychic Vulnerability'] },
  { name: 'Crimson Baton', nameTh: 'คทาสีชาด', rarity: 'Legendary', group: 'Demon Lord', owner: 'Lilith', summary: 'เมื่อ Roll ใดมีการบวก Ability Modifier ให้บวกโบนัสเพิ่มเท่ากับครึ่งหนึ่งของ CHA Modifier', tags: ['War of the Gods', 'Lilith', 'CHA Modifier', 'Roll'] },

  { name: 'Azure Crystal of the Polar Sea', nameTh: 'ผลึกครามแห่งทะเลขั้วโลก', rarity: 'Legendary', group: 'Demon Lord', owner: 'Meryelle', summary: 'Cold Damage ของฝ่ายเราเพิ่มจำนวนลูกเต๋า 1 ลูก และเพิ่มขนาดลูกเต๋าขึ้น 1 ขั้น', tags: ['War of the Gods', 'Meryelle', 'Cold', 'Damage Dice'] },
  { name: "Meriel's Call", nameTh: 'เสียงเรียกแห่ง Meriel', rarity: 'Legendary', group: 'Demon Lord', owner: 'Meryelle', summary: 'เลือกมอนสเตอร์ 1 ตัวและอัญเชิญจาก Ark หากอยู่ใน Ark; ตลอด Run ได้ Tidebound, WIS/CHA +8 และต้น Combat ศัตรูในห้องของมันได้รับ Chill 2', tags: ['War of the Gods', 'Meryelle', 'Ark', 'WIS', 'CHA', 'Chill'], caution: 'Wiki ต้นทางสะกดชื่อ Relic ว่า Meriel’s Call แม้ชื่อจอมมารในหัวข้อเป็น Meryelle' },
  { name: 'Frost Orb', nameTh: 'ลูกแก้วน้ำค้างแข็ง', rarity: 'Legendary', group: 'Demon Lord', owner: 'Meryelle', summary: 'ทุกครั้งที่ Persistent Damage ของ Frostbite ทำงาน จะเพิ่มลูกเต๋า 1 ลูกให้การทอย Frostbite ครั้งต่อ ๆ ไปของเป้าหมายนั้นอย่างถาวร', tags: ['War of the Gods', 'Meryelle', 'Frostbite', 'Persistent Damage'] },
  { name: 'Pearl of High Tide', nameTh: 'ไข่มุกคลื่นสูง', rarity: 'Legendary', group: 'Demon Lord', owner: 'Meryelle', summary: 'เมื่อเริ่มการบุก ฝ่ายเราทั้งหมดได้รับ Rising Tide', tags: ['War of the Gods', 'Meryelle', 'Invasion', 'Rising Tide'] },
  { name: 'Shell Armor of the Polar Night', nameTh: 'เกราะเปลือกแห่งราตรีขั้วโลก', rarity: 'Legendary', group: 'Demon Lord', owner: 'Meryelle', summary: 'ฝ่ายเราทั้งหมดได้รับ Resistance ต่อ Cold Damage และไม่ติด Frostbite', tags: ['War of the Gods', 'Meryelle', 'Cold Resistance', 'Frostbite Immunity'] },
  { name: 'Curse of the Abyss', nameTh: 'คำสาปแห่งห้วงลึก', rarity: 'Legendary', group: 'Demon Lord', owner: 'Meryelle', summary: 'เลือกกับดัก 1 ชิ้น; ตลอด Run เมื่อศัตรูเข้าห้อง กับดักนั้นจะสร้าง Cold Damage และทำให้ติด Restrained', tags: ['War of the Gods', 'Meryelle', 'Trap', 'Cold', 'Restrained'] },
  { name: 'Abyssal Conch', nameTh: 'สังข์แห่งห้วงลึก', rarity: 'Legendary', group: 'Demon Lord', owner: 'Meryelle', summary: 'ศัตรูที่เข้าดันเจี้ยนจะได้รับ Chill 1 ทุกเทิร์น', tags: ['War of the Gods', 'Meryelle', 'Chill', 'Every Turn'] },
  { name: 'Abyssal Bubble', nameTh: 'ฟองอากาศแห่งห้วงลึก', rarity: 'Legendary', group: 'Demon Lord', owner: 'Meryelle', summary: 'เมื่อเริ่มการบุก ฝ่ายเราทั้งหมดได้รับ Abyssal Bubble', tags: ['War of the Gods', 'Meryelle', 'Invasion', 'Abyssal Bubble'] },
];

export const relicCounts = {
  total: relics.length,
  regular: relics.filter((entry) => entry.group === 'ทั่วไป').length,
  darkLord: relics.filter((entry) => entry.group === 'จอมมาร').length,
  event: relics.filter((entry) => entry.group === 'อีเวนต์').length,
  campaign: relics.filter((entry) => entry.group === 'Demon Lord').length,
};
