<div align="center">

![Dungeon Within Thailand Wiki](./public/og.png)

# Dungeon Within Thailand Wiki

วิกิภาษาไทยสำหรับเกม **Dungeon Within** ที่รวบรวมข้อมูลระบบเกม จอมมาร มอนสเตอร์ ห้อง กับดัก และไอเทม โดยให้ความสำคัญกับแหล่งอ้างอิง เวอร์ชันเกม และสถานะการตรวจสอบของข้อมูล

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Game version](https://img.shields.io/badge/Game-v0.6.0-8B5CF6)](./docs/SOURCES.md)

</div>

> [!NOTE]
> โปรเจกต์นี้เป็นผลงานแฟนเมดโดยชุมชน ไม่มีความเกี่ยวข้องหรือได้รับการรับรองจาก GameCoaster ผู้พัฒนาเกม Dungeon Within

## จุดเด่นของโปรเจกต์

- ค้นหาข้อมูลจากหน้าแรกด้วยชื่อไทย ชื่ออังกฤษ และคำศัพท์ที่เกี่ยวข้อง
- รวมข้อมูลจอมมาร 3 ตัว พร้อม Skill, Part, Authority และแนวทางจัดทีม
- ทำบัญชีมอนสเตอร์ 76 ตัว แบ่ง Tier 1–9 พร้อมคำแปลชื่อสกิล 290 ชื่อ
- รวมเอฟเฟกต์สถานะ ค่าสถานะหลัก และคำอธิบายกลไกการต่อสู้
- รวม Facility 41 รายการ และ Relic 87 ชิ้น พร้อมตัวกรองและคู่มือใช้งาน
- แยกข้อเท็จจริงออกจากคำแนะนำ พร้อมป้ายสถานะสำหรับข้อมูลที่ยังต้องตรวจสอบ
- ระบุแหล่งที่มา เวอร์ชันเกม และวันที่ตรวจสอบ เพื่อให้ย้อนกลับไปตรวจข้อมูลได้
- รองรับการแสดงผลทั้งเดสก์ท็อปและอุปกรณ์มือถือ

## เนื้อหาที่มีในวิกิ

| หมวด | รายละเอียด |
|---|---|
| ระบบเกม | วงจรการเล่น, Node, Combat, Ark of Memory และความก้าวหน้าข้าม Run |
| ค่าสถานะ | STR, DEX, CON, INT, WIS, CHA, Key Stat และสูตร Modifier |
| จอมมาร | Desponia, Aura และ Rhea พร้อมแนวทางเล่น |
| มอนสเตอร์ | รายชื่อ Tier 1–9, ประเภท, Key Stat และหน้ารายละเอียด |
| สกิลมอนสเตอร์ | ชื่ออังกฤษ–ไทย แยกตาม Tier และช่องสกิล |
| ห้องและกับดัก | Facility, ผัง 3×3 และชุดแนะนำตามจอมมาร |
| ไอเทม | Relic และคู่มือช่อง Part ของมอนสเตอร์ |
| เอฟเฟกต์สถานะ | Buff, Debuff และเอฟเฟกต์พื้นที่ |
| คำศัพท์ | มาตรฐานคำแปลไทย–อังกฤษที่ใช้ร่วมกันทั้งเว็บไซต์ |

ดูขอบเขตงานและสถานะล่าสุดได้ที่ [Content Roadmap](./docs/CONTENT_ROADMAP.md)

## เริ่มต้นพัฒนา

### สิ่งที่ต้องมี

- [Node.js 24.x](https://nodejs.org/)
- npm ซึ่งติดตั้งมาพร้อม Node.js

### ติดตั้งและเปิดเซิร์ฟเวอร์

```bash
git clone https://github.com/KaT0p/Dungeon-Within-Thai-WiKi.git
cd Dungeon-Within-Thai-WiKi
npm ci
npm run dev
```

จากนั้นเปิด [http://localhost:3000](http://localhost:3000)

### คำสั่งที่ใช้บ่อย

| คำสั่ง | การทำงาน |
|---|---|
| `npm run dev` | เปิด Next.js development server |
| `npm run build` | สร้าง production build |
| `npm run start` | เปิด production server หลัง build |
| `npm run lint` | ตรวจโค้ดด้วย ESLint |
| `npm run dev:sites` | เปิด development server ผ่าน Vinext/Sites |
| `npm run build:sites` | สร้าง build สำหรับ Vinext/Sites |

## โครงสร้างโปรเจกต์

```text
.
├── app/
│   ├── components/       # คอมโพเนนต์ที่ใช้ร่วมกัน
│   ├── wiki/             # หน้าเนื้อหาวิกิและ dynamic routes
│   ├── *-data.ts         # ข้อมูลที่ใช้แสดงบนเว็บไซต์
│   └── globals.css       # สไตล์หลักของเว็บไซต์
├── docs/                 # เอกสารอ้างอิง มาตรฐานข้อมูล และ Roadmap
├── public/
│   └── images/           # รูปตัวละครและมอนสเตอร์
├── next.config.ts        # การตั้งค่า Next.js
└── package.json          # dependencies และ scripts
```

## หลักการดูแลข้อมูล

โปรเจกต์ใช้สถานะตรวจสอบเพื่อช่วยแยกข้อมูลที่ยืนยันแล้วออกจากข้อมูลที่อาจล้าสมัย:

- `verified_current` — ตรวจจากเกม Build ปัจจุบันพร้อมหลักฐานครบ
- `verified_source` — ยืนยันจากแหล่งทางการ แต่ยังไม่ได้ตรวจซ้ำในเกม
- `needs_review` — มีข้อมูลแล้ว แต่ยังต้องตรวจสอบเพิ่มเติม
- `community_claim` — มาจากการทดสอบหรือความเห็นของชุมชน
- `obsolete` — ข้อมูลจากเวอร์ชันเก่าที่ไม่ควรใช้กับเวอร์ชันปัจจุบัน

อ่านรายละเอียดได้จาก [โครงสร้างข้อมูล](./docs/DATA_SCHEMA.md), [แหล่งข้อมูลและนโยบายอ้างอิง](./docs/SOURCES.md) และ [มาตรฐานคำศัพท์](./docs/GLOSSARY.md)

## การมีส่วนร่วม

ยินดีรับการช่วยตรวจข้อมูล แก้คำแปล และพัฒนาเว็บไซต์ผ่าน [Issues](https://github.com/KaT0p/Dungeon-Within-Thai-WiKi/issues) หรือ Pull Request โดยก่อนส่งการเปลี่ยนแปลงควร:

1. ระบุแหล่งอ้างอิง เวอร์ชันเกม และ Build เมื่อแก้ข้อมูลเชิงตัวเลข
2. คงชื่อภาษาอังกฤษไว้คู่กับคำแปลไทยเพื่อให้ค้นหาต้นทางได้
3. ติดสถานะ `needs_review` เมื่อยังยืนยันข้อมูลไม่ได้
4. แยกความคิดเห็นหรือคำแนะนำออกจากข้อเท็จจริงอย่างชัดเจน
5. รัน `npm run lint` และ `npm run build` ให้ผ่าน

## แหล่งที่มา ลิขสิทธิ์ และเครดิต

- รายละเอียดแหล่งข้อมูลอยู่ใน [docs/SOURCES.md](./docs/SOURCES.md)
- เครดิตและสถานะสิทธิ์ของรูปภาพอยู่ใน [docs/IMAGE_CREDITS.md](./docs/IMAGE_CREDITS.md)
- ข้อความที่แปลหรือดัดแปลงจาก Dungeon Within Wiki ต้องเป็นไปตามเงื่อนไข [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- ชื่อเกม ภาพ และทรัพย์สินที่เกี่ยวข้องกับ Dungeon Within เป็นสิทธิ์ของเจ้าของแต่ละราย

ขณะนี้ repository ยังไม่มีไฟล์ LICENSE ที่กำหนดสิทธิ์สำหรับซอร์สโค้ดของโปรเจกต์ จึงไม่ควรถือว่าซอร์สโค้ดสามารถนำไปใช้ต่อได้โดยอัตโนมัติ
