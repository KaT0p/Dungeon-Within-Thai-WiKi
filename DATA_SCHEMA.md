# Dungeon Within Thailand Wiki — โครงสร้างข้อมูลร่วม v1

> สถานะ: อนุมัติเป็นโครงสร้างเริ่มต้น  
> วันที่จัดทำ: 2026-08-27  
> ขอบเขต: Phase 1.3 — ยังไม่มีข้อมูลเกมจริงในไฟล์นี้

เอกสารนี้กำหนดรูปแบบข้อมูลกลางสำหรับ Dungeon Within Thailand Wiki เพื่อให้ข้อมูลจอมมาร มอนสเตอร์ สิ่งปลูกสร้าง ไอเทม ระบบ และบทความสามารถค้นหา กรอง เปรียบเทียบ และตรวจย้อนกลับไปยังแหล่งที่มาได้

## 1. แนวทางจัดเก็บข้อมูล

ใช้รูปแบบผสมสองประเภท:

1. **ข้อมูลโครงสร้าง** เก็บเป็น JSON สำหรับค่าสถานะ สกิล แท็ก เวอร์ชัน และแหล่งอ้างอิง
2. **เนื้อหาอ่านยาว** เก็บเป็น Markdown สำหรับคู่มือ คำอธิบาย และกลยุทธ์

โครงสร้างโฟลเดอร์ที่วางแผนไว้:

```text
data/
  dark-lords/
  monsters/
  heroes/
  facilities/
  relics/
  status-effects/
  systems/
  patches/
  glossary/
  sources.json
content/
  guides/
  builds/
  comparisons/
public/
  media/
```

เหตุผลที่แยกข้อมูลออกจากบทความ:

- ตัวเลขหนึ่งค่าถูกนำไปใช้ได้ทั้งหน้ารายละเอียด ตารางค้นหา และหน้าเปรียบเทียบ
- แก้ข้อมูลจริงโดยไม่ปะปนกับความคิดเห็นหรือคำแนะนำ
- ตรวจสอบได้ว่าฟิลด์ใดมีแหล่งอ้างอิงและฟิลด์ใดยังขาด
- เปลี่ยนหน้าตาเว็บไซต์ภายหลังโดยไม่ต้องย้ายข้อมูลใหม่ทั้งหมด

## 2. รูปแบบชื่อไฟล์และรหัส

### ID

- ใช้อักษรอังกฤษตัวเล็ก ตัวเลข และขีดกลางเท่านั้น
- ID ต้องไม่เปลี่ยนแม้คำแปลหรือชื่อที่แสดงจะเปลี่ยน
- ใส่คำนำหน้าตามชนิดเพื่อป้องกันชื่อซ้ำ

ตัวอย่าง:

```text
dark-lord-example
monster-example
facility-example
relic-example
status-example
system-example
```

### Slug

- ใช้ชื่ออังกฤษตัวเล็กแบบ `kebab-case`
- ห้ามใช้ชื่อไทยใน URL
- ถ้าชื่อซ้ำให้เติมชนิดหรือคำขยายที่มาจากเกมจริง
- การเปลี่ยน Slug ต้องมี Redirect จาก URL เก่าในอนาคต

### ชื่อไฟล์

```text
data/monsters/example-monster.json
content/guides/getting-started.md
```

## 3. ชนิดข้อมูลที่รองรับ

| `entity_type` | ความหมาย | โฟลเดอร์ |
|---|---|---|
| `dark_lord` | จอมมาร | `data/dark-lords/` |
| `monster` | มอนสเตอร์ | `data/monsters/` |
| `hero` | ฮีโร่หรือผู้บุกรุก | `data/heroes/` |
| `facility` | สนามล่า กับดัก หรือโครงสร้าง | `data/facilities/` |
| `relic` | วัตถุโบราณ | `data/relics/` |
| `status_effect` | บัฟ ดีบัฟ หรือสถานะอื่น | `data/status-effects/` |
| `game_system` | ระบบหรือกลไกเกม | `data/systems/` |
| `patch_note` | ข้อมูล Patch และ Build | `data/patches/` |
| `glossary_term` | คำศัพท์มาตรฐาน | `data/glossary/` |
| `guide` | คู่มือหรือบทความ | `content/guides/` |
| `build` | Build หรือกลยุทธ์ | `content/builds/` |

## 4. ฟิลด์กลางที่ทุกข้อมูลต้องมี

| ฟิลด์ | ชนิด | บังคับ | ความหมาย |
|---|---|---:|---|
| `id` | string | ✓ | รหัสถาวรและไม่ซ้ำ |
| `slug` | string | ✓ | ส่วน URL |
| `entity_type` | enum | ✓ | ชนิดข้อมูลจากตารางด้านบน |
| `name_en` | string | ✓ | ชื่ออังกฤษตามเกมหรือแหล่งทางการ |
| `name_th` | string/null | ✓ | ชื่อไทย คำอ่าน หรือ `null` เมื่อคงอังกฤษ |
| `summary_th` | string | ✓ | คำอธิบายไทยแบบสั้นและเป็นข้อเท็จจริง |
| `aliases` | string[] | ✓ | ชื่อย่อ ชื่อเก่า หรือคำค้นอื่น ใช้ `[]` เมื่อไม่มี |
| `tags` | string[] | ✓ | แท็กที่ใช้ค้นหาและกรอง |
| `game_version` | string | ✓ | เวอร์ชันที่ข้อมูลผ่านการตรวจ |
| `game_build` | number/null | ✓ | Build ที่ตรวจ หรือ `null` เมื่อไม่ทราบ |
| `verification_status` | enum | ✓ | สถานะการตรวจสอบ |
| `verified_at` | date/null | ✓ | วันที่ตรวจข้อมูลจริง |
| `updated_at` | date | ✓ | วันที่แก้ไฟล์ล่าสุด |
| `sources` | string[] | ✓ | ID ของแหล่งอ้างอิงอย่างน้อยหนึ่งรายการ |
| `field_sources` | object | ✓ | ผูกฟิลด์สำคัญกับ Source ID |
| `notes` | string[] | ✓ | หมายเหตุผู้ดูแล ใช้ `[]` เมื่อไม่มี |
| `license` | string | ✓ | สิทธิ์ของข้อความหรือข้อมูลดัดแปลง |

### ตัวอย่าง Record กลาง

ตัวอย่างนี้เป็นเพียงโครงสร้าง ไม่มีข้อมูลเกมจริง:

```json
{
  "id": "monster-example",
  "slug": "example",
  "entity_type": "monster",
  "name_en": "Example",
  "name_th": null,
  "summary_th": "ตัวอย่างโครงสร้างข้อมูลเท่านั้น",
  "aliases": [],
  "tags": ["needs-data"],
  "game_version": "0.6.0",
  "game_build": null,
  "verification_status": "needs_review",
  "verified_at": null,
  "updated_at": "2026-08-27",
  "sources": ["source-example"],
  "field_sources": {
    "name_en": ["source-example"]
  },
  "notes": ["ห้ามนำ Record ตัวอย่างไปแสดงเป็นข้อมูลเกม"],
  "license": "project-original"
}
```

## 5. สถานะการตรวจสอบ

ค่าที่อนุญาตใน `verification_status`:

| ค่า | ใช้เมื่อ | แสดงบนเว็บ |
|---|---|---|
| `verified_current` | ตรวจจากเกม Build ปัจจุบันและมีหลักฐานครบ | ตรวจสอบแล้ว |
| `verified_source` | ยืนยันจากประกาศทางการ แต่ยังไม่ได้ตรวจในเกม | ยืนยันจากแหล่งทางการ |
| `needs_review` | มีข้อมูลแต่ยังไม่พอหรืออาจล้าสมัย | ต้องตรวจสอบ |
| `community_claim` | มาจากการทดสอบหรือความเห็นชุมชน | ข้อมูลจากชุมชน |
| `obsolete` | ใช้กับเวอร์ชันเก่าและไม่ควรใช้กับปัจจุบัน | ข้อมูลเก่า |

กฎสำคัญ:

- `verified_current` ต้องมี `game_build`, `verified_at` และ Source จากข้อมูลในเกม
- `verified_source` ต้องอ้าง Source ระดับ A ตาม [SOURCES.md](./SOURCES.md)
- `community_claim` ห้ามแสดงรวมกับข้อเท็จจริงโดยไม่มีป้ายกำกับ
- `obsolete` ต้องระบุเวอร์ชันสุดท้ายที่ยังใช้ได้ใน `notes`
- ห้ามเปลี่ยนเป็น `verified_current` เพียงเพราะข้อมูลตรงกับ Wiki อังกฤษ

## 6. โครงสร้างแหล่งอ้างอิง

แหล่งอ้างอิงทุกแห่งเก็บใน `data/sources.json` แล้วให้ Record อื่นอ้างด้วย Source ID

| ฟิลด์ | ชนิด | บังคับ | ความหมาย |
|---|---|---:|---|
| `id` | string | ✓ | รหัส Source |
| `source_type` | enum | ✓ | `in_game`, `official_note`, `store`, `community_wiki`, `community_test` |
| `title` | string | ✓ | ชื่อหน้า เอกสาร หรือหลักฐาน |
| `url` | string/null | ✓ | URL หรือ `null` สำหรับภาพจากเกมในเครื่อง |
| `revision` | string/null | ✓ | Revision ID, Build หรือหมายเลขเอกสาร |
| `game_version` | string/null | ✓ | เวอร์ชันที่ Source กล่าวถึง |
| `game_build` | number/null | ✓ | Build ที่ Source กล่าวถึง |
| `platform` | string/null | ✓ | iOS, Android หรือ All |
| `language` | string | ✓ | ภาษาของต้นฉบับ |
| `accessed_at` | date | ✓ | วันที่เข้าถึง |
| `captured_by` | string/null | ✓ | ผู้เก็บหลักฐานในเกม |
| `license` | string | ✓ | เช่น `CC-BY-SA-4.0`, `GameCoaster-copyright`, `unknown` |
| `notes` | string[] | ✓ | บริบทหรือข้อจำกัด |

### การอ้างอิงระดับฟิลด์

ไม่ควรใส่ Source เพียงระดับหน้า เพราะตัวเลขแต่ละส่วนอาจมาจากคนละ Build

```json
{
  "field_sources": {
    "name_en": ["source-codex-build-195"],
    "stats.base": ["source-codex-build-195"],
    "abilities.base_attack": ["source-codex-build-195"],
    "strategy": ["source-community-test-001"]
  }
}
```

## 7. โครงสร้างจอมมาร

ฟิลด์เฉพาะของ `dark_lord`:

```json
{
  "role": [],
  "stats": {
    "str": null,
    "dex": null,
    "con": null,
    "int": null,
    "wis": null,
    "cha": null,
    "max_hp": null,
    "armor_class": null,
    "initiative": null
  },
  "base_attack": null,
  "innate_trait": null,
  "authorities": [],
  "parts": {
    "main": [],
    "sub": []
  },
  "promotion": [],
  "ascension": [],
  "aspects": [],
  "unlock_requirements": [],
  "synergy_ids": [],
  "factual_notes": [],
  "strategy": null
}
```

ข้อกำหนด:

- `role` ใช้แท็กจากชุดที่กำหนดเท่านั้น เช่น `damage`, `defense`, `support`, `control`
- `stats` ที่ยังไม่ทราบใช้ `null` ห้ามใช้ `0`
- สกิลและ Authority อ้างด้วย ID ไม่คัดลอกคำอธิบายซ้ำหลายแห่ง
- `strategy` ต้องเป็นคนละส่วนจาก `factual_notes`
- Promotion, Ascension และ Aspect ต้องระบุขั้นกับเงื่อนไข

## 8. โครงสร้างมอนสเตอร์และฮีโร่

ฟิลด์เฉพาะของ `monster` และ `hero`:

```json
{
  "grade": null,
  "tier": null,
  "rank": null,
  "rarity": null,
  "race_tags": [],
  "role": [],
  "position": [],
  "stats": {
    "str": null,
    "dex": null,
    "con": null,
    "int": null,
    "wis": null,
    "cha": null,
    "max_hp": null,
    "armor_class": null,
    "initiative": null
  },
  "base_attack": null,
  "innate_trait": null,
  "main_parts": [],
  "sub_parts": [],
  "variants": [],
  "acquisition": [],
  "upgrade_costs": [],
  "synergy_ids": [],
  "factual_notes": [],
  "strategy": null
}
```

ข้อกำหนด:

- `grade`, `tier` และ `rank` แยกฟิลด์ ห้ามรวมจนกว่าจะยืนยันความหมายจากเกม
- `race_tags` เก็บเฉพาะแท็กที่เกมใช้จริง
- `position` ใช้ `front`, `back` หรือทั้งสองค่า
- ค่าสถานะที่เปลี่ยนตามขั้นต้องเก็บเป็นรายการแยกพร้อมเงื่อนไข ไม่เขียนทับค่าพื้นฐาน
- Hero ใช้โครงสร้างเดียวกันได้ แต่ฟิลด์ที่ไม่เกี่ยวข้องให้ใช้ `null` หรือ `[]`

## 9. โครงสร้างสกิลและเอฟเฟกต์

```json
{
  "id": "ability-example",
  "name_en": "Example Ability",
  "name_th": null,
  "ability_type": "base_attack",
  "slot": "A",
  "description_en": null,
  "description_th": null,
  "scaling_stats": [],
  "attack_type": null,
  "damage": [],
  "targeting": null,
  "range": null,
  "cooldown": null,
  "applies_status_ids": [],
  "conditions": [],
  "values_by_level": [],
  "verification_status": "needs_review",
  "field_sources": {}
}
```

ค่าที่อนุญาตเบื้องต้นใน `ability_type`:

- `base_attack`
- `innate_trait`
- `main_part`
- `sub_part`
- `authority`
- `trait`
- `aspect`
- `facility_effect`
- `relic_effect`

ข้อกำหนด:

- สูตรความเสียหายเก็บเป็นข้อมูล ไม่เก็บเป็นข้อความอย่างเดียว
- เก็บ `dice`, `flat_bonus`, `scaling_stat` และ `damage_type` แยกกันเมื่อมีข้อมูล
- ถ้าคำอธิบายในเกมกับพฤติกรรมจริงต่างกัน ให้เก็บทั้งสองอย่างและเปิด Issue ตรวจสอบ

ตัวอย่างโครงสร้างความเสียหาย:

```json
{
  "damage": [
    {
      "dice": "2d8",
      "flat_bonus": 0,
      "scaling_stat": "str",
      "damage_type": "needs-review"
    }
  ]
}
```

## 10. โครงสร้างสิ่งปลูกสร้าง

ฟิลด์เฉพาะของ `facility`:

```json
{
  "facility_type": "trap",
  "rarity": null,
  "footprint": { "width": 1, "height": 1 },
  "capacity": null,
  "dominance_cost": null,
  "durability": null,
  "effect_area": null,
  "friendly_fire": null,
  "effects": [],
  "values_by_level": [],
  "acquisition": [],
  "combination_rules": [],
  "synergy_ids": [],
  "factual_notes": [],
  "strategy": null
}
```

ค่าที่อนุญาตใน `facility_type`:

- `hunting_ground`
- `trap`
- `structure`

ค่าที่อนุญาตเบื้องต้นใน `effect_area`:

- `zone`
- `adjacent`
- `row`
- `column`
- `cross`
- `global`
- `unknown`

ข้อกำหนด:

- `friendly_fire` ใช้ `true`, `false` หรือ `null` เมื่อยังไม่ทราบ
- กับดักต้องมีเงื่อนไข Disarm และ Cooldown หากเกมแสดง
- ห้องที่มีหลายเอฟเฟกต์ต้องเก็บแต่ละเอฟเฟกต์แยกกัน
- ค่าอัปเกรดแต่ละระดับต้องมี Source แยกเมื่อไม่ได้อยู่ในภาพหรือหน้าเดียวกัน

## 11. โครงสร้างวัตถุโบราณและไอเทม

```json
{
  "item_type": "relic",
  "rarity": null,
  "effects": [],
  "acquisition": [],
  "unlock_requirements": [],
  "synergy_ids": [],
  "factual_notes": [],
  "strategy": null
}
```

ข้อกำหนด:

- ชื่อเฉพาะคงอังกฤษตาม [GLOSSARY.md](./GLOSSARY.md)
- แยก “วิธีได้รับ” ออกจาก “เงื่อนไขปลดล็อก”
- หากเป็นของซื้อ ให้บันทึกว่าเป็นเนื้อหาแบบชำระเงิน แต่ไม่เก็บราคาเป็นค่าถาวร

## 12. โครงสร้างเอฟเฟกต์สถานะ

```json
{
  "status_type": "buff",
  "description_en": null,
  "description_th": null,
  "stacking": {
    "allowed": null,
    "max_stacks": null,
    "decay_rule": null
  },
  "duration": null,
  "effects": [],
  "applied_by_ids": [],
  "removed_by_ids": [],
  "factual_notes": []
}
```

ค่าที่อนุญาตใน `status_type`:

- `buff`
- `debuff`
- `neutral`
- `unknown`

ข้อกำหนด:

- ข้อมูล Duration เก่าที่อิง Turn ต้องติด `needs_review` หลัง v0.6.0
- `applied_by_ids` และ `removed_by_ids` อ้าง Record อื่นด้วย ID
- ห้ามอนุมาน Max Stacks จากการทดลองครั้งเดียว

## 13. โครงสร้างคำศัพท์

```json
{
  "term_en": "Example",
  "term_th": "ตัวอย่าง",
  "first_mention": "ตัวอย่าง (Example)",
  "translation_status": "wiki_standard",
  "keep_english": false,
  "abbreviation": null,
  "definition_th": null,
  "conflicts_with": [],
  "notes": []
}
```

ค่าที่อนุญาตใน `translation_status`:

- `wiki_standard`
- `keep_english`
- `needs_in_game_review`
- `deprecated`

## 14. โครงสร้างคู่มือและ Build

ข้อมูลส่วนหัวของไฟล์ Markdown:

```yaml
---
id: guide-example
slug: example
entity_type: guide
title_th: ชื่อคู่มือ
title_en: Example Guide
summary_th: คำอธิบายแบบสั้น
game_version: 0.6.0
game_build: null
verification_status: needs_review
author_ids: []
tester_ids: []
related_entity_ids: []
source_ids: []
created_at: 2026-08-27
updated_at: 2026-08-27
license: project-original
---
```

บทความต้องแบ่งหัวข้อเป็น:

1. `ข้อมูลที่ยืนยันแล้ว` — ข้อเท็จจริงจากเกมหรือแหล่งทางการ
2. `แนวทางที่แนะนำ` — ความเห็นหรือกลยุทธ์ของผู้เขียน
3. `เงื่อนไขการทดสอบ` — เวอร์ชัน ความยาก และองค์ประกอบของ Build
4. `ข้อจำกัดและทางเลือก` — สิ่งที่อาจทำให้ Build ใช้ไม่ได้
5. `แหล่งอ้างอิงและผู้ทดสอบ`

## 15. โครงสร้างสื่อและภาพ

```json
{
  "id": "media-example",
  "file": "media/example.png",
  "media_type": "screenshot",
  "subject_id": "monster-example",
  "game_version": "0.6.0",
  "game_build": null,
  "captured_at": "2026-08-27",
  "captured_by": null,
  "source_url": null,
  "copyright_holder": "GameCoaster",
  "license": "unknown",
  "credit": "Dungeon Within © GameCoaster",
  "allowed_for_publish": false,
  "notes": []
}
```

กฎสำคัญ:

- `allowed_for_publish` ต้องเป็น `false` จนกว่าจะตรวจสิทธิ์
- ภาพจาก Wiki อังกฤษต้องเก็บ URL หน้าข้อมูลไฟล์ ไม่เก็บเฉพาะ URL รูป
- ภาพหน้าจอจากเกมต้องระบุ GameCoaster เป็นเจ้าของลิขสิทธิ์
- ภาพที่ใช้เป็นหลักฐานภายในอาจเก็บได้โดยยังไม่แสดงต่อสาธารณะ

## 16. กฎ Validation

### Validation ระดับไฟล์

- [ ] JSON อ่านได้และไม่มี Key ซ้ำ
- [ ] `id` และ `slug` ไม่ซ้ำกับ Record อื่น
- [ ] `entity_type` ตรงกับโฟลเดอร์
- [ ] วันที่ใช้รูปแบบ `YYYY-MM-DD`
- [ ] Version ใช้รูปแบบ `x.y.z`
- [ ] ID ที่อ้างถึงต้องมี Record ปลายทางจริง

### Validation ระดับเนื้อหา

- [ ] ทุก Record มีชื่ออังกฤษ
- [ ] มีชื่อไทย คำอ่าน หรือเหตุผลที่คงอังกฤษ
- [ ] ข้อมูลตัวเลขมี Source ระดับฟิลด์
- [ ] ไม่มี `0` ใช้แทนค่าที่ไม่ทราบ
- [ ] ข้อมูลที่ยังไม่ยืนยันใช้ `null` และ `needs_review`
- [ ] ข้อมูลกลยุทธ์ไม่อยู่ในฟิลด์ข้อเท็จจริง
- [ ] ข้อมูลจากชุมชนมีชื่อผู้เขียนหรือผู้ทดสอบ
- [ ] ข้อมูลเก่ามีเวอร์ชันที่หยุดใช้

### Validation ก่อนแสดงบนเว็บไซต์

- `verified_current` และ `verified_source` แสดงตามปกติ
- `needs_review` แสดงป้ายเตือน
- `community_claim` แสดงในส่วนชุมชนเท่านั้น
- `obsolete` ซ่อนจากผลค้นหาปกติ แต่เปิดดูประวัติได้
- Record ที่ไม่มี Source ห้ามเข้าสู่เว็บไซต์รุ่นเผยแพร่

## 17. กฎการเปลี่ยนแปลง Schema

- เพิ่มฟิลด์ใหม่ได้โดยไม่ลบข้อมูลเดิม
- เปลี่ยนชื่อฟิลด์ต้องมี Migration และบันทึกใน Changelog
- ห้ามเปลี่ยนความหมายของฟิลด์เดิมโดยไม่เปลี่ยนชื่อ
- Enum ใหม่ต้องเพิ่มคำอธิบายในเอกสารนี้ก่อนใช้
- ถ้าข้อมูลจากเกมไม่พอดีกับ Schema ให้แก้ Schema จากหลักฐานจริง ห้ามบิดข้อมูลให้พอดี

## 18. Checklist ทดลอง Schema ก่อนเริ่มเก็บจำนวนมาก

- [ ] ทดลองกับจอมมาร 1 ตัว
- [ ] ทดลองกับมอนสเตอร์ 3 ตัวที่กลไกต่างกัน
- [ ] ทดลองกับ Hunting Ground 1 ห้อง
- [ ] ทดลองกับกับดักแบบ Safe 1 รายการ
- [ ] ทดลองกับกับดักแบบ Dangerous 1 รายการ
- [ ] ทดลองกับ Structure 1 รายการ
- [ ] ทดลองกับ Relic 1 รายการ
- [ ] ทดลองกับ Status Effect แบบมี Stack 1 รายการ
- [ ] ทดลองกับคู่มือ 1 บทความ
- [ ] ตรวจว่าสร้างหน้า ตาราง ตัวกรอง และการอ้างอิงจากข้อมูลชุดเดียวกันได้

## 19. เกณฑ์ปิดงาน Phase 1.3

- [x] ทุก Record มีชื่ออังกฤษและคำแสดงภาษาไทย
- [x] ทุก Record มีหมวดหมู่และชนิดข้อมูล
- [x] ทุก Record มีเวอร์ชัน Build และวันที่ตรวจสอบ
- [x] ทุก Record มีแหล่งอ้างอิงและการอ้างระดับฟิลด์
- [x] ทุก Record มีสถานะการตรวจสอบ
- [x] แยกข้อมูลข้อเท็จจริงออกจากกลยุทธ์
- [x] มี Schema เฉพาะสำหรับชนิดข้อมูลหลัก
- [x] มีรูปแบบสื่อและสิทธิ์การเผยแพร่
- [x] มี Validation และกฎเปลี่ยน Schema
- [x] มีรายการทดลองก่อนเริ่มเก็บข้อมูลจำนวนมาก

