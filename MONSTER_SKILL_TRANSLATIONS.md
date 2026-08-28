# คำแปลสกิลมอนสเตอร์ — Tier 1–3 และชุดต้นแบบ

> เกมเป้าหมาย: v0.6.0  
> ตรวจต้นทาง: 28 ส.ค. 2026  
> สถานะ: **Phase 2.3c เสร็จแล้ว** — แปลชื่อ 130 รายการจากมอนสเตอร์ Tier 1–3 ครบ 26 ตัว

## หลักการอ่าน

- `A` = การโจมตีพื้นฐาน (Basic Attack)
- `B` = คุณลักษณะติดตัว (Innate Trait)
- `M` = ชิ้นส่วนหลัก (Main Part)
- `S1`, `S2` = ชิ้นส่วนเสริม (Sub Part)
- ชื่อไทยเป็นคำแปลแฟนเมด ส่วนชื่ออังกฤษคงไว้เพื่อค้นในเกมและ Wiki ต้นทาง

## สรุป Phase 2.3c

- Tier 1: 9 ตัว · 45 ชื่อ
- Tier 2: 9 ตัว · 45 ชื่อ
- Tier 3: 8 ตัว · 40 ชื่อ
- รวม: **26 ตัว · 130 ชื่อ**
- ขอบเขตของรอบนี้คือชื่อ `A`, `B`, `M`, `S1`, `S2` เท่านั้น ตัวเลข สูตร และคำอธิบายเอฟเฟกต์ยังคงเป็น `needs_review`
- ชุดข้อมูลที่เว็บไซต์ใช้: [`app/monster-skills-data.ts`](./app/monster-skills-data.ts)
- หน้าค้นหา: `/wiki/monster-skills`

## Tier 1

| Monster | A | B | M | S1 | S2 |
|---|---|---|---|---|---|
| Ratatoskr | Quick Slash — ฟันฉับไว | Nimble Movement — การเคลื่อนไหวคล่องแคล่ว | Taunting Acorn — ลูกโอ๊กยั่วยุ | Eye of Yggdrasil — ดวงตาแห่งอิกดราซิล | Swift Tail — หางว่องไว |
| Selkie | Mind Blast — ระเบิดพลังจิต | Aquatic Adaptation — การปรับตัวใต้น้ำ | Song of the Winter Sea — บทเพลงแห่งทะเลเหมันต์ | Wave's Grace — พรแห่งเกลียวคลื่น | Healing Mist — หมอกเยียวยา |
| Lesser Water Elemental | Ice Arrow — ศรน้ำแข็ง | Water Form — ร่างวารี | Wave Binding Arm — แขนพันธนาการคลื่น | Watery Skin — ผิวกายวารี | Healing Droplet — หยดน้ำเยียวยา |
| Lesser Fire Elemental | Flame Thrust — แทงเพลิง | Flame Form — ร่างเพลิง | Scorching Skewer — เสียบทะลวงแผดเผา | Burning Heart — หัวใจลุกไหม้ | Flame Shield — โล่เพลิง |
| Lesser Air Elemental | Basic Shot — ยิงพื้นฐาน | Air Form — ร่างวายุ | Gust Core — แก่นลมกรรโชก | Blurred Form — ร่างพร่าเลือน | Electro Shocker — เครื่องช็อตไฟฟ้า |
| Slime | Acid Splash — สาดกรด | Amorphous Body — ร่างไร้รูป | Corrosive Vent — ช่องระบายไอกรด | Viscous Membrane — เยื่อเหนียวหนืด | Unstable Core — แก่นไม่เสถียร |
| Zombie | Heavy Strike — โจมตีหนัก | Undead Fortitude — ความทรหดแห่งอันเดด | Rotting Grasp — กรงเล็บเน่าเปื่อย | Plague Sac — ถุงโรคระบาด | Dulled Nerves — ประสาทด้านชา |
| Skeleton | Quick Slash — ฟันฉับไว | Bone Structure — โครงกระดูก | Skeleton Shield Arm — แขนโล่โครงกระดูก | Hollow Skull — กะโหลกกลวง | Rattling Legs — ขากระดูกสั่นกราว |
| Skeleton Mage | Fire Arrow — ศรเพลิง | Magic Resistance — ต้านทานเวทมนตร์ | Chilling Touch Arm — แขนสัมผัสเย็นเยียบ | Shade Robe — เสื้อคลุมเงา | Mana Repulsion Bone — กระดูกผลักไสมานา |

## Tier 2

| Monster | A | B | M | S1 | S2 |
|---|---|---|---|---|---|
| Harpy | Basic Shot(T2) — ยิงพื้นฐาน (T2) | Harpy’s Wings — ปีกฮาร์ปี | Steelfeather Gust — ลมกรรโชกขนเหล็ก | Sharp Blade Feathers — ขนคมดั่งใบมีด | Evasive Maneuver — ยุทธวิธีหลบหลีก |
| Tiger | Basic Slash — ฟันพื้นฐาน | Scent of Blood — กลิ่นคาวเลือด | Rending Forepaws — อุ้งเท้าหน้าฉีกกระชาก | Wild Instincts — สัญชาตญาณป่า | Tiger Hide — หนังเสือ |
| Dream Elemental | Chill Touch — สัมผัสเย็นเยียบ | Dream Walk — ท่องฝัน | Dream Devour — กลืนกินความฝัน | Hypnotic Eye — ดวงตาสะกดจิต | Mental Blessing — พรแห่งจิตใจ |
| Nymph | Mind Pressure — แรงกดดันทางจิต | Fey Charm — เสน่ห์แห่งเฟย์ | Nature's Blessing — พรแห่งธรรมชาติ | Life Aura — รัศมีชีวิต | Guardian Touch — สัมผัสผู้พิทักษ์ |
| Sprout Soldier | Basic Slash — ฟันพื้นฐาน | Thorny Bark — เปลือกหนาม | Thorn Spear — หอกหนาม | Sturdy Stem — ลำต้นแข็งแรง | Layered Petals — กลีบดอกซ้อนชั้น |
| Ghoul | Quick Slash — ฟันฉับไว | Paralyzing Touch — สัมผัสอัมพาต | Neurotoxin Claw — กรงเล็บพิษประสาท | Ambusher's Claw — กรงเล็บนักซุ่มโจมตี | Gluttonous Stomach — กระเพาะตะกละ |
| Death Soldier | Basic Slash — ฟันพื้นฐาน | Life Drain — ดูดพลังชีวิต | Soul Drain Strike — โจมตีดูดวิญญาณ | Undead Resilience — ความทรหดแห่งอันเดด | Black Armor of Retribution — เกราะดำแห่งการตอบโต้ |
| Skeletal Steed | Basic Thrust — แทงพื้นฐาน | Spectral Dash — พุ่งทะยานวิญญาณ | Death Charge — พุ่งชาร์จมรณะ | Hollow Hooves — กีบกลวง | Wail of the Dead — เสียงคร่ำครวญแห่งผู้ตาย |
| Vampire Spawn | Blood Extraction — สกัดโลหิต | Vampire's Regeneration — การฟื้นฟูของแวมไพร์ | Charming Bite — รอยกัดสะกดใจ | Unassuming Approach — ย่างกรายไร้พิรุธ | Exploit Weakness — ฉวยจุดอ่อน |

## Tier 3

| Monster | A | B | M | S1 | S2 |
|---|---|---|---|---|---|
| Wendigo | Heavy Strike — โจมตีหนัก | Insatiable Hunger — ความหิวไม่รู้จบ | Ruthless Strike — โจมตีไร้ปรานี | Glacial Guardian — ผู้พิทักษ์ธารน้ำแข็ง | Thick Hide — หนังหนา |
| Lamia | Quick Slash — ฟันฉับไว | Serpent Dance — ระบำอสรพิษ | Riccochet Chakram — จักรสะท้อน | Venomous Chakram — จักรพิษ | Coiling Tail — หางขดรัด |
| Kelpie | Basic Thrust — แทงพื้นฐาน | Deep Sea Pressure — แรงกดดันใต้ทะเลลึก | Seaweed Spear — หอกสาหร่าย | Seaweed Form — ร่างสาหร่าย | Drowning Vortex — วังวนกลืนจม |
| Salamander | Flame Thrust — แทงเพลิง | Burning Skin — ผิวกายลุกไหม้ | Lava Spear — หอกลาวา | Blazing Aura — รัศมีเพลิง | Seething Heart — หัวใจเดือดพล่าน |
| Sylph | Quick Slash — ฟันฉับไว | Air Current — กระแสลม | Wind Strike — โจมตีวายุ | Flow Rider — ผู้ขี่กระแส | Assassin's Blade — ใบมีดนักลอบสังหาร |
| Ghast | Quick Slash — ฟันฉับไว | Septic Claws — กรงเล็บติดเชื้อ | Frenzied Assault — จู่โจมคลุ้มคลั่ง | Savage Predator — นักล่าดุร้าย | Gluttonous Entrails — เครื่องในตะกละ |
| Marionette | Quick Slash — ฟันฉับไว | Frenzied Movement — การเคลื่อนไหวคลุ้มคลั่ง | Frenzied Strike — โจมตีคลุ้มคลั่ง | Acrobat's Thread — ด้ายนักกายกรรม | Mocking Thread — ด้ายเย้ยหยัน |
| Banshee | Mind Pressure — แรงกดดันทางจิต | Screaming Soul — วิญญาณกรีดร้อง | Cry of Despair — เสียงร่ำไห้แห่งความสิ้นหวัง | Etherealize — แปรสภาพไร้กาย | Death Omen — ลางมรณะ |

## หมายเหตุต้นทาง

- หน้า Lamia ใช้ป้าย `InnateTrait` โดยไม่มีเว้นวรรค แต่ชื่อ **Serpent Dance** และตำแหน่งข้อมูลยืนยันได้จากหน้าต้นทาง
- คงการสะกด **Riccochet Chakram** ตาม Wiki ต้นทาง แม้รูปสะกดอังกฤษทั่วไปคือ `Ricochet`
- วันที่แก้ไขล่าสุดของแต่ละหน้าบันทึกไว้ในชุดข้อมูลเว็บไซต์

## รายละเอียดมอนสเตอร์ต้นแบบ

## Wendigo — Tier 3

| ช่อง | English | ไทย |
|---|---|---|
| A | Heavy Strike | โจมตีหนัก |
| B | Insatiable Hunger | ความหิวไม่รู้จบ |
| M | Ruthless Strike | โจมตีไร้ปรานี |
| S1 | Glacial Guardian | ผู้พิทักษ์ธารน้ำแข็ง |
| S2 | Thick Hide | หนังหนา |

Key Stat: `STR` · Damage หลัก: `Physical` · [ต้นทาง](https://dungeonwithin.miraheze.org/wiki/Wendigo)

## Arachne — Tier 6

| ช่อง | English | ไทย |
|---|---|---|
| A | Basic Thrust | แทงพื้นฐาน |
| B | Web Spinning | ชักใย |
| M | Titan Stomp | กระทืบยักษ์ |
| S1 | Steel Carapace | กระดองเหล็ก |
| S2 | Web Dome | โดมใยแมงมุม |

Key Stat: `STR` · Damage หลัก: `Piercing` · [ต้นทาง](https://dungeonwithin.miraheze.org/wiki/Arachne)

## Transcendent — Tier 9

| ช่อง | English | ไทย |
|---|---|---|
| A | Mind Pressure | แรงกดดันทางจิต |
| B | Mind of the World | จิตแห่งโลก |
| M | Staff of Transcendence | คทาแห่งการก้าวข้าม |
| S1 | Insight into All Minds | หยั่งรู้ทุกจิต |
| S2 | Branch of the World Tree | กิ่งแห่งต้นไม้โลก |

Key Stat: `CHA` · Damage หลัก: `Psychic` · [ต้นทาง](https://dungeonwithin.miraheze.org/wiki/Transcendent)

## คำแปล Status Effect ที่เพิ่มพร้อมกัน

Attack Disadvantage = เสียเปรียบในการโจมตี · AC Bonus = โบนัส AC · Physical Damage Resistance = ต้านทานความเสียหายกายภาพ · Restrained = ถูกพันธนาการ · Poisoned = ติดพิษ · Web = ใยแมงมุม · Transcendent Link = สายสัมพันธ์เหนือโลก · Psychic Vulnerability = แพ้ทางความเสียหายไซคิก · Confusion = สับสน
