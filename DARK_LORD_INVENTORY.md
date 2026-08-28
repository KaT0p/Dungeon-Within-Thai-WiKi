# Dungeon Within Thailand Wiki — บัญชีจอมมาร v1

> สถานะ: สำรวจรายชื่อและช่องข้อมูลรอบแรกเสร็จแล้ว  
> วันที่ตรวจสอบ: 2026-08-27  
> เวอร์ชันเป้าหมาย: v0.6.0  
> จำนวนจอมมารที่พบ: **3 ตัว**  
> ระดับการยืนยัน: Wiki ชุมชน + Release Note; ยังไม่ได้ตรวจจากเกมบนอุปกรณ์

เอกสารนี้เป็นบัญชีจอมมารที่พบใน Dungeon Within พร้อมข้อมูลตั้งต้นจาก Wiki อังกฤษ ข้อมูลเชิงตัวเลขยังไม่ถูกย้ายเข้าเว็บไซต์ เพราะ v0.6.0 ปรับระบบ Ability Score, Dice Damage, Promotion, Ascension และ Aspect

## 1. รายชื่อจอมมาร

| ID ที่วางแผนใช้ | ชื่ออังกฤษ | ปลดล็อก | แกนกลไก | Key Stat | สถานะข้อมูล |
|---|---|---|---|---|---|
| `dark-lord-desponia` | Desponia | เริ่มเกม | Erosion, Psychic/Necrotic, Fear | WIS | หน้าต้นทางอัปเดต 18 ส.ค. 2026 แต่ยังมีช่อง `???` |
| `dark-lord-aura` | Aura | เริ่มเกม | Bloom, Full Bloom, Healing, Radiant | DEX | หน้าต้นทางอัปเดต 29 ก.ค. 2026 ก่อน v0.6.0 |
| `dark-lord-rhea` | Rhea | Architect's Workshop | Valor, แนวหน้า, Lightning | STR | หน้าต้นทางอัปเดต 29 ก.ค. 2026 ก่อน v0.6.0 |

### ข้อสรุปเรื่องจำนวน

- หน้า Dark Lords ของ Wiki อังกฤษระบุสามตัว: Desponia, Aura และ Rhea
- หน้ารวมแก้ไขล่าสุดวันที่ 17 สิงหาคม 2026
- Release Note v0.6.0 ไม่ได้ระบุการเพิ่มจอมมารตัวใหม่
- จึงใช้จำนวน **3 ตัว** เป็นบัญชีตั้งต้น แต่ยังต้องตรวจหน้าเลือกจอมมารในเกมเพื่อยืนยันขั้นสุดท้าย

## 2. บทบาทของจอมมารในระบบเกม

ข้อมูลที่พบจากหน้ารวม:

- จอมมารเป็นแกนกลางของดันเจี้ยน
- หากจอมมารถูกกำจัด Run จะจบ
- จอมมารโจมตีและใช้สกิลบางส่วนอัตโนมัติ
- ผู้เล่นเลือกจังหวะใช้ Authority ได้ หรือปลดล็อก Auto Authority ภายหลัง
- จอมมารอยู่ภายในห้องของตนและไม่สามารถย้ายออกนอกห้องได้
- จอมมารมี Stat, Part, Trait, Authority และ Relic ที่เปลี่ยนภายใน Run
- Wiki เดิมระบุว่าการเปลี่ยนแปลงระหว่าง Run ไม่ถูกเก็บทั้งหมดไป Run ถัดไป แต่ v0.6.0 เพิ่มระบบความก้าวหน้าใหม่ จึงต้องตรวจข้อยกเว้น
- Dominance Limit ของจอมมารจำกัดต้นทุนรวมของมอนสเตอร์ Part, Trait และ Facility ที่ถูกนำไปใช้

## 3. ตารางเปรียบเทียบค่าสถานะตั้งต้น

ค่าด้านล่างถอดจาก Wiki อังกฤษ ไม่ใช่ค่าที่ตรวจจากเกม Build ล่าสุด

| Dark Lord | STR | DEX | CON | INT | WIS | CHA | Max HP | AC | Initiative |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Desponia | 12 | 10 | 16 | 14 | 18 | 16 | 110 | 10 | 0 |
| Aura | 10 | 18 | 14 | 10 | 16 | 14 | 80 | 10 | 5 |
| Rhea | 18 | 12 | 18 | 6 | 12 | 12 | 105 | 10 | 0 |

สถานะทั้งตาราง: `needs_review`

เหตุผล:

- v0.6.0 ปรับ Ability Score และ Dice Damage
- หน้าของ Aura และ Rhea แก้ไขก่อน v0.6.0
- Wiki ใช้คำ Tier, Rank และ Key Stat จากระบบหลายเวอร์ชัน
- สูตร Stat Propagation ของจอมมารไปยังมอนสเตอร์อาจเปลี่ยน

## 4. Desponia

### 4.1 ข้อมูลพื้นฐาน

| ฟิลด์ | ข้อมูลจาก Wiki | สถานะ |
|---|---|---|
| ชื่อ | Desponia | พบในหน้ารวมและหน้ารายตัว |
| การปลดล็อก | ปลดล็อกตั้งแต่เริ่มเกม | ต้องตรวจในเกม |
| คำโปรย | A lord of death who drags foes into the abyss | คงอังกฤษเมื่ออ้างต้นฉบับ |
| แกนสถานะ | Erosion | ต้องตรวจค่าปัจจุบัน |
| Damage ที่เชื่อมโยง | Necrotic และ Psychic | รายการ Damage Type ต้องตรวจ v0.6.0 |
| Key Stat | WIS | ต้องตรวจในเกม |
| ภูมิคุ้มกันพื้นฐาน | Charmed | ต้องตรวจในเกม |
| สไตล์การโจมตี | Spell, Melee และ Ranged ตามแต่ละ Part | ต้องตรวจแท็ก |

### 4.2 Skill และ Part ที่พบ

| Slot | ชื่อ | ประเภท | สิ่งที่ทำโดยสรุป | สถานะ |
|---|---|---|---|---|
| A | Chill Touch | Base Attack | Necrotic Damage และ Heal Block | ต้องตรวจค่า |
| B | Sovereign's Intimidation | Innate Trait | ใส่ Erosion ให้ศัตรูเมื่อเริ่มการต่อสู้ | ต้องตรวจเงื่อนไข |
| M | Scepter of the Abyss | Main Part | Psychic Damage ที่เพิ่มตาม Erosion | หน้าแสดง Part 0.6 แต่ต้องตรวจในเกม |
| S1 | Evil Eye of Insight | Sub Part 1 | ตอบสนองเมื่อศัตรูโจมตีพลาดและใช้ Erosion | หน้าแสดง Part 0.3; เสี่ยงล้าสมัย |
| S2 | Shadow Veil | Sub Part 2 | ต้านการโจมตีระยะไกลและใส่ Erosion เมื่อถูกโจมตี | หน้าแสดง Part 0.3; เสี่ยงล้าสมัย |

### 4.3 Authority ที่พบ

| ประเภท | ชื่อ |
|---|---|
| Basic | Nightmare Injection |
| Basic | Forced Execution |
| Basic | Hand of the Void |
| Utility | Abyssal Fog |
| Utility | Bond of Agony |
| Special | Domain Intrusion |
| Special | Touch of the Dead |
| Ultimate | Black Sun |
| Ultimate | Psychic Breakdown |

ข้อมูล Cooldown และสูตร Damage ใน Wiki มี `???` หลายจุด และใช้ทั้ง Turn, Battle และ Day จึงยังไม่บันทึกเป็นค่าปัจจุบัน

### 4.4 Relic เฉพาะธีมที่พบ

- Ominous Fog
- Skull of Amplification
- Echo of Agony
- Plague Bomb

### 4.5 จุดเด่นและข้อจำกัดจากข้อมูลชุมชน

สถานะส่วนนี้: `community_claim`

- เน้นสะสม Erosion แล้วสร้าง Psychic/Necrotic Damage หรือ Fear
- WIS และ CON สูงตามตารางเก่า
- INT สูงกว่าจอมมารอื่นในชุดข้อมูลเก่า จึงอาจสัมพันธ์กับกับดัก
- DEX ต่ำกว่า Aura จึงอาจลงมือช้ากว่า
- ยังไม่ควรสรุปมอนสเตอร์ที่เข้าคู่ดีที่สุดจนกว่าจะมีฐานข้อมูล Monster v0.6.0

## 5. Aura

### 5.1 ข้อมูลพื้นฐาน

| ฟิลด์ | ข้อมูลจาก Wiki | สถานะ |
|---|---|---|
| ชื่อ | Aura | พบในหน้ารวมและหน้ารายตัว |
| การปลดล็อก | ปลดล็อกตั้งแต่เริ่มเกม | ต้องตรวจในเกม |
| คำโปรย | A guardian of spirits who nurtures life | คงอังกฤษเมื่ออ้างต้นฉบับ |
| แกนสถานะ | Bloom และ Full Bloom | ต้องตรวจค่าปัจจุบัน |
| Damage ที่เชื่อมโยง | Piercing และ Radiant | รายการ Damage Type ต้องตรวจ v0.6.0 |
| Key Stat | DEX | ต้องตรวจในเกม |
| ภูมิคุ้มกันพื้นฐาน | ไม่มีตาม Wiki | ต้องตรวจในเกม |
| สไตล์การโจมตี | Ranged และ Spell | ต้องตรวจแท็ก |

### 5.2 Skill และ Part ที่พบ

| Slot | ชื่อ | ประเภท | สิ่งที่ทำโดยสรุป | สถานะ |
|---|---|---|---|---|
| A | Enhanced Shot (T3) | Base Attack | Piercing Damage ระยะไกล | ชื่อมี `(T3)` ต้องตรวจว่าหมายถึงอะไร |
| B | Wind's Guidance | Innate Trait | ให้ Bloom แก่ฝ่ายเราเมื่อเริ่มการต่อสู้ | ต้องตรวจจำนวน Stack |
| M | Yggdrasil Bow | Main Part | Piercing/Radiant Damage และ Faerie Fire | หน้าแสดง Part 0.6 แต่ต้องตรวจในเกม |
| S1 | Whisper of the Forest | Sub Part 1 | เมื่อ Bloom ฟื้น HP จะได้รับ Photosynthesis | หน้าแสดง Part 0.3; เสี่ยงล้าสมัย |
| S2 | Sylph's Boots | Sub Part 2 | เมื่อเข้าสู่ Full Bloom จะทำให้ศัตรู Blinded | หน้าแสดง Part 0.3; เสี่ยงล้าสมัย |

### 5.3 Authority ที่พบ

| ประเภท | ชื่อ |
|---|---|
| Basic | Healing Wind |
| Basic | Grasping Vine |
| Basic | Sunbeam |
| Utility | Rapid Bloom |
| Utility | Healing Rain |
| Special | Garden Defense |
| Special | Nature's Cycle |
| Ultimate | Dawn of Eden |
| Ultimate | Solar Storm |

### 5.4 Relic เฉพาะธีมที่พบ

- Morning Dew
- Nutrient Injection
- Co-existing Garden
- Eternal Sun

### 5.5 จุดเด่นและข้อจำกัดจากข้อมูลชุมชน

สถานะส่วนนี้: `community_claim`

- เน้นการฟื้นฟู Bloom และ Full Bloom
- Full Bloom เชื่อมกับการโจมตีระยะไกลและ Radiant Damage ตามข้อมูลเก่า
- DEX สูงและ Initiative สูงกว่าสองตัวอื่นในตารางเก่า
- INT ต่ำ จึงอาจไม่เหมาะกับกับดักที่อิง INT
- ยังไม่ควรระบุ Build หรือ Tier จนกว่าจะตรวจกลไก Bloom หลัง v0.6.0

## 6. Rhea

### 6.1 ข้อมูลพื้นฐาน

| ฟิลด์ | ข้อมูลจาก Wiki | สถานะ |
|---|---|---|
| ชื่อ | Rhea | พบในหน้ารวมและหน้ารายตัว |
| การปลดล็อก | Architect's Workshop หลังปลด Dark Lord's Quarters | ต้องตรวจราคาและลำดับในเกม |
| คำโปรย | An empress of beasts who leads with ferocity | คงอังกฤษเมื่ออ้างต้นฉบับ |
| แกนสถานะ | Valor | ต้องตรวจค่าปัจจุบัน |
| Damage ที่เชื่อมโยง | Slashing และ Lightning ผ่านระบบเสริม | รายการ Damage Type ต้องตรวจ v0.6.0 |
| Key Stat | STR | ต้องตรวจในเกม |
| ภูมิคุ้มกันพื้นฐาน | Fear | ต้องตรวจในเกม |
| สไตล์การโจมตี | Melee และการสนับสนุนแถวหน้า | ต้องตรวจแท็ก |

### 6.2 Skill และ Part ที่พบ

| Slot | ชื่อ | ประเภท | สิ่งที่ทำโดยสรุป | สถานะ |
|---|---|---|---|---|
| A | Basic Slash | Base Attack | Slashing Damage ประชิด | ต้องตรวจค่า |
| B | Lion King's Heart | Innate Trait | ให้ Valor เมื่อเริ่ม Invasion และ Combat | ต้องตรวจจำนวน Stack |
| M | Golden Zweihander | Main Part | Slashing Damage และให้ Valor แก่ฝ่ายเรา | หน้าแสดง Part 0.6 แต่ต้องตรวจในเกม |
| S1 | Armor of Valor | Sub Part 1 | ได้ Valor เมื่อรับความเสียหายและเพิ่มความได้เปรียบ | หน้าแสดง Part 0.3; เสี่ยงล้าสมัย |
| S2 | Command Aura | Sub Part 2 | ให้ Valor แถวหน้าและฟื้น HP เมื่อเต็ม | หน้าแสดง Part 0.3; เสี่ยงล้าสมัย |

### 6.3 Authority ที่พบ

| ประเภท | ชื่อ |
|---|---|
| Basic | Judgement |
| Basic | Thunderous Command |
| Basic | Overload |
| Utility | Unyielding Command |
| Utility | Current Shield |
| Special | King's Audience |
| Special | Death Lightning |
| Ultimate | Lion King's Roar |
| Ultimate | Ragnarok |

หน้า Wiki สะกด Lightning ผิดบางตำแหน่งและมีสูตร `???` จึงต้องยึดชื่อจาก UI ก่อนนำเข้าฐานข้อมูล

### 6.4 Relic เฉพาะธีมที่พบ

- Horn of Valor
- Endless Fervor
- Sword of Judgement
- Lion King's Crown

### 6.5 จุดเด่นและข้อจำกัดจากข้อมูลชุมชน

สถานะส่วนนี้: `community_claim`

- เน้น Valor, Temporary HP และการสนับสนุนแถวหน้า
- STR และ CON สูงที่สุดในตารางเก่า
- INT ต่ำมากในตารางเก่า จึงอาจมีผลเสียต่อสิ่งที่อิง INT
- Authority เชื่อมกับ Lightning, Stun, Prone และ Valor
- ยังไม่ควรระบุ Build เต็มจนกว่าจะตรวจ Stat Propagation และ Damage Type v0.6.0

## 7. ตารางเปรียบเทียบแกนกลไก

| หัวข้อ | Desponia | Aura | Rhea |
|---|---|---|---|
| แกนสถานะ | Erosion | Bloom / Full Bloom | Valor |
| แนวทางหลักจาก Wiki | สะสมสถานะและสร้าง Psychic/Necrotic | ฟื้นฟูและเสริม Ranged/Radiant | ป้องกันแนวหน้าและเสริมการโจมตี |
| Key Stat เดิม | WIS | DEX | STR |
| จุดเด่นค่าสถานะเดิม | WIS, CON, INT | DEX, WIS | STR, CON |
| จุดอ่อนเดิม | DEX | INT | INT ต่ำมาก |
| ภูมิคุ้มกันพื้นฐานเดิม | Charmed | ไม่มี | Fear |
| จำนวน Authority ที่พบ | 9 | 9 | 9 |
| Relic เฉพาะธีมที่พบ | 4 | 4 | 4 |

ตารางนี้ใช้เพื่อกำหนดช่องข้อมูลและงานวิจัย ไม่ใช่ Tier list

## 8. Promotion, Ascension และ Aspect

### สิ่งที่ยืนยันจาก Release Note v0.6.0

- เพิ่ม Dark Lord Promotion
- เพิ่ม Dark Lord Ascension
- เพิ่มระบบ Aspect
- เพิ่ม Architect's Workshop feature ที่เกี่ยวข้อง
- ปรับ Ability Score และ Dice Damage ซึ่งอาจกระทบค่าจอมมารทั้งหมด

### สิ่งที่หน้ารายตัวของ Wiki ยังไม่มี

- ตาราง Promotion ของ Desponia
- ตาราง Promotion ของ Aura
- ตาราง Promotion ของ Rhea
- รายชื่อ Ascension Option ของแต่ละตัว
- รายชื่อ Aspect และระดับของแต่ละ Aspect
- ค่าใช้จ่ายและเงื่อนไขปลดล็อก
- สิ่งที่คงอยู่ข้าม Run
- ความสัมพันธ์กับ Vessel of the Sovereign

สถานะหัวข้อนี้: `needs_in_game_capture`

## 9. Dominance และความสัมพันธ์กับจอมมาร

หน้า Dominance ของ Wiki ระบุว่า:

- Max Dominance เป็นขีดจำกัดต้นทุนรวมของสิ่งที่ Deploy ในดันเจี้ยน
- Monster, Part, Trait และ Facility เพิ่ม Occupied Dominance
- การเกินขีดจำกัดทำให้ HP, Durability และ Roll ลดลง
- Max Dominance เพิ่มได้จาก Ascension Reward, Trait, Relic และ Dark Lord's Quarters
- Trial บางชนิดเพิ่ม Dominance Cost

สูตร Penalty และตาราง Cost ในหน้า Wiki ยังไม่ควรใช้ในเครื่องคำนวณจนกว่าจะตรวจ v0.6.0

## 10. สถานะภาพและสื่อ

| รายการ | พบใน Wiki | ตรวจสิทธิ์ไฟล์ | นำไปใช้ในเว็บไทยได้หรือยัง |
|---|---:|---:|---:|
| ภาพ Desponia | พบ | ยัง | ไม่ได้ |
| ภาพ Aura | พบ | ยัง | ไม่ได้ |
| ภาพ Rhea | พบ | ยัง | ไม่ได้ |
| ไอคอน Part และ Authority | พบเป็นบางส่วน | ยัง | ไม่ได้ |

กฎ:

- ภาพเกมเป็นทรัพย์สินของ GameCoaster
- CC BY-SA ของข้อความบน Wiki ไม่ได้ทำให้ภาพเกมเปลี่ยนเป็น CC โดยอัตโนมัติ
- ก่อนใช้ภาพต้องเปิดหน้าข้อมูลไฟล์ บันทึก Source URL ผู้สร้าง และข้อความสิทธิ์เฉพาะไฟล์

## 11. Build และ Synergy

### สิ่งที่บอกได้ในตอนนี้

- Desponia ต้องตรวจองค์ประกอบที่สร้างหรือใช้ Erosion
- Aura ต้องตรวจองค์ประกอบที่สร้าง Bloom, Full Bloom และ Radiant interaction
- Rhea ต้องตรวจองค์ประกอบที่ใช้ Valor, Front Row และ Lightning interaction

### สิ่งที่ยังห้ามสรุป

- มอนสเตอร์ที่ดีที่สุดของแต่ละจอมมาร
- Facility ที่ดีที่สุด
- Part ที่ดีที่สุด
- Tier ranking ระหว่างจอมมาร
- Build สำหรับ Trial สูง
- สูตร Trap ที่ได้ประโยชน์จาก Stat Propagation

เหตุผล: ยังไม่มีฐานข้อมูล Monster/Facility v0.6.0 และสูตร Stat/Damage ยังไม่ผ่านการตรวจ

## 12. รายการข้อมูลที่ต้องเก็บจากเกม

### ข้อมูลร่วมทั้งสามตัว

- [ ] ภาพหน้าเลือกจอมมารและจำนวนตัวทั้งหมด
- [ ] เลข Version และ Build จากหน้าตั้งค่า
- [ ] Base Stat จาก Dark Lord's Quarters
- [ ] Base Attack และ Innate Trait
- [ ] Main Part, Sub Part 1 และ Sub Part 2
- [ ] Authority ทั้ง 9 รายการ พร้อมประเภทและ Cooldown ปัจจุบัน
- [ ] Promotion ทุกขั้น
- [ ] Ascension Option ทุกแบบ
- [ ] Aspect ทุกแบบและทุกระดับ
- [ ] Unlock Requirement และค่าใช้จ่าย
- [ ] Dominance เริ่มต้นและการเพิ่มค่า
- [ ] สิ่งที่คงอยู่เมื่อจบ Run

### จุดตรวจเฉพาะ Desponia

- [ ] คำอธิบาย Erosion ปัจจุบัน
- [ ] Heal Block, Fear และ Concealment
- [ ] สูตร Authority ที่ Wiki แสดง `???`

### จุดตรวจเฉพาะ Aura

- [ ] คำอธิบาย Bloom และ Full Bloom ปัจจุบัน
- [ ] ความหมายของ `(T3)` ใน Enhanced Shot
- [ ] Interaction ของ Photosynthesis และ Faerie Fire

### จุดตรวจเฉพาะ Rhea

- [ ] คำอธิบาย Valor ปัจจุบัน
- [ ] ชื่อและการสะกด Authority จาก UI
- [ ] Interaction ของ Front Row, Temporary HP และ Lightning

## 13. แหล่งอ้างอิง

### ทางการ

- [Dungeon Within Release Note (EN)](https://gamecoaster.notion.site/Dungeon-Within-Release-Note-EN-32e4966ac9c3808bba34f56a92457d39)
- [Dungeon Within — App Store](https://apps.apple.com/us/app/dungeon-within/id6761328517)

### Wiki ชุมชน

- [Dark Lords](https://dungeonwithin.miraheze.org/wiki/Dark_Lords)
- [Desponia](https://dungeonwithin.miraheze.org/wiki/Desponia)
- [Aura](https://dungeonwithin.miraheze.org/wiki/Aura)
- [Rhea](https://dungeonwithin.miraheze.org/wiki/Rhea)
- [Dominance](https://dungeonwithin.miraheze.org/wiki/Dominance)

ข้อความที่ดัดแปลงจาก Wiki อังกฤษต้องปฏิบัติตาม CC BY-SA 4.0 ตาม [SOURCES.md](./SOURCES.md)

## 14. เกณฑ์ปิดงาน Phase 2.2

- [x] มีบัญชีรายชื่อจอมมารทั้งหมดที่พบ
- [x] มีเงื่อนไขปลดล็อกเบื้องต้น
- [x] มีตารางค่าสถานะจากแหล่งต้นทางพร้อมป้าย `needs_review`
- [x] มีรายชื่อ Skill และ Part ของทั้งสามตัว
- [x] มีรายชื่อ Authority ของทั้งสามตัว
- [x] มีรายชื่อ Relic เฉพาะธีมของทั้งสามตัว
- [x] แยกข้อมูลข้อเท็จจริงออกจากข้อสังเกตชุมชน
- [x] ระบุช่องว่าง Promotion, Ascension และ Aspect
- [x] ตรวจพบภาพ แต่ยังไม่อนุญาตให้นำไปเผยแพร่
- [x] ประเมินแล้วว่ายังไม่พร้อมสร้าง Build หรือ Tier list
- [x] มีรายการข้อมูลที่ต้องเก็บจากเกมจริง

