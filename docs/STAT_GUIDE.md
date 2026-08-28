# Dungeon Within — คู่มือค่าสถานะ

สถานะ: **พร้อมใช้เป็นคู่มือพื้นฐาน**  
ตรวจล่าสุด: **27 สิงหาคม 2026**  
เวอร์ชันเป้าหมาย: **0.6.0**  
แหล่งหลัก: [Dungeon Within Wiki — Stats](https://dungeonwithin.miraheze.org/wiki/Stats) และ [Combat](https://dungeonwithin.miraheze.org/wiki/Combat)

> ข้อมูลตัวเลขและสูตรมาจาก Wiki ชุมชนซึ่งถอดความจาก Guidebook ในเกม ควรตรวจซ้ำในเกมเมื่อมี Patch ใหม่

## คำตอบสั้นที่สุด

**STR, DEX, CON, INT, WIS และ CHA ไม่ใช่ประเภทความเสียหาย และไม่ได้แปลว่ากายภาพหรือเวทมนตร์โดยอัตโนมัติ**

ให้อ่านข้อมูลสกิลแยกเป็นสามชั้น:

1. **Based on [STAT]** — ใช้ค่าสถานะใดคำนวณความแม่นยำ ความแรง DC หรือผลของสกิล
2. **Melee / Ranged / Spell** — รูปแบบและแท็กของสกิล
3. **Damage Type** — ความเสียหายที่เป้าหมายใช้ Resistance, Immunity หรือ Vulnerability ตรวจรับจริง

ตัวอย่าง: สกิลหนึ่งสามารถเป็น `Based on INT`, มีแท็ก `Spell · Ranged` แต่สร้าง `Necrotic Damage` ได้ ขณะเดียวกันสกิล `Based on STR` อาจมีทั้ง Piercing และ Fire ในการโจมตีเดียวกัน

## ค่าสถานะหลักทั้ง 6

| Stat | ชื่อไทยที่ใช้ | หน้าที่ที่ยืนยันได้ | สิ่งที่ไม่ควรเหมารวม |
|---|---|---|---|
| **STR** | พละกำลัง | ใช้กับ Attack Roll, Damage, DC หรือ Check เมื่อสกิลระบุ STR; พบมากในสกิลโจมตีระยะประชิด | ไม่ได้แปลว่า Physical เสมอ สกิล STR อาจมี Fire หรือธาตุอื่นร่วมได้ |
| **DEX** | ความคล่องตัว | ใช้กับสกิลที่ระบุ DEX และใช้คำนวณ Initiative; ใช้ใน Check บางอย่าง เช่น การตรวจจับเป้าหมายล่องหน | ไม่ได้หมายถึง Ranged เท่านั้น มีสกิลประชิดที่ Based on DEX จำนวนมาก |
| **CON** | ความทรหด | ใช้ต้านทานสกิลจำนวนมากผ่าน CON Save และใช้กับสกิลที่ระบุ CON; CON ของจอมมารช่วยเพิ่ม Max HP ของมอนสเตอร์ | ไม่ใช่ค่าเกราะโดยตรง และไม่ได้เพิ่ม HP ทุกกรณีจากตัวเลขดิบโดยอัตโนมัติ |
| **INT** | สติปัญญา | ใช้กับ Attack Roll, Damage, DC หรือ Check ของสกิลที่ระบุ INT; พบบ่อยใน Spell | ไม่ได้แปลว่าเวทมนตร์ทุกสกิล และ Spell ไม่จำเป็นต้องใช้ INT |
| **WIS** | ปัญญาญาณ | ใช้กับสกิลที่ระบุ WIS, WIS Save และ Check ตรวจจับบางชนิด; เป็น Save ที่ฮีโร่ใช้โจมตีบ่อยตามข้อมูล Wiki รุ่นเก่า | ไม่ใช่เพียงค่าสนับสนุน สกิล WIS สามารถสร้าง Damage โดยตรงได้ |
| **CHA** | บารมี / พลังอิทธิพล | ใช้กับ Attack Roll, Damage, DC, Heal หรือเอฟเฟกต์เมื่อสกิลระบุ CHA; พบใน Psychic, Necrotic, Radiant และ Support หลายแบบ | ไม่ได้มีไว้คุยหรือควบคุมอย่างเดียว และไม่ได้กำหนดชนิด Damage |

## Key Stat คืออะไร

- Key Stat หรือ Main Stat คือ **หนึ่งในหกค่าสถานะด้านบน** ไม่ใช่ค่าสถานะลำดับที่เจ็ด
- แสดงด้วยเครื่องหมาย `*` ในหน้าข้อมูลตัวละคร
- โดยทั่วไปเป็นค่าสูงสุดของยูนิตและเป็นค่าที่สกิลโจมตีส่วนใหญ่ใช้
- การทอย Saving Throw หรือ Ability Check ด้วย Key Stat จะได้รับ **Proficiency Bonus (PB)** เพิ่ม
- PB อิง Tier: `[Tier] - 1` โดยมีค่าต่ำสุด +1; Wiki ระบุว่าจอมมารถูกนับเป็น Tier 7 สำหรับสูตรนี้
- การมี Key Stat เป็น STR ไม่ได้แปลว่ายูนิตเป็น Physical และ Key Stat เป็น INT ไม่ได้แปลว่าเป็นเวทมนตร์

## Ability Modifier — เกมไม่ได้ใช้ตัวเลข Stat ตรง ๆ

ค่าที่นำไปบวกในการต่อสู้คือ Ability Modifier:

```text
Ability Modifier = floor((STAT - 10) / 2)
```

| Stat | Modifier |
|---:|---:|
| 6–7 | -2 |
| 8–9 | -1 |
| 10–11 | +0 |
| 12–13 | +1 |
| 14–15 | +2 |
| 16–17 | +3 |
| 18–19 | +4 |
| 20–21 | +5 |

ตัวอย่าง: DEX 17 ให้ Modifier +3 ดังนั้นข้อความ `2d6 + DEX` จะใช้ `2d6 + 3` ในสถานการณ์พื้นฐาน ก่อนคิดตัวปรับอื่น

## อ่านการโจมตีอย่างไร

ตัวอย่างข้อความสมมติ:

```text
3d8 + INT Necrotic Damage
Based on INT · Ranged · Spell · INT Attack Roll
```

อ่านได้ว่า:

- ใช้ INT Modifier เพิ่ม Damage
- ใช้ INT Modifier และ PB ใน Attack Roll
- โจมตีเป้าหมายระยะไกลได้
- มีแท็ก Spell จึงอาจโต้ตอบกับเอฟเฟกต์ที่ระบุ Spell
- สร้าง Necrotic Damage ซึ่งตรวจ Resistance/Immunity/Vulnerability ของ Necrotic

## Attack Roll กับ Saving Throw

### Attack Roll

```text
1d20 + Ability Modifier + Proficiency Bonus
```

ถ้าผลรวมเท่ากับหรือสูงกว่า AC ของเป้าหมาย การโจมตีโดน ยกเว้นทอยได้ 1 ตามกฎที่ Wiki บันทึกไว้

### Saving Throw

ฝ่ายรับทอย:

```text
1d20 + Modifier ของ Stat ที่สกิลสั่งให้ Save
```

ถ้า Stat ที่ใช้ Save เป็น Key Stat ของฝ่ายรับ จะบวก PB เพิ่ม ฝ่ายโจมตีสร้างค่า DC จาก Base DC และ Modifier ที่ระบุในสกิล

ตัวอย่าง `CON Save (DC 11 + CHA)` หมายถึง:

- ฝ่ายโจมตีใช้ CHA Modifier เพิ่มค่า DC
- ฝ่ายรับใช้ CON Modifier ทอยต้าน
- CHA ของฝ่ายรับไม่มีส่วนกับการทอยนี้

## ค่าสถานะอื่นที่ต้องแยกจาก 6 Core Stats

| ค่า | หน้าที่ |
|---|---|
| **Max HP** | พลังชีวิตสูงสุด |
| **Armor Class (AC)** | เป้าหมายที่ Attack Roll ต้องทำให้ถึงหรือสูงกว่าเพื่อโจมตีโดน |
| **Initiative** | โบนัสกำหนดลำดับการลงมือ; สูตรที่ Wiki ระบุคือ `1d20 + DEX Modifier + Initiative Bonus` |
| **Proficiency Bonus (PB)** | โบนัสจาก Tier ใช้กับ Attack Roll และการทอยด้วย Key Stat ตามเงื่อนไข |

## สิ่งที่ต้องตรวจต่อในเกม v0.6.0

- คำแปลไทยทางการของ STR, DEX, CON, INT, WIS และ CHA ใน UI
- รายการ Damage Type ปัจจุบันทั้งหมดหลังการปรับระบบ Damage ใน v0.6
- สูตร Dark Lord Stat Propagation และวิธีปัดเศษ
- สกิลหรือ Trait ที่ใช้ Stat ผิดจาก Key Stat ของยูนิต
- CON/WIS Save ที่ฮีโร่ใช้บ่อยที่สุดใน Build ปัจจุบัน

## ข้อสรุปสำหรับผู้เล่น

อย่าเลือก Part เพราะเห็นเพียงว่าเป็น “เวท” หรือ “กายภาพ” ให้ดูว่า Part นั้น **Based on Stat ใด**, ยูนิตมี Modifier ของค่านั้นเท่าไร, ใช้ Attack Roll หรือ Save แบบไหน และสร้าง Damage Type อะไร จึงจะประเมินได้ถูกต้อง
