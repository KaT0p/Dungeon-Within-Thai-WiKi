# Dungeon Within Thailand Wiki — แหล่งข้อมูลและนโยบายอ้างอิง

> สถานะเอกสาร: เพิ่มการตรวจข่าวและแพตช์ v0.6.3
> วันที่ตรวจสอบ: 2026-10-19
> เวอร์ชันเกมหลักที่ติดตาม: **v0.6.3**
> Build ล่าสุดในดัชนีทางการ: **Build 205**; รายละเอียดที่ตรวจได้: **Build 204 จาก App Store**

เอกสารนี้กำหนดว่าแหล่งใดใช้ยืนยันข้อมูลประเภทใด และต้องบันทึกเครดิตอย่างไร ข้อมูลในเว็บไซต์ห้ามถูกยกระดับเป็น `ตรวจสอบแล้ว` หากไม่มีแหล่งที่เหมาะสมรองรับ

## 1. แหล่งข้อมูลระดับ A — ทางการ

ใช้เป็นหลักสำหรับเวอร์ชันเกม ระบบใหม่ การปรับสมดุล ค่าสถานะ และคำอธิบายที่ผู้พัฒนาประกาศ

| แหล่งข้อมูล | ลิงก์ | ใช้สำหรับ | หมายเหตุ |
|---|---|---|---|
| GameCoaster Release Notes (EN) | [Dungeon Within Release Note](https://gamecoaster.notion.site/Dungeon-Within-Release-Note-EN-32e4966ac9c3808bba34f56a92457d39) | Patch Notes, Build, ระบบใหม่, การแก้สมดุล | แหล่งหลักสำหรับติดตามการเปลี่ยนแปลง พบรายการ v0.6.3 Build 205; ยังอ่านรายละเอียดฉบับเต็มไม่ได้ |
| Apple App Store | [Dungeon Within](https://apps.apple.com/us/app/dungeon-within/id6761328517) | เวอร์ชันที่เผยแพร่, ประวัติเวอร์ชัน, ข้อมูลแอป | ตรวจ v0.6.3 Build 204 จาก Store สิงคโปร์ (ลิงก์ด้านล่าง) |
| Google Play | [Dungeon Within](https://play.google.com/store/apps/details?id=com.GameCoaster.DungeonWithin) | เวอร์ชัน Android, รายละเอียดเกม, ช่องทางสนับสนุน | บางประเทศหรือแคชการค้นหาอาจแสดง Patch ช้ากว่า App Store |
| GameCoaster | [เว็บไซต์ผู้พัฒนา](https://www.gamecoaster.com/) | ยืนยันผู้พัฒนาและลิงก์ทางการ | ไม่ใช่แหล่งรายละเอียดค่าสถานะรายตัว |
| GameCoaster Official Discord | [Discord Server](https://discord.com/servers/gamecoaster-official-496757856662585385) | ประกาศ ข่าว และตรวจสอบคำถามกับชุมชน | ต้องเก็บลิงก์หรือภาพหลักฐานของประกาศที่นำมาอ้างอิง |

### วิธีใช้แหล่งระดับ A

- Patch Notes ใหม่กว่ามีสิทธิ์แทนข้อมูล Patch เก่า
- หาก Release Note กับข้อมูลในเกมขัดกัน ให้ถือข้อมูลในเกม Build ปัจจุบันเป็นหลัก และบันทึกความต่างไว้
- Store ใช้ยืนยันว่าเวอร์ชันถูกปล่อยแล้ว แต่รายละเอียดเชิงตัวเลขควรตรวจในเกมอีกครั้ง
- Developer Preview คือข้อมูลล่วงหน้า ห้ามใช้เป็นข้อมูลปัจจุบันจนกว่า Patch จะเผยแพร่จริง

## 2. แหล่งข้อมูลระดับ B — ข้อมูลภายในเกม

ข้อมูลภายในเกมเป็นหลักฐานสำคัญที่สุดสำหรับค่าที่ผู้เล่นเห็นจริง แต่ต้องบันทึกบริบทให้ครบ

ข้อมูลที่ควรเก็บจากเกม:

- ชื่อภาษาอังกฤษตาม UI
- คำอธิบาย Skill, Ability, Trait, Aspect, Part และ Effect
- ค่าสถานะพื้นฐานและค่าตามระดับ
- เงื่อนไขปลดล็อก
- ค่าใช้จ่ายในการอัปเกรด
- แท็ก เผ่า ความหายาก และประเภท
- ภาพหน้าจอที่เห็นเลข Build หรือ Version

ข้อมูลกำกับที่ต้องบันทึกทุกครั้ง:

```yaml
game_version: 0.6.2
build: 199
platform: iOS | Android
language: English | Korean | Japanese | Chinese
captured_at: YYYY-MM-DD
captured_by: ชื่อผู้ตรวจสอบ
source_file: ชื่อไฟล์ภาพหรือวิดีโอ
verification_status: verified | needs-review
```

### วิธีใช้แหล่งระดับ B

- ใช้ UI ภาษาอังกฤษเป็นฐานของชื่อและคำศัพท์จนกว่าเกมจะมีภาษาไทยทางการ
- ค่าที่เปลี่ยนตาม Grade, Promotion, Memory Stage, Difficulty หรือ Buff ต้องระบุเงื่อนไข
- ภาพหน้าจอหนึ่งภาพไม่เพียงพอสำหรับสรุปสูตรคำนวณ ต้องทดสอบซ้ำหรือมีแหล่งทางการรองรับ
- ห้ามครอปภาพจนบริบทสำคัญ เช่น ระดับหรือเงื่อนไข หายไปจากหลักฐานต้นฉบับ

## 3. แหล่งข้อมูลระดับ C — Wiki ชุมชนภาษาอังกฤษ

| แหล่งข้อมูล | ลิงก์ | สถานะ |
|---|---|---|
| Dungeon Within Wiki | [Main Page](https://dungeonwithin.miraheze.org/wiki/Main_Page) | Wiki ชุมชน ไม่เกี่ยวข้องกับ GameCoaster |

หน้าหลักแบ่งข้อมูลออกเป็นหมวดต่อไปนี้:

- Units: Dark Lords, Monsters, Heroes
- Main Menu: Architect's Workshop, Ark of Memory, Run Options, Patch Notes
- Gameplay: Facilities, Status Effects, Parts, Relics
- New Players: Getting Started, Tips and Tricks

### สิทธิ์การใช้ข้อความ

หน้า Wiki ระบุว่าเนื้อหาอยู่ภายใต้ [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) หรือ **CC BY-SA 4.0** เว้นแต่จะมีการระบุเป็นอย่างอื่น

หากแปลหรือดัดแปลงข้อความจาก Wiki ต้นทาง ต้อง:

1. ให้เครดิต Dungeon Within Wiki และผู้เขียนที่เกี่ยวข้อง
2. ใส่ลิงก์ไปยังหน้าต้นฉบับและประวัติการแก้ไขของหน้านั้น
3. ใส่ลิงก์สัญญาอนุญาต CC BY-SA 4.0
4. ระบุว่าเป็นคำแปลหรือมีการดัดแปลง
5. เผยแพร่ส่วนดัดแปลงภายใต้สัญญาอนุญาตที่เข้ากันได้ตามเงื่อนไข ShareAlike
6. ตรวจหมายเหตุเฉพาะหน้าและเฉพาะไฟล์ เพราะภาพอาจไม่ได้ใช้สิทธิ์เดียวกับข้อความ

### นโยบายที่เลือกสำหรับ Wiki ไทย

- ใช้ Wiki อังกฤษเป็นดัชนีและแหล่งตรวจสอบ ไม่คัดลอกทั้งหน้าโดยอัตโนมัติ
- เขียนคำอธิบายภาษาไทยใหม่จากข้อมูลที่ตรวจสอบแล้วเมื่อทำได้
- หากแปลข้อความโดยตรง ให้มีหัวข้อ `แหล่งที่มาและสิทธิ์การใช้` ในหน้าบทความ
- เก็บ URL ต้นฉบับ วันที่เข้าถึง และ Revision ID หากหาได้
- ภาพจากเกมถือเป็นทรัพย์สินของ GameCoaster แม้ถูกอัปโหลดบน Wiki ชุมชน ต้องตรวจหน้าข้อมูลไฟล์ก่อนนำมาใช้

## 4. แหล่งข้อมูลระดับ D — ชุมชนและการทดสอบผู้เล่น

| แหล่งข้อมูล | ลิงก์ | ใช้สำหรับ |
|---|---|---|
| r/Dungeon_Within | [Reddit Community](https://www.reddit.com/r/Dungeon_Within/) | เทคนิค, ปัญหาที่พบ, Build, การทดสอบของผู้เล่น |
| Dungeon Within Wiki announcement | [โพสต์เปิดตัว Wiki](https://www.reddit.com/r/Dungeon_Within/comments/1ts3g1n/dungeon_within_wiki_out_now_desperate_need_of/) | บริบทและสถานะเริ่มต้นของ Wiki อังกฤษ |

กฎการใช้ข้อมูลชุมชน:

- ห้ามใช้ความเห็นของผู้เล่นเป็นข้อเท็จจริงโดยไม่มีการทดสอบหรือแหล่งอื่นยืนยัน
- Build และ Tier list ต้องระบุชื่อผู้เขียน วันที่ และเวอร์ชัน
- หากอ้างผลการทดลอง ต้องบันทึกเงื่อนไขและจำนวนครั้ง
- คำแนะนำที่ยังไม่ได้ตรวจสอบใช้ป้าย `คำแนะนำจากชุมชน`
- โพสต์ที่คัดลอกประกาศผู้พัฒนาต้องตามไปอ้างต้นฉบับจาก GameCoaster เมื่อมีลิงก์

## 5. ลำดับความน่าเชื่อถือ

เมื่อแหล่งข้อมูลให้คำตอบไม่ตรงกัน ให้ตัดสินตามลำดับนี้:

1. ข้อมูลที่สังเกตได้ในเกม Build ปัจจุบัน ภายใต้เงื่อนไขที่บันทึกครบ
2. Release Note หรือประกาศจาก GameCoaster ที่ตรงกับ Build ปัจจุบัน
3. App Store และ Google Play
4. Dungeon Within Wiki ที่มีแหล่งอ้างอิงและ Revision ชัดเจน
5. การทดสอบซ้ำโดยผู้เล่นหลายคน
6. โพสต์หรือความคิดเห็นจากชุมชน

ข้อยกเว้น: หากเป็นคำถามว่า “ผู้พัฒนาตั้งใจให้ระบบทำงานอย่างไร” ให้ประกาศของผู้พัฒนาอยู่เหนือผลสังเกต แต่ต้องบันทึกด้วยว่าพฤติกรรมจริงในเกมต่างจากประกาศอย่างไร

## 6. ความเสี่ยงของข้อมูลล้าสมัย

Wiki อังกฤษเริ่มต้นในช่วงที่เกมยังเปลี่ยนแปลงรวดเร็ว และข้อมูลหลายหน้าเขียนก่อนชุดอัปเดต v0.6.0–0.6.2 ดังนั้นข้อมูลต่อไปนี้ต้องถือว่า `ต้องตรวจสอบ` จนกว่าจะเทียบกับ Build 199:

- Dark Lord Promotion, Ascension และ Aspect ซึ่งเพิ่มหรือปรับใน v0.6.0
- Ethereal/Intangible Parts และ Repeat Training
- ระบบค่าสถานะและ Dice Damage ที่ถูกปรับใหม่
- Damage Type ที่ลดจาก 13 ประเภทเหลือ 9 ประเภท
- Effect ที่เคยอิง Turn และเปลี่ยนเป็นระยะเวลาเฉพาะตัว
- Facility Relocation และ Facility Combination
- Ability, Facility, Relic และ Trial ที่ถูกปรับสมดุล
- Monster Promotion, Awakening Stage และ Variant Research ที่ปรับใน v0.6.2
- Memento Mori War Room, Tactical Map, Facility Repeat Modification และ Ascension and Curses Campaign ที่เพิ่มใน v0.6.1
- ข้อมูลก่อน v0.5.0 ซึ่งอาจใช้กับ Save หรือระบบเก่าที่ไม่เข้ากัน
- Build และ Tier list ที่ไม่ได้ระบุเวอร์ชัน

## 7. แบบบันทึกแหล่งอ้างอิงต่อหนึ่งรายการ

```yaml
id: monster-example
topic: Monster
field: ability_description
value: ข้อมูลที่บันทึก
source_type: in-game | official-note | store | community-wiki | community-test
source_url: https://...
source_revision: revision-id-if-available
game_version: 0.6.2
build: 199
accessed_at: 2026-09-09
language: English
license: proprietary | CC-BY-SA-4.0 | unknown
status: verified | needs-review | obsolete
notes: บริบทหรือข้อขัดแย้งที่พบ
```

## 8. เกณฑ์ปิดงาน Phase 1.1

- [x] มีรายการแหล่งข้อมูลทางการ
- [x] มีรายการแหล่งข้อมูลชุมชน
- [x] มีลำดับความน่าเชื่อถือ
- [x] มีนโยบายจัดการข้อมูลขัดแย้ง
- [x] ตรวจสัญญาอนุญาตข้อความของ Wiki ต้นทาง
- [x] แยกสิทธิ์ข้อความออกจากสิทธิ์ภาพ
- [x] มีรายการข้อมูลที่เสี่ยงล้าสมัยถึง v0.6.2
- [x] มี Template สำหรับบันทึกแหล่งอ้างอิง

## หมายเหตุการตรวจสอบเดิม — 2026-09-09

- App Store และ Google Play แสดง Dungeon Within เวอร์ชัน 0.6.2
- Release Note ทางการล่าสุดคือ v0.6.2 Build 199
- Release Note ฉบับเต็มระบุว่า Trial of Assault แทน Trial of Invincibility แต่ข้อความสรุปบน Store ระบุ Forgotten Trial จึงติด `needs_review` ไว้จนกว่าจะตรวจในเกม
- หน้าแรกของ Wiki อังกฤษแก้ไขล่าสุดวันที่ 24 กรกฎาคม 2026
- Wiki อังกฤษระบุชัดเจนว่าเป็น Community Wiki และไม่เกี่ยวข้องกับ GameCoaster
- ข้อความบน Wiki อังกฤษใช้ CC BY-SA 4.0 เว้นแต่ระบุเป็นอย่างอื่น
- ยังไม่ได้ตรวจสิทธิ์ของภาพแต่ละไฟล์ จึงยังไม่นำภาพเหล่านั้นมาใช้ในเว็บไทย

## ผลตรวจ 2026-10-19

App Store ระบุ v0.6.3 Build 204 วันที่ 15 กันยายน 2026 ส่วนดัชนี Release Note มี Build 205 แต่ยังตรวจรายละเอียดฉบับเต็มไม่ได้ เนื้อหานี้จึงสรุปเฉพาะ Build 204 และยังไม่ได้ตรวจซ้ำในเกม

- [App Store สิงคโปร์](https://apps.apple.com/sg/app/dungeon-within/id6761328517?platform=watch)
- [ดัชนีประกาศทางการ](https://gamecoaster.notion.site/Dungeon-Within-Release-Note-EN-32e4966ac9c3808bba34f56a92457d39)
- [ข่าวเตรียมอัปเดต v0.7.0](https://gamecoaster.notion.site/Dev-Note-0-7-0-Update-Preview-3fb4966ac9c380109466e7cc2ebcd2b5) เป็นข้อมูลระหว่างพัฒนา ไม่ใช้แทนข้อมูลปัจจุบัน
- ข้อมูลรายตัวและตัวเลขเดิมยังคงวันที่ เวอร์ชัน และสถานะตรวจสอบเดิม จนกว่าจะมีหลักฐานใหม่
