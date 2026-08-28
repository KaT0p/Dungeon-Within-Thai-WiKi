# Dungeon Within Thailand Wiki — บัญชีระบบหลัก v1

> สถานะ: สำรวจโครงสร้างระบบรอบแรกเสร็จแล้ว  
> วันที่ตรวจสอบ: 2026-08-27  
> เวอร์ชันเป้าหมาย: v0.6.0  
> ข้อควรระวัง: การมีชื่อระบบในบัญชีนี้ไม่ได้แปลว่ารายละเอียดทั้งหมดผ่านการตรวจในเกมแล้ว

เอกสารนี้ตอบคำถามว่า Dungeon Within มีระบบหลักอะไร แต่ละระบบทำหน้าที่ตรงไหน เชื่อมต่อกันอย่างไร และส่วนใดต้องตรวจซ้ำกับเกม Build ปัจจุบัน

## 1. ภาพรวมวงจรการเล่น

```text
เมนูนอก Run
  ↓ เลือกจอมมาร แคมเปญ และบททดสอบ
เริ่ม Run
  ↓ เลือก Node ประจำวัน
สำรวจ / ต่อสู้ / รับรางวัล
  ↓ จัดทีม อัปเกรดมอนสเตอร์ และปรับดันเจี้ยน
ต่อสู้กับบอสประจำด่าน
  ↓
ผ่านไปยังด่านถัดไป หรือจบ Run เมื่อแพ้/สำเร็จ
  ↓
นำทรัพยากรและ Legacy ที่เก็บได้ไปปลดล็อกความก้าวหน้าถาวร
  ↓
เริ่ม Run ใหม่ด้วยตัวเลือกที่มากขึ้น
```

องค์ประกอบสำคัญของเกมไม่ใช่การบังคับตัวละครโดยตรง แต่เป็นการเตรียมดันเจี้ยน เลือกเส้นทาง จัดยูนิต และสร้างองค์ประกอบที่ทำงานร่วมกันก่อนการต่อสู้แบบอัตโนมัติ

### สถานะการยืนยัน

| ประเด็น | สถานะ | หลักฐาน |
|---|---|---|
| เกมเป็นแนวสร้างและป้องกันดันเจี้ยนแบบ Roguelike | ยืนยันจากแหล่งทางการ | คำอธิบายบน App Store และ Google Play |
| เลือก Node หนึ่งรายการต่อวัน | พบใน Wiki ชุมชน | หน้า Nodes |
| การต่อสู้ส่วนใหญ่เป็นอัตโนมัติ | พบใน Guidebook/Wiki | หน้า Combat อ้างข้อมูลจาก Guidebook |
| มีความก้าวหน้าข้าม Run | ยืนยันจากแหล่งทางการและ Wiki | คำอธิบาย Store และหน้า Ark of Memory |
| เงื่อนไขสำเร็จของ Run ทั้งหมด | ต้องตรวจในเกม | หน้า Stages ของ Wiki ยังไม่มีเนื้อหา |

## 2. แผนผังระบบหลัก

| System ID | ระบบ | ช่วงใช้งาน | หน้าที่หลัก | สถานะ v0.6.0 |
|---|---|---|---|---|
| `system-run-setup` | Run Setup | ก่อนเริ่ม Run | เลือกจอมมาร สกิน แคมเปญ และบททดสอบ | ต้องตรวจ UI |
| `system-node-map` | Node Map | ระหว่าง Run | เลือกเหตุการณ์ประจำวันและเส้นทาง | พบข้อมูลหลัง v0.6.0 บางส่วน |
| `system-dungeon-layout` | Dungeon Layout | ระหว่าง Run | วางสิ่งปลูกสร้างและมอนสเตอร์ | ต้องตรวจรายละเอียดปัจจุบัน |
| `system-combat` | Combat | ระหว่าง Run | ต่อสู้อัตโนมัติระหว่างมอนสเตอร์กับฮีโร่ | ต้องตรวจรอบเวลา v0.6.0 |
| `system-rewards` | Rewards | หลัง Node/การต่อสู้ | รับทรัพยากร มอนสเตอร์ Relic และ Part | ต้องทำบัญชีรางวัล |
| `system-monster-growth` | Monster Growth | ระหว่าง/ข้าม Run | ฝึก เลื่อนขั้น หลอมรวม และย้ายคุณสมบัติ | มีการเปลี่ยนหลายเวอร์ชัน |
| `system-facility-growth` | Facility Growth | ระหว่าง/ข้าม Run | Modify, Promote, Combine, Attach และ Relocate | ปรับต่อเนื่องถึง v0.6.0 |
| `system-dark-lord-growth` | Dark Lord Growth | ระหว่าง/ข้าม Run | Level, Trait, Promotion, Ascension และ Aspect | เปลี่ยนครั้งใหญ่ใน v0.6.0 |
| `system-ark` | Ark of Memory | ข้าม Run | เก็บมอนสเตอร์ สิ่งปลูกสร้าง และ Part บางชนิด | ต้องตรวจข้อจำกัด v0.6.0 |
| `system-workshop` | Architect's Workshop | นอก Run | ปลดล็อกฟังก์ชันและอัปเกรดถาวร | หน้า Wiki มีข้อมูล v0.5–0.6 ปะปน |
| `system-codex` | Codex | นอก Run | บันทึกสิ่งที่เคยพบและเปิดดูข้อมูล | ต้องตรวจขอบเขตข้อมูลจริง |
| `system-trading` | Trading Post | นอก Run | แลก Forgotten Gold เป็นทรัพยากร | ต้องตรวจอัตราแลกเปลี่ยน |
| `system-quests` | Underworld Quests | นอก Run | ทำภารกิจเพื่อรับรางวัล | ต้องสำรวจหน้าจอจริง |
| `system-difficulty` | Trials & Difficulty | ก่อน Run | ปรับความยากและรับรางวัลขั้น Trial | ค่าบางส่วนอาจล้าสมัย |
| `system-campaigns` | Campaigns | ก่อน Run | เพิ่มกฎ ศัตรู และระบบเฉพาะของ Run | พบ 3 แคมเปญใน Wiki |

## 3. การเตรียมก่อนเริ่ม Run

หน้า Run Options แบ่งตัวเลือกที่พบออกเป็นสี่ส่วนหลัก

### 3.1 จอมมาร

- เลือกจอมมารที่ปลดล็อกแล้ว
- เลือกสกินที่มี หากระบบรองรับ
- ความคืบหน้าของ Trial แยกตามจอมมารตามข้อมูล Wiki
- v0.6.0 เพิ่มหรือปรับ Promotion, Ascension และ Aspect ของจอมมาร

สถานะ: **โครงสร้างยืนยันได้ แต่ต้องตรวจค่ารายตัวในเกม**

### 3.2 แคมเปญ

Wiki ระบุว่าสามารถเลือกแคมเปญผสมกันได้ และพบสามรายการ:

| Campaign | ระบบที่เพิ่มตาม Wiki | สถานะ |
|---|---|---|
| Frontline Expansion | การขยายดันเจี้ยนและ Facility Combination | ต้องตรวจ v0.6.0 |
| Heroes of Myth | Myth และ Mythic Boss | ต้องตรวจ v0.6.0 |
| War of the Gods | Demon Lords และ Goddess Blessings | ต้องตรวจคำเรียกจาก UI |

สิ่งที่ยังขาด:

- เงื่อนไขปลดล็อก
- กฎการผสมหลายแคมเปญ
- รางวัลและความยากที่เปลี่ยน
- จำนวนด่านและบอสของแต่ละแคมเปญ

### 3.3 Trials

- ใช้เพิ่มความยากด้วยเงื่อนไขหลายแบบ
- แต่ละระดับเพิ่มแต้ม Trial แตกต่างกัน
- Wiki ระบุเพดาน Trial Level 30
- การผ่านด่านครั้งแรกในระดับ Trial ใหม่ให้รางวัลระดับนั้นและระดับต่ำกว่าที่ยังไม่รับ
- ความคืบหน้าสูงสุดแยกตามจอมมาร

รายการ Trial ที่พบใน Wiki:

| Trial | ผลโดยสรุป | สถานะ |
|---|---|---|
| Vitality | เพิ่ม HP ศัตรู | ต้องตรวจค่าปัจจุบัน |
| Haste | เพิ่มความเร็วและ Initiative ศัตรู | ต้องตรวจค่าปัจจุบัน |
| Iron | เพิ่ม AC และ Saving Throw ศัตรู | ต้องตรวจค่าปัจจุบัน |
| Armament | เพิ่ม Sub Part ให้ Elite และ Boss | ต้องตรวจค่าปัจจุบัน |
| Dominion | เพิ่ม Dominance Cost ของมอนสเตอร์และสิ่งปลูกสร้าง | ต้องตรวจค่าปัจจุบัน |
| Drought | ลดการฟื้นฟูและ Temporary HP ฝ่ายเรา | ต้องตรวจค่าปัจจุบัน |
| Origin | เพิ่ม Trait ให้ Elite และ Boss | ต้องตรวจค่าปัจจุบัน |
| Intervals | เพิ่ม Cooldown ของ Facility | ต้องตรวจหลังระบบเวลา v0.6.0 |
| Invincibility | ศัตรูอมตะชั่วคราวเมื่อเข้าการต่อสู้ครั้งแรก | ต้องตรวจค่าปัจจุบัน |
| Ability | เพิ่มค่าสถานะหลักของศัตรู | ต้องตรวจค่าปัจจุบัน |

### 3.4 Toggles

| Toggle | ผลตาม Wiki | สถานะ |
|---|---|---|
| Truth | เปิดการเลือก Trial และ Innate Trait ของฮีโร่ | ต้องตรวจในเกม |
| Beginner | ลดความยาก เพิ่มขีดจำกัด Dominance และยังรับ Trial Reward ได้ แต่ลดความเร็วเกม | ต้องตรวจในเกม |

## 4. Node และการสำรวจ

Wiki ระบุว่าหนึ่งวันมีตัวเลือก Node หนึ่งถึงสามรายการ และเลือกได้หนึ่งรายการ

### 4.1 Battle Nodes

| Node | หน้าที่ | รางวัลที่ Wiki ระบุ | สถานะ |
|---|---|---|---|
| Normal Battle | การต่อสู้ทั่วไป | Dream Dust, Forgotten Coins, Standard Reward Pack | ต้องตรวจชื่อและจำนวน |
| Elite Battle | ศัตรูยากขึ้น รางวัลดีขึ้น | เพิ่ม Parchments, Relic และ Dark Lord Ascension | ต้องตรวจ v0.6.0 |
| Mid-Boss Battle | บอสกลางด่านและเป็นเส้นทางบังคับ | Premium Reward Pack และรางวัลระดับสูงขึ้น | ต้องตรวจ v0.6.0 |
| Final Battle | บอสท้ายด่าน | Memory Fragment, Relic, Ascension และ Premium Reward Pack | ต้องตรวจ v0.6.0 |

### 4.2 Item Nodes

| Node | หน้าที่ | สิ่งที่พบ |
|---|---|---|
| Merchant | ซื้อและสุ่มรายการใหม่ด้วย Dream Dust | Ascension, Reward Pack, Part และ Relic |
| Chest | เลือก Relic หนึ่งชิ้นจากตัวเลือก | Relic 3 รายการตาม Wiki |
| Event | เลือกเหตุการณ์ที่มีผลดีและผลเสีย | ตัวเลือก 2–3 แบบตาม Wiki |

### 4.3 Improvement Nodes

| Node/คำสั่ง | หน้าที่ | ความสัมพันธ์ |
|---|---|---|
| Sanctuary | จุดรวมคำสั่งพัฒนาและจัดการ | บางคำสั่งต้องปลดล็อกจาก Workshop |
| Search | ค้นทรัพยากรหรือ Part | ให้รางวัลแบบสุ่ม |
| Train | เพิ่มค่าสถานะมอนสเตอร์ | Wiki ระบุว่าหนึ่งตัวฝึกได้หนึ่งครั้งต่อ Run ก่อน v0.6.0 |
| Modify | พัฒนาสิ่งปลูกสร้าง | รายละเอียดใน Wiki ยังเป็น `???` |
| Facility Combination | รวมสิ่งปลูกสร้าง | เชื่อมกับ Frontline Expansion |
| Facility Relocation | ย้ายสิ่งปลูกสร้าง | ปรับปรุงต่อเนื่องใน v0.5.4–0.6.0 |
| Dismantle | แยกมอนสเตอร์เพื่อรับ Part | อัตราดรอปขึ้นกับระบบอื่น |
| Monster Sanctum | Promote, Fuse และ Sacrifice | ต้องปลดล็อกจาก Architect's Workshop |
| Memorial Altar | ฝากและรับข้อมูลจาก Ark | เชื่อมความก้าวหน้าข้าม Run |

## 5. การสร้างและจัดดันเจี้ยน

### 5.1 ประเภทสิ่งปลูกสร้าง

| ประเภท | หน้าที่ |
|---|---|
| Hunting Ground | วางมอนสเตอร์เพื่อหยุดและต่อสู้กับฮีโร่ |
| Trap | สร้างความเสียหายหรือสถานะเมื่อศัตรูพยายามปลดกับดัก |
| Structure | สนับสนุนห้อง กับดัก หรือยูนิตอื่น |

### 5.2 ระบบที่เกี่ยวข้องกับ Layout

- ช่องแถวหน้าและแถวหลังใน Hunting Ground
- ความจุจำนวนมอนสเตอร์ของแต่ละห้อง
- เส้นทางที่ฮีโร่ใช้ผ่านดันเจี้ยน
- Dominance Cost และ Dominance Limit
- Durability ของสิ่งปลูกสร้าง โดยเฉพาะกับดัก
- Effect Area เช่น Zone, Adjacent, Row, Column และ Cross
- Safe/Dangerous และ Friendly Fire ของกับดัก
- Facility Relocation
- Promotion/Expansion ของ Facility
- Attachment และ Facility Combination
- ห้องหลายช่องใน Frontline Expansion

### 5.3 จุดที่ต้องตรวจ v0.6.0

- เวลาทำงานและ Cooldown หลังระบบเปลี่ยนจาก Turn เป็นเวลาเฉพาะตัว
- สูตรความทนทานของกับดัก
- วิธีลด Dominance Cost จาก Promotion
- กฎการรวม Facility และการเก็บใน Ark
- ขนาดแผนผังปกติและ Frontline Expansion
- พฤติกรรมฮีโร่เมื่อ Hunting Ground เต็ม

## 6. ระบบการต่อสู้

### 6.1 ส่วนที่ยืนยันในระดับโครงสร้าง

- การต่อสู้เป็นแบบอัตโนมัติ โดยการเตรียมทีมและ Layout มีความสำคัญ
- ยูนิตใช้ตำแหน่งแถวหน้าและแถวหลัง
- มีการโจมตีประชิดและระยะไกล
- มี Main Action, Reaction และ Passive Effect
- มี Attack Roll, Saving Throw, Difficulty Class, Advantage และ Disadvantage
- มี Armor Class, Initiative, Temporary HP, Healing และเอฟเฟกต์สถานะ
- Ability อาจมีหลาย Damage Line และหลายเป้าหมาย

### 6.2 ลำดับการคำนวณที่ Wiki บันทึก

```text
เลือกเป้าหมาย
  ↓
Attack Roll และ/หรือ Saving Throw
  ↓
Damage Roll + Modifier
  ↓
Bonus Damage
  ↓
Vulnerability
  ↓
Resistance
  ↓
Immunity
```

สถานะ: **ต้องตรวจใหม่ในเกม v0.6.0** เพราะ Release Note ระบุว่ามีการปรับ Ability Score, Dice Damage, Damage Type และระบบเวลาของ Effect

### 6.3 ข้อมูลที่ยังห้ามนำไปทำเครื่องคำนวณ

- สูตร Ability Modifier
- สูตร Proficiency Bonus
- สูตร Initiative
- เงื่อนไข Critical Hit
- ตัวคูณ Resistance, Immunity และ Vulnerability
- ลำดับการคำนวณความเสียหาย
- จำนวนและรายชื่อ Damage Type ปัจจุบัน

ข้อมูลเหล่านี้ใช้เป็นสมมติฐานสำหรับตรวจสอบได้ แต่ยังไม่ถือเป็นข้อมูลยืนยันจนกว่าจะเทียบ Build ล่าสุด

## 7. การเติบโตภายใน Run

### 7.1 มอนสเตอร์

| ระบบ | ผล | จุดที่ต้องตรวจ |
|---|---|---|
| Train | เพิ่มค่าสถานะ | Repeat Training ใน v0.6.0 เปลี่ยนข้อจำกัดอย่างไร |
| Promote | รวมตัวเหมือนกันเพื่อเพิ่มขั้น | จำนวนที่ใช้และผลต่อค่าสถานะ |
| Fuse | รวมมอนสเตอร์เพื่อสุ่มตัวระดับสูงกว่า | โอกาสและเงื่อนไข Grade/Tier |
| Sacrifice | สละมอนสเตอร์เพื่อพัฒนาจอมมาร | EXP และ Trait ที่ได้รับ |
| Parts | ติดตั้งความสามารถเพิ่มเติม | Main/Sub/Ethereal และ Dominance Cost |
| Variant | รูปแบบพิเศษของมอนสเตอร์ | เงื่อนไขและผลต่อข้อมูลพื้นฐาน |

### 7.2 จอมมาร

- Level ภายใน Run
- Trait จากการ Sacrifice
- Part ของจอมมาร
- Promotion
- Ascension
- Aspect
- Authority และการตั้ง Auto-use

ระบบ Promotion, Ascension และ Aspect ถูกเพิ่มหรือปรับครั้งใหญ่ใน v0.6.0 จึงต้องสำรวจเป็นหัวข้อเฉพาะภายหลัง

### 7.3 สิ่งปลูกสร้าง

- Modify
- Promote/Expand
- Attach
- Combine
- Relocate
- เก็บลง Ark of Memory

## 8. ความก้าวหน้าข้าม Run

### 8.1 Ark of Memory

หน้าที่ตาม Wiki:

- เก็บมอนสเตอร์และสิ่งปลูกสร้างไว้ใช้ใน Run ต่อไป
- ฝากและนำออกผ่าน Memorial Altar
- มอนสเตอร์ใน Ark เก็บ Part ที่ติดตั้งไว้ได้ตามเงื่อนไข
- มีจำนวน Slot จำกัด
- รองรับการ Rename, Favorite และ Lock
- มี Muster สำหรับเรียกมอนสเตอร์บางระดับตอนเริ่ม Run
- มี Transfer สำหรับย้าย Trait, Part, Variant หรือ Promotion ตามเงื่อนไข

ความเสี่ยง:

- ข้อมูล Wiki ส่วนใหญ่เขียนก่อน v0.6.0
- Ethereal Part ไม่สามารถเก็บใน Ark ตาม Developer Preview แต่ต้องยืนยันชื่อและกฎจากเกมจริง
- เงื่อนไขการสูญเสียข้อมูลเมื่อ Dismantle, Sacrifice, Fuse หรือ Promote ต้องทดสอบ Build ปัจจุบัน

### 8.2 Architect's Workshop

เป็นศูนย์กลางปลดล็อกฟังก์ชันถาวรด้วยรางวัลจาก Run ระบบที่พบได้แก่:

- Essence Chamber
- Workshop สำหรับ Facility
- Ark of Memory
- Dark Lord's Quarters
- Trading Post
- Codex
- Underworld Quests
- เครื่องมือ Dismantle, Sacrifice, Transfer, Relocation, Expansion และ Attachment
- Monster Sanctum และ Memorial Altar
- การเพิ่ม Slot ของ Ark
- ความเร็วการต่อสู้และ Auto Authority
- Retry หลังแพ้การต่อสู้

สถานะ: **มีบัญชีชื่อระบบแล้ว แต่ราคาและลำดับปลดล็อกต้องตรวจในเกม**

## 9. ทรัพยากรและสกุลเงิน

รายการนี้เป็นบัญชีชื่อที่พบ ยังไม่ใช่ตารางราคา

| ชื่ออังกฤษ | ใช้สำหรับตามแหล่งที่พบ | สถานะ |
|---|---|---|
| Dream Dust | ซื้อของและ Reroll ที่ Merchant; ฝากข้อมูลใน Ark บางกรณี | ต้องตรวจชื่อและการใช้ทั้งหมด |
| Forgotten Coins | รางวัลจาก Battle Node ตามหน้า Nodes | ต้องตรวจว่าเป็นคำเดียวกับ Forgotten Gold หรือไม่ |
| Forgotten Gold | ใช้แลกทรัพยากรที่ Trading Post ตามหน้า Workshop | ห้ามรวมกับ Forgotten Coins จนตรวจ UI |
| Parchments of Imagery | รางวัลจาก Battle ระดับสูงขึ้น | ต้องตรวจการใช้งาน |
| Memory Fragments | รางวัลจาก Final Battle และความก้าวหน้าถาวร | ต้องตรวจการใช้ทั้งหมด |
| Fragment / Fragments | ใช้ปลดล็อกและพัฒนาบางระบบ | ต้องตรวจชื่อเต็มจาก UI |
| Abyssal Ink | ใช้ปลดล็อก Architect's Workshop | ยืนยันโครงสร้างจาก Wiki |
| Hourglass | เพิ่ม Slot และใช้กับความก้าวหน้าบางระบบ | ต้องตรวจชื่อเอกพจน์/พหูพจน์ |
| Medal | รางวัล Trial สำหรับพัฒนาจอมมาร | ต้องตรวจชื่อไอคอนและการใช้ |
| Token | รางวัล Trial สำหรับ Architect's Workshop | ชื่อกว้างเกินไป ต้องตรวจ UI |
| Thunderstone | รางวัล Trial สำหรับ Demon Lord Gift | ต้องตรวจคำว่า Demon Lord/Demon God |
| Summoning Crystal | เรียกข้อมูลจาก Ark ตามเงื่อนไข | ต้องตรวจชื่อและเงื่อนไข |
| Imprint Crystal | บันทึกข้อมูลปัจจุบันลง Ark ตามเงื่อนไข | ต้องตรวจชื่อและเงื่อนไข |
| Dimensional Crystal | พบใน Release Note และสินค้าบางประเภท | ต้องสำรวจระบบที่เกี่ยวข้อง |
| Dimensional Legacy | พบใน Patch Notes v0.5.x | ต้องสำรวจระบบที่เกี่ยวข้อง |
| Dimensional Record | พบใน Patch Notes v0.5.x | ต้องสำรวจระบบที่เกี่ยวข้อง |

## 10. ความยาก โหมด และเงื่อนไขจบ

### สิ่งที่ทราบ

- มี Beginner Mode
- มี Trial หลายประเภทและ Trial Level
- มี Campaign สามชุดที่เลือกผสมกันได้ตาม Wiki
- มี Frontline Expansion ที่เปลี่ยนขนาดดันเจี้ยน
- มี Mid-Boss และ Final Boss ในแต่ละด่าน
- การผ่าน Trial ครั้งแรกให้รางวัลถาวรตามด่าน
- Architect's Workshop บางรายการปลดล็อกหลัง Clear Stage 4

### สิ่งที่ยังไม่ทราบแน่ชัด

- จำนวนด่านทั้งหมดของ Run ปกติใน v0.6.0
- เงื่อนไขถือว่า Run “สำเร็จ” ในทุก Campaign
- สิ่งที่คงอยู่หลังแพ้กับสิ่งที่คงอยู่หลังชนะ
- ความต่างของ Game Over, Battle Retry และการเริ่มวันใหม่
- รายละเอียด Boss และรางวัล First Clear ปัจจุบัน
- กฎเมื่อเปิด Campaign หลายชุดพร้อมกัน

หน้า `Stages` และ `Memento Mori` ของ Wiki อังกฤษยังไม่มีเนื้อหา จึงต้องเก็บข้อมูลส่วนนี้จากเกมหรือแหล่งทางการโดยตรง

## 11. ช่องว่างข้อมูลที่พบ

### ระดับเร่งด่วน

- [ ] ยืนยันเลข Build ล่าสุดในเกม
- [ ] บันทึกหน้า Guidebook หมวด Combat และ Damage Type
- [ ] บันทึกหน้าจอ Run Setup ทั้งหมด
- [ ] ยืนยันรายชื่อ Campaign และ Trial จาก UI
- [ ] ยืนยันทรัพยากรที่ชื่อใกล้กัน เช่น Forgotten Coins/Gold
- [ ] บันทึกเงื่อนไขชนะ แพ้ และสิ่งที่คงอยู่หลังจบ Run
- [ ] ตรวจระบบ Dark Lord Promotion, Ascension และ Aspect
- [ ] ตรวจ Ethereal Part เทียบกับชื่อ Intangible Part ใน Developer Preview

### ระดับถัดไป

- [ ] ราคาและลำดับปลดล็อก Architect's Workshop
- [ ] Reward Table ของแต่ละ Node
- [ ] กฎ Ark of Memory และ Transfer
- [ ] สูตร Combat หลัง v0.6.0
- [ ] ขนาดและกฎ Dungeon Layout ทุกโหมด
- [ ] Underworld Quests และ Trading Post

## 12. แหล่งอ้างอิงที่ใช้

### ทางการ

- [Dungeon Within — App Store](https://apps.apple.com/us/app/dungeon-within/id6761328517)
- [Dungeon Within — Google Play](https://play.google.com/store/apps/details?id=com.GameCoaster.DungeonWithin)
- [Dungeon Within Release Note (EN)](https://gamecoaster.notion.site/Dungeon-Within-Release-Note-EN-32e4966ac9c3808bba34f56a92457d39)

### Wiki ชุมชน

- [Run Options](https://dungeonwithin.miraheze.org/wiki/Run_Options)
- [Nodes](https://dungeonwithin.miraheze.org/wiki/Nodes)
- [Facilities](https://dungeonwithin.miraheze.org/wiki/Facilities)
- [Combat](https://dungeonwithin.miraheze.org/wiki/Combat)
- [Ark of Memory](https://dungeonwithin.miraheze.org/wiki/Ark_of_Memory)
- [Architect's Workshop](https://dungeonwithin.miraheze.org/wiki/Architect%27s_Workshop)

ข้อความดัดแปลงจาก Wiki ชุมชนต้องปฏิบัติตาม CC BY-SA 4.0 ตาม [SOURCES.md](./SOURCES.md)

## 13. เกณฑ์ปิดงาน Phase 2.1

- [x] มีแผนภาพวงจรการเล่นหลัก
- [x] มีบัญชีระบบก่อน Run ระหว่าง Run และข้าม Run
- [x] มีบัญชี Node และการสำรวจ
- [x] มีโครงสร้างระบบต่อสู้โดยไม่รับรองสูตรที่ยังไม่ตรวจ
- [x] มีบัญชีระบบสร้างและจัดดันเจี้ยน
- [x] มีบัญชีความก้าวหน้าภายในและข้าม Run
- [x] มีบัญชีทรัพยากรและสกุลเงินเบื้องต้น
- [x] มีบัญชีความยาก โหมด และข้อมูลเงื่อนไขจบที่ยังขาด
- [x] มีรายการช่องว่างที่ต้องเก็บจากเกม
- [x] ทุกส่วนแยกข้อมูลที่พบออกจากข้อมูลที่ยืนยันแล้ว

