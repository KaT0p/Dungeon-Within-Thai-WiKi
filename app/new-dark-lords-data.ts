// แปลและเรียบเรียงจาก Dungeon Within Wiki (CC BY-SA 4.0), ตรวจ 9 พ.ย. 2026
// เก็บข้อขัดแย้งของต้นทางไว้ใน caveats แทนการเดาค่าปัจจุบัน
type Skill = readonly [slot: string, en: string, th: string, detail: string];
type Authority = readonly [en: string, th: string, type: string, ammo: string, cooldown: string, detail: string];
type Entry = readonly [en: string, th: string, detail: string];
type LordDetails = {
  keyStat: string; stats: Record<string, number>; immunity: string; damage: string;
  summary: string; source: string; sourceUpdated: string; skills: readonly Skill[];
  authorities: readonly Authority[]; statuses: readonly Entry[]; relics: readonly Entry[];
  aspect: Entry; promotions: readonly Entry[]; ascensions: readonly Entry[]; caveats: readonly string[];
};

export const newDarkLordDetails: Record<'ostea' | 'quintessa' | 'zaria', LordDetails> = {
  ostea: {
    keyStat: 'CON', stats: { STR: 16, DEX: 10, CON: 18, INT: 12, WIS: 14, CHA: 10, HP: 120, AC: 10, Initiative: 0 },
    immunity: 'Fear', damage: 'Physical', source: 'https://dungeonwithin.miraheze.org/wiki/Ostea?oldid=2779', sourceUpdated: '6 พ.ย. 2026 · 19:09 UTC',
    summary: 'จอมมารระยะประชิด ใช้ CON กับสกิลจาก Part สร้าง Fracture เพื่อลดการป้องกันกายภาพของศัตรู และให้ Exoskeleton เสริมพลังโจมตีกับความอยู่รอดของฝ่ายเรา การโจมตีพื้นฐาน Basic Slash ใช้ STR',
    skills: [
      ['A', 'Basic Slash', 'ฟันพื้นฐาน', 'Main Action ระยะประชิด ทอยโจมตีด้วย STR สร้าง Physical Damage 3d6+STR'],
      ['B', 'Skeletal Reinforcement', 'เสริมโครงกระดูก', 'Innate Trait: ป้องกัน Fear และให้ Exoskeleton แก่พันธมิตรทั้งหมดเมื่อเริ่มการต่อสู้'],
      ['M', 'Bone Execution', 'ประหารด้วยกระดูก', 'Main Part: CON +3, Dominance 0.6; Main Action ระยะประชิด ทอย CON สร้าง Physical Damage 2d12+CON พร้อม Stun และ Fracture 1 สแต็ก'],
      ['S1', 'Bone Spikes', 'หนามกระดูก', 'Sub Part: CON +3, Dominance 0.3; เมื่อถูกโจมตีระยะประชิด ใช้ Reaction สร้าง Physical Damage 3d8+CON และ Fracture 2 สแต็กแก่ผู้โจมตี'],
      ['S2', 'Bone Armor', 'เกราะกระดูก', 'Sub Part: CON +3, Dominance 0.3; ได้รับ Resistance ต่อ Physical Damage และเมื่อถูกโจมตีระยะประชิด ใช้ Reaction รับ Exoskeleton 1 สแต็ก'],
    ],
    statuses: [
      ['Fracture', 'กระดูกร้าว', 'รับ Physical Damage เพิ่ม 2% ต่อสแต็ก; ตั้งแต่ 10 สแต็กสูญเสีย Resistance ต่อ Physical; ระยะเวลา 16 วินาที สูงสุด 20 สแต็ก'],
      ['Exoskeleton', 'โครงกระดูกภายนอก', 'สร้าง Physical Damage เพิ่ม 2% และลด Physical Damage ที่ได้รับ 1 ต่อสแต็ก; ระยะเวลา 20 วินาที สูงสุด 50 สแต็ก'],
    ],
    authorities: [
      ['Spinning Axe', 'ขวานกระดูกหมุน', 'Basic', '6', '3 วินาที', 'ขวานพุ่งตามทิศที่เลือก สร้าง Physical 1d6+WIS และ Fracture 1 สแต็ก ทะลุได้ 4 ครั้งและไม่โดนศัตรูตัวเดิมซ้ำ'],
      ['Bone Bomb', 'ระเบิดกระดูก', 'Special', '2', '9 วินาที', 'ระเบิดทันทีเมื่อถึงตำแหน่งเป้าหมาย รัศมี 1 สร้าง Physical 7d6+WIS และ Fracture 2 สแต็ก'],
      ['Implosion', 'บดกระดูก', 'Special', '—', '11 วินาที', 'รัศมี 1.2 สร้าง Physical 16d6+WIS เพิ่มความเสียหาย 5% ต่อ Fracture ของเป้าหมาย; ตั้งแต่ 6 สแต็กทำให้ Stun 1.2 วินาที ไม่ใช้สแต็ก'],
      ['Bone Armor', 'เกราะกระดูก', 'Special', '—', '18 วินาที', 'ให้พันธมิตรทั้งหมด Exoskeleton 3 สแต็ก และ Temporary HP 18% ของ Max HP'],
      ['Bone Shrapnel', 'สะเก็ดกระดูก', 'Special', '3', '9 วินาที', 'ยิงสะเก็ดรูปกรวย 5 ชิ้น แต่ละชิ้นสร้าง Physical 1d8+WIS และ Fracture 1 สแต็กแก่ศัตรูตัวแรกที่โดน หลายชิ้นโดนตัวเดียวกันได้'],
      ['Bone Storm', 'พายุกระดูก', 'Ultimate', '—', '1 วันในเกม', 'ทำงาน 9 วินาที ทุก 0.6 วินาทียิงลำแสง 2 เส้นใส่ศัตรูสุ่มคนละตัว แต่ละเส้นสร้าง Physical 2d8+WIS และ Fracture 1 สแต็ก'],
      ['Bone Citadel', 'ป้อมกระดูก', 'Ultimate', '—', '1 วันในเกม', 'ให้พันธมิตรทั้งหมดป้องกัน Physical Damage 5 วินาที พร้อม Temporary HP เท่ากับ Max HP'],
    ],
    relics: [
      ['Bone Standard', 'ธงกระดูก · Normal', 'เริ่มการรุกราน: ฝ่ายเราทั้งหมดรับ Exoskeleton 4 สแต็ก'],
      ['Cracked Jawbone', 'กระดูกกรามร้าว · Rare', 'เมื่อให้ Fracture แก่ศัตรู ให้เพิ่มอีก 1 สแต็ก'],
      ['Spiked Bone Pauldron', 'เกราะไหล่กระดูกหนาม · Epic', 'เมื่อรับ Exoskeleton ได้ Temporary HP 5 ต่อจำนวนสแต็กที่มีอยู่'],
    ],
    aspect: ['Remains Collection', 'สะสมซาก', 'เมื่อฝ่ายเราตายใน Combat หรือศัตรูที่กำลังสู้ถูกกำจัด ได้ Remains 1 ซึ่งคงอยู่ในการรุกรานครั้งนั้น แต่ละหน่วยเพิ่ม Max HP และ Temporary HP ที่ฝ่ายเราได้รับ 5%'],
    promotions: [
      ['Weight of Bone', 'น้ำหนักแห่งกระดูก · Normal', 'ต่อ CON Modifier ของจอมมาร 1 แต้ม: ฝ่ายเราทั้งหมดได้ Max HP +4 และ Physical Damage จากการโจมตี +1'],
      ['Intact Deboning', 'เลาะกระดูกสมบูรณ์ · Normal / Aspect', 'เมื่อศัตรูถูกกำจัดหรือฝ่ายเราตาย มีโอกาส 25% ได้ Remains เพิ่ม 1'],
      ['Marrow Proliferation', 'ไขกระดูกเพิ่มพูน · Rare / Aspect', 'ทุก Remains 4 หน่วย: Facility ทั้งหมดได้ Durability +2 และฝ่ายเราสร้าง Physical Damage ต่อศัตรูเพิ่ม 10%'],
      ['Remains Bulwark', 'ปราการซาก · Rare / Aspect', 'เมื่อได้ Remains ฝ่ายเราทั้งหมดฟื้น HP 8 และรับ Temporary HP 6% ของ Max HP'],
      ['Indomitable Frame', 'โครงร่างไม่ย่อท้อ · Epic / Aspect', 'มี Remains ตั้งแต่ 10: ฝ่ายเราทั้งหมด AC และ Saving Throw +3 และเพิ่มค่าทอยที่ศัตรูต้องใช้เพื่อคริติคอล 2'],
    ],
    ascensions: [['Indomitable Frame', 'โครงร่างไม่ย่อท้อ · Epic / Aspect', 'Wiki แสดงผลเดียวกับรายการ Promotion ชื่อเดียวกัน: มี Remains ตั้งแต่ 10 ให้ AC และ Saving Throw +3 และเพิ่มเกณฑ์คริติคอลของศัตรู 2']],
    caveats: ['Wiki ติดป้ายกำลังก่อสร้าง; Legendary Relic, Ascension ทั่วไป และค่า Enhancement บางขั้นยังเป็น ???', 'Indomitable Frame ปรากฏทั้ง Aspect Promotion และ Aspect Ascension จึงยังต้องตรวจหมวดในเกม', 'Bone Bomb ระบุรัศมี 1 ในคำอธิบาย แต่ตาราง Stats ไม่ระบุ Area; Bone Citadel มีตัวเลข HP ตัวอย่างปนอยู่ จึงแสดงสูตรตามข้อความ'],
  },
  quintessa: {
    keyStat: 'INT', stats: { STR: 10, DEX: 10, CON: 14, INT: 18, WIS: 12, CHA: 16, HP: 85, AC: 10, Initiative: 0 },
    immunity: 'ไม่มีตาม Wiki', damage: 'Fire / Cold / Lightning', source: 'https://dungeonwithin.miraheze.org/wiki/Quintessa', sourceUpdated: '6 พ.ย. 2026 · 19:08 UTC',
    summary: 'จอมมารเวทธาตุ ใช้ INT กับสกิลโจมตีและ CHA กับ Authority เน้น Elemental Resonance เพิ่มความเสียหายฝ่ายเรา และ Elemental Curse เพิ่มความเสียหายธาตุที่ศัตรูได้รับ',
    skills: [
      ['A', 'Fire Arrow', 'ศรเพลิง', 'Main Action แบบ Spell ระยะไกล ทอยโจมตี INT สร้าง Fire Damage 3d6+INT'],
      ['B', 'Elemental Chain', 'สายใยธาตุ', 'เมื่อพันธมิตรใช้ความสามารถ Fire, Cold หรือ Lightning ผู้ใช้และ Quintessa ได้ Elemental Resonance 1 สแต็ก'],
      ['M', 'Elemental Discharge', 'ปลดปล่อยธาตุ', 'Main Part: INT +3, Dominance 0.6; Spell ทอย INT ใช้สแต็ก Elemental Resonance เพื่อสร้าง Fire, Cold และ Lightning Damage หากไม่มีสแต็กจะสุ่มเพียงธาตุเดียว ต้นทางแสดงลูกเต๋า 1d12 และ 33% แยกต่อธาตุ แต่ไม่อธิบายจำนวนสแต็กที่ใช้'],
      ['S1', 'Elemental Reaction', 'ปฏิกิริยาธาตุ', 'Sub Part: INT +3, Dominance 0.3; เมื่อศัตรูใช้ Fire, Cold หรือ Lightning ให้ศัตรูนั้น Elemental Curse 1 และตนเองได้ Elemental Resonance 1 สแต็ก'],
      ['S2', 'Elemental Curse', 'คำสาปธาตุ', 'Sub Part: INT +3, Dominance 0.3; เริ่ม Combat ให้ศัตรูทั้งหมด Elemental Curse 1 สแต็ก'],
    ],
    statuses: [
      ['Elemental Curse', 'คำสาปธาตุ', 'รับ Fire, Cold และ Lightning Damage เพิ่ม 4% ต่อสแต็ก; ระยะเวลา 14 วินาที สูงสุด 25 สแต็ก'],
      ['Elemental Resonance', 'ธาตุประสาน', 'สร้าง Fire, Cold และ Lightning Damage เพิ่ม 3% ต่อสแต็ก; ระยะเวลา 10 วินาที สูงสุด 10 สแต็ก'],
    ],
    authorities: [
      ['Tri-Elemental Shot', 'กระสุนสามธาตุ', 'Basic', '5', '9 วินาที', 'ยิง Fire, Cold และ Lightning อย่างละนัดพร้อมกัน นัดละ 1d4+CHA และให้ Elemental Curse 1 สแต็ก หลายนัดจากชุดเดียวโดนตัวเดียวกันจะให้คำสาปเพียงครั้งเดียว'],
      ['Pillar of Fire', 'เสาเพลิง', 'Special', '3', '12 วินาที', 'จุดระเบิดรัศมี 1 หลังรอ 2 วินาที ให้ Elemental Curse 1 สแต็ก แล้วทิ้งเสาเพลิง 4 วินาที ทำ Fire Damage ทุก 1 วินาที; Wiki ไม่ระบุสูตรความเสียหาย'],
      ['Frost Blast', 'ระเบิดเยือกแข็ง', 'Special', '—', '10 วินาที', 'ระเบิดรัศมี 1.2 สร้าง Cold Damage 12d6+CHA และ Restrained 2 วินาที'],
      ['Chain Lightning', 'สายฟ้าลูกโซ่', 'Special', '3', '12 วินาที', 'สุ่มศัตรู 1 แล้วชิ่งได้อีก 4 ครั้ง เป้าหมายละ Lightning Damage 2d8+CHA และ Elemental Curse 1 สแต็ก ไม่โดนตัวเดิมซ้ำในสายเดียว'],
      ['Tri-Elemental Satellites', 'บริวารสามธาตุ', 'Special', '—', '17 วินาที', 'เรียกบริวาร Fire, Cold, Lightning โคจร 6 วินาที สลับยิงศัตรูใกล้สุดทุก 0.6 วินาที สร้างความเสียหายธาตุที่ตรงกัน 1d8+CHA'],
      ['Hyper-Elemental Blast', 'มหาระเบิดธาตุ', 'Ultimate', '—', '1 วันในเกม', 'โจมตีศัตรูทั้งหมดด้วย Fire, Cold และ Lightning อย่างละ 6d8+CHA ให้ Elemental Curse 4 สแต็กและ Stun 1.8 วินาที'],
      ['Tri-Elemental Dominion', 'อาณาเขตสามธาตุ', 'Ultimate', '—', '1 วันในเกม', 'ศัตรูทั้งหมดสูญเสีย Resistance และ Immunity ต่อ Fire, Cold, Lightning และรับความเสียหายจากสามธาตุเพิ่ม 50% นาน 10 วินาที'],
    ],
    relics: [
      ['Tricolor Prism', 'ปริซึมสามสี · Normal', 'เริ่มการรุกราน: ฝ่ายเราทั้งหมดรับ Elemental Resonance 3 สแต็ก'],
      ['Resonance Crystal', 'ผลึกประสาน · Rare', 'เมื่อพันธมิตรได้ Elemental Resonance ให้เพิ่มอีก 1 สแต็ก'],
      ['Curse-Inscribed Orb', 'ลูกแก้วจารคำสาป · Epic', 'ขณะ Elemental Curse เต็มสแต็ก ลบ Resistance ต่อ Fire, Cold และ Lightning ของเป้าหมาย'],
      ['Tri-Elemental Crown', 'มงกุฎสามธาตุ · Legendary', 'ขณะ Elemental Resonance เต็มสแต็ก ประสิทธิผลเพิ่ม 52% ตามตัวเลขบน Wiki'],
    ],
    aspect: ['Tri-Elemental Crystallography', 'ผลึกศาสตร์สามธาตุ', 'แต่ละโหนดนอก Battle สุ่มธาตุ Fire, Cold หรือ Lightning เข้าโหนดแล้วได้คริสตัลธาตุนั้น 1 แต่ละหน่วยเพิ่มความเสียหายธาตุที่ตรงกันของฝ่ายเรา 8% เมื่อขึ้น Stage ลดคริสตัลครึ่งหนึ่ง'],
    promotions: [
      ['Elemental Amplification', 'ขยายพลังธาตุ · Normal', 'ฝ่ายเราสร้าง Fire, Cold และ Lightning Damage ต่อศัตรูเพิ่ม 6%'],
      ['Crystal Extraction', 'สกัดผลึก · Normal / Aspect', 'ที่ Treasure Chest ได้คริสตัลของธาตุที่กำหนดเพิ่ม 1'],
      ['Crystal Wavelength', 'คลื่นผลึก · Rare / Aspect', 'เริ่มการรุกราน: ต่อจำนวนคริสตัลธาตุที่มีน้อยที่สุด ให้ฝ่ายเรา Elemental Resonance และศัตรู Elemental Curse อย่างละ 1 สแต็ก'],
      ['Elemental Transmutation', 'แปรธาตุ · Rare / Aspect', 'เมื่อเข้า Sanctuary ได้คริสตัลธาตุที่มีมากที่สุดเพิ่ม 1'],
    ],
    ascensions: [
      ['Crystalized Output: Cold', 'ปลดพลังผลึก: เย็น · Legendary / Aspect', 'ทุกคริสตัล Cold 10 หน่วย เพิ่มความเร็วรีโหลดและฟื้นคูลดาวน์ Authority 15%'],
      ['Crystalized Output: Fire', 'ปลดพลังผลึก: ไฟ · Legendary / Aspect', 'ทุกคริสตัล Fire 10 หน่วย ฝ่ายเราทั้งหมดได้ Damage Dice +1'],
      ['Crystalized Output: Lightning', 'ปลดพลังผลึก: สายฟ้า · Legendary / Aspect', 'ทุกคริสตัล Lightning 10 หน่วย ฝ่ายเราทั้งหมดได้ Critical Roll +1'],
      ['Tri-Elemental Amalgam', 'หลอมรวมสามธาตุ · Legendary / Aspect', 'ทุกคริสตัลรวม 5 หน่วย ฝ่ายเราทั้งหมดได้ Max HP และ Dice Damage เพิ่ม 10%'],
    ],
    caveats: ['Ascension ทั่วไปและค่า Aspect Enhancement บางขั้นยังเป็น ???', 'Pillar of Fire: คำอธิบายระบุเสาอยู่ 4 วินาที แต่ตาราง Stats ระบุ Duration 2 วินาที; แสดงคำอธิบายและเก็บข้อขัดแย้งนี้ไว้', 'Elemental Discharge แสดงสูตรและโอกาส 33% ต่อธาตุโดยไม่แจกแจงเงื่อนไขสแต็ก จึงยังไม่สรุปสูตรรวม'],
  },
  zaria: {
    keyStat: 'DEX', stats: { STR: 16, DEX: 18, CON: 10, INT: 12, WIS: 10, CHA: 14, HP: 95, AC: 10, Initiative: 0 },
    immunity: 'Bleeding', damage: 'Physical / Necrotic (Authority)', source: 'https://dungeonwithin.miraheze.org/wiki/Zaria', sourceUpdated: '6 พ.ย. 2026 · 19:01 UTC',
    summary: 'จอมมารระยะประชิด ใช้ DEX เน้นความเสียหายต่อเนื่องจาก Bleeding, เพิ่มพลังเลือดด้วย Exsanguination และสะสม Blood Intoxication เพื่อเพิ่มโอกาสลงมือกับความเร็วยิง Authority',
    skills: [
      ['A', 'Quick Slash', 'ฟันฉับไว', 'Main Action ระยะประชิด ทอยโจมตี DEX สร้าง Physical Damage 3d6+DEX'],
      ['B', 'Bloodbath Festival', 'เทศกาลนองเลือด', 'Innate Trait: ป้องกัน Bleeding และให้ Blood Intoxication แก่พันธมิตรทั้งหมดเมื่อเริ่ม Combat'],
      ['M', 'Bladed Whip', 'แส้คมมีด', 'Main Part: DEX +3, Dominance 0.6; Main Action ระยะประชิด ทอย DEX สร้าง Physical 2d10+DEX พร้อม Bleeding (Zaria) และ Exsanguination'],
      ['S1', 'Blood Mist', 'หมอกโลหิต', 'Sub Part: DEX +3, Dominance 0.3; เริ่ม Combat ให้ Bleeding (Zaria) แก่ศัตรูทั้งหมด'],
      ['S2', 'Blood Madness', 'คลั่งโลหิต', 'Sub Part: DEX +3, Dominance 0.3; ได้ Blood Intoxication ทุกครั้งที่ได้รับความเสียหาย'],
    ],
    statuses: [
      ['Bleeding', 'เลือดไหล (ทั่วไป)', 'Physical Damage 1d4 ทุก 2 วินาที ระยะเวลา 8 วินาที แยกสแต็กเป็นรายครั้ง'],
      ['Bleeding (Zaria)', 'เลือดไหล (Zaria)', 'Wiki ยังเขียนว่าทำ Physical Damage 2d6 เมื่อจบ Combat ระยะเวลา 3 วินาที / นอก Combat 6 วินาที ต้องตรวจจังหวะกับ v0.7.2'],
      ['Bleeding (Authorities)', 'เลือดไหลจาก Authority', 'Wiki ระบุ 1d4 เมื่อจบ Combat ระยะเวลา 2.4 วินาที / นอก Combat 4.8 วินาที; Blade Hell ใช้ 3.6 / 7.2 วินาที ต้องตรวจจังหวะกับ v0.7.2'],
      ['Blood Intoxication', 'เมามายโลหิต', 'เพิ่มโอกาสลงมือเพิ่มเติมและความเร็วยิง Authority อย่างละ 1% ต่อสแต็ก ระยะเวลา 12 วินาที สูงสุด 100 สแต็ก'],
      ['Exsanguination', 'สูญสิ้นโลหิต', 'รับความเสียหายจาก Bleeding เพิ่ม 10% ต่อสแต็ก ระยะเวลา 10 วินาที สูงสุด 50 สแต็ก'],
    ],
    authorities: [
      ['Blade Shot', 'ยิงคมดาบ', 'Basic', '8', '6 วินาที', 'ฟันด้วยดาบโซ่รัศมี 1 ที่เป้าหมาย สร้าง Physical Damage ให้ Bleeding 2.4 วินาทีและ Exsanguination 1 สแต็ก; Wiki ไม่ระบุสูตรความเสียหาย'],
      ['Bloodstorm', 'พายุโลหิต', 'Special', '3', '20 วินาที', 'ลูกแก้วโดนศัตรูแล้วสร้างพายุรัศมี 1 นาน 7 วินาที เคลื่อนตามทิศยิงช้า ๆ ทุก 1 วินาทีสร้าง Physical Damage และ Bleeding 3 วินาที'],
      ['Boiling Blood', 'โลหิตเดือด', 'Special', '—', '12 วินาที', 'บ่อเลือดรัศมี 2 นาน 5 วินาที สร้าง Necrotic Damage ทุก 1 วินาทีแก่ศัตรูที่ Bleeding เพิ่มความเสียหาย 10% ต่อ Exsanguination โดยไม่ใช้สแต็ก'],
      ['Cross Slash', 'ฟันไขว้', 'Special', '4', '11 วินาที', 'ยิงโซ่คมมีดสองเส้นไขว้ที่เป้าหมาย แต่ละเส้นสร้าง Physical Damage ให้ Bleeding 2.4 วินาทีและ Exsanguination 1 ทะลุได้ 1 ครั้ง และทั้งสองเส้นโดนตัวเดียวกันได้'],
      ['Blood Binding', 'พันธนาการโลหิต', 'Special', '—', '13 วินาที', 'โซ่รัศมี 1.2 ให้ Restrained 3 วินาที หากเป้าหมาย Bleeding อยู่ก่อนแล้ว ให้ Exsanguination เพิ่ม 2 สแต็ก'],
      ['Blade Hell', 'นรกคมมีด', 'Ultimate', '—', '1 วันในเกม', 'นาน 12 วินาที ฟันศัตรูสุ่มทุก 0.4 วินาที สร้าง Physical Damage และ Bleeding แบบ Blade Hell เป้าหมายเดิมรับผลได้ไม่เกินหนึ่งครั้งทุก 0.8 วินาที'],
      ['Crimson Full Moon', 'จันทร์เพ็ญสีชาด', 'Ultimate', '—', '1 วันในเกม', 'นาน 8 วินาที ระยะเวลา Bleeding บนศัตรูไม่ลดลง และความเสียหายจาก Bleeding คูณ 1.8'],
    ],
    relics: [
      ['Bloodscent Incense Burner', 'กระถางธูปกลิ่นโลหิต · Normal', 'เริ่มการรุกราน: ฝ่ายเราทั้งหมดได้ Blood Intoxication 5 สแต็ก'],
      ['Torn Red Fabric', 'ผ้าแดงฉีกขาด · Rare', 'เมื่อให้ Exsanguination แก่ศัตรู ให้เพิ่มอีก 1 สแต็ก'],
      ['Thirsting Heart', 'หัวใจกระหาย · Epic', 'เมื่อศัตรูที่มี Exsanguination รับความเสียหายจาก Bleeding ให้ Exsanguination เพิ่ม 1 สแต็ก'],
      ['Bloodsoaked Crown', 'มงกุฎชุ่มเลือด · Legendary', 'พันธมิตรที่มี Blood Intoxication โจมตีศัตรูที่มี Exsanguination จะได้ Main Action เพิ่ม 1 ครั้ง เกิดได้หนึ่งครั้งต่อ Combat ต่อพันธมิตรแต่ละตัว'],
    ],
    aspect: ['Blood Crusade', 'สงครามโลหิต', 'ผ่าน Battle ได้ Madness 2, Elite 3, Boss 5 แต่ละหน่วยเพิ่ม Dice Damage และ Bleeding Damage ของฝ่ายเรา 6% เมื่อขึ้น Stage ใช้ Madness ครึ่งหนึ่ง'],
    promotions: [
      ['Blood and Steel', 'โลหิตและเหล็กกล้า · Normal', 'ฝ่ายเราสร้าง Physical Damage ต่อศัตรูเพิ่ม 8%'],
      ['Madness Rush', 'คลื่นคลั่ง · Rare / Aspect', 'เริ่มการรุกราน: ให้ฝ่ายเรา Blood Intoxication 2 สแต็กต่อ Madness ที่มี'],
      ['Remains of Thirst', 'เศษความกระหาย · Normal / Aspect', 'เพิ่มเพดานเก็บ Madness 3'],
      ["Scent of Big Game's Blood", 'กลิ่นเลือดเหยื่อใหญ่ · Rare / Aspect', 'ผ่าน Elite หรือ Boss ได้ Madness เพิ่ม 2'],
      ['Seething Obsession', 'หมกมุ่นเดือดพล่าน · Epic / Aspect', 'Wiki ระบุลด Madness ที่ใช้เมื่อเข้าโหนดนอก Battle 20% แต่ขัดกับการเปลี่ยน Blood Crusade ใน Build 212 จึงยังต้องตรวจในเกม'],
    ],
    ascensions: [
      ['Apex of Frenzy', 'จุดสูงสุดแห่งความคลั่ง · Legendary / Aspect', 'โบนัสความเสียหายที่ได้จาก Madness เพิ่ม 25%'],
      ['Blood Imprint', 'ตราโลหิต · Legendary / Aspect', 'ปราบ Stage Boss: ฝ่ายเราทั้งหมดได้ Ability Score +3 ต่อ Madness ที่มีทุก 10 หน่วย คงอยู่ตลอด Run นี้'],
      ['Cruel Aftermath', 'ผลพวงโหดร้าย · Epic / Aspect', 'ต่อ Madness ที่ใช้เมื่อขึ้น Stage: ฝ่ายเราได้ Initiative +1 และ Facility ทำงานเร็วขึ้น 2% จนขึ้น Stage ถัดไป'],
    ],
    caveats: ['Ascension ทั่วไปและค่า Aspect Enhancement บางขั้นยังเป็น ???', 'Wiki ยังใช้คำว่าเมื่อจบ Combat กับ Bleeding บางชนิด แม้สถานะทั่วไปเปลี่ยนเป็นทุก 2 วินาที จึงคงข้อความแยกชนิดและติดป้ายรอตรวจ', 'Authority หลายรายการไม่มีสูตรความเสียหาย; ไม่เติมสูตรจากการคาดเดา', 'Seething Obsession ยังอ้างการเสีย Madness ที่โหนดนอก Battle ซึ่งขัดกับประกาศ Build 212'],
  },
};
