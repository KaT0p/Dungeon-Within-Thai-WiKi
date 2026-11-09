// วันที่ในหน้าข่าวเป็นวันที่เพิ่มข้อมูลบนเว็บ ไม่ใช่วันปล่อยแพตช์
export const recentPatches = [
  { id: 'version-072', title: 'v0.7.2 · Build 216–217', source: 'https://gamecoaster.notion.site/v0-7-2-Build-216-4104966ac9c3804fad2fdf78d0d508ef', highlights: [
    ['จังหวะต่อสู้ใหม่', 'แต่ละยูนิตเข้าร่วมการต่อสู้ → เตรียม → ลงมือ → คูลดาวน์ โดย Initiative มีผลต่อเวลาเข้าร่วมและเตรียมการ คูลดาวน์เดินต่อระหว่างเคลื่อนที่'],
    ['สถานะและสมดุล', 'ปรับระยะเวลาและรอบทำงานเป็นวินาที รวมถึง Erosion, Bloom และ Pus พร้อมปรับมอนสเตอร์ Part, Relic, Facility และ Ascension จึงต้องตรวจคู่มือเดิมอีกครั้ง'],
    ['Dimensional Storage', 'เพิ่มคลังมิติ พร้อมปรับความสะดวกในการเล่นและการปกป้องข้อมูลซื้อสินค้าและเซฟ'],
  ] },
  { id: 'version-071', title: 'v0.7.1 · Build 212', source: 'https://gamecoaster.notion.site/v0-7-1-Build-212-4094966ac9c380939047fd000c44b3b2', highlights: [
    ['Zaria และ Quintessa', 'Blood Crusade ไม่ลด Madness ครึ่งหนึ่งที่โหนดนอกการต่อสู้อีกต่อไป; Blood Imprint ให้ค่าสถานะ 3 ต่อ Madness 10 ส่วน Tri-Elemental Crystallography ลดคริสตัลครึ่งหนึ่งเมื่อขึ้น Stage และเพิ่มโบนัสความเสียหายต่อคริสตัลจาก 5% เป็น 8%'],
    ['Eternal War และ Authority', 'ปรับรางวัลและความแข็งแกร่งศัตรูในด่านไม่สิ้นสุด การเลือก Authority ใหม่จะเปิดหน้ารายละเอียดก่อนรับ'],
  ] },
  { id: 'version-070', title: 'v0.7.0 · Build 208 และ Hotfix 209', source: 'https://gamecoaster.notion.site/v0-7-0-Build-208-4084966ac9c3802aa2c2d8db083fb164', highlights: [
    ['จอมมารใหม่และ Authority', 'เพิ่ม Ostea, Quintessa และ Zaria พร้อมออกแบบระบบ Authority ใหม่ทั้งหมด และเพิ่ม Aspect Enhancement กับ Authority Enhancement ใน Memento Mori'],
    ['Transcendence และ Eternal War', 'มอนสเตอร์ Tier 1 สามารถ Transcend เพื่อยกระดับค่าสถานะ พร้อม Innate Trait และ Part ใหม่ เพิ่มแคมเปญ Eternal War สำหรับเล่น Stage ต่อเนื่อง'],
    ['เนื้อหาและการแก้ไข', 'เพิ่มอีเวนต์ Underworld Quests และ Underworld Pass 2; Hotfix 209 แก้การบันทึกมอนสเตอร์ Imprint เข้า Ark of Memory และ Damage Reduction ของศัตรูบางตัวใน Eternal War'],
  ] },
] as const;

export const hotfix217 = {
  source: 'https://gamecoaster.notion.site/v0-7-2-Build-217-4114966ac9c3804b84f7cffc7226c9d8',
  summary: 'Build 217 ปรับ Blessing of Repose ให้ใช้โอกาสลงมือของฝ่ายเราเป็นช่วง ๆ, Survival Training ฟื้น HP เป็นช่วงเวลา, ชะลอการลด Remains เมื่อ Ostea สะสมไว้มาก และแก้ศัตรูที่ไม่ตายจากเอฟเฟกต์อมตะ',
};

export const newDarkLords = [
  { slug: 'ostea', name: 'Ostea', tone: 'violet', image: '/images/characters/dark-lords/Ostea.png', theme: 'จอมมารใหม่ใน v0.7.0 ที่มีทรัพยากรเฉพาะ Remains', mechanic: 'Remains', note: 'Build 217 ชะลอการลด Remains เมื่อมีสแต็กสะสมจำนวนมาก โดยยังต้องตรวจสูตรและค่าจริงในเกม', source: hotfix217.source },
  { slug: 'quintessa', name: 'Quintessa', tone: 'teal', image: '/images/characters/dark-lords/Quintessa.png', theme: 'จอมมารใหม่ใน v0.7.0 ที่มี Aspect เกี่ยวกับคริสตัล Fire, Cold และ Lightning', mechanic: 'Elemental Crystals', note: 'Build 212 ปรับ Tri-Elemental Crystallography ให้ลดคริสตัลครึ่งหนึ่งเมื่อขึ้น Stage และเพิ่มโบนัสความเสียหายต่อคริสตัลจาก 5% เป็น 8%; ค่าปัจจุบันต้องตรวจซ้ำหลัง v0.7.2', source: recentPatches[1].source },
  { slug: 'zaria', name: 'Zaria', tone: 'rose', image: '/images/characters/dark-lords/Zaria.png', theme: 'จอมมารใหม่ใน v0.7.0 ที่มีทรัพยากรเฉพาะ Madness', mechanic: 'Madness', note: 'Build 212 ปรับ Blood Crusade ไม่ให้ลด Madness ครึ่งหนึ่งที่โหนดนอกการต่อสู้ และ Blood Imprint ให้ค่าสถานะ 3 ต่อ Madness 10; ค่าปัจจุบันต้องตรวจซ้ำหลัง v0.7.2', source: recentPatches[1].source },
] as const;
