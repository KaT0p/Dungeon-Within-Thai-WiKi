# Dungeon Within — สรุปการเปลี่ยนแปลง v0.6.1–v0.6.2

> ตรวจสอบล่าสุด: 2026-09-09
> เวอร์ชันเป้าหมาย: **v0.6.2 Build 199**
> สถานะ: ยืนยันจาก Release Note ทางการ; ค่าที่แพตช์ไม่ระบุต้องตรวจในเกม

## v0.6.2 Build 199

แหล่งหลัก: [GameCoaster Release Note — v0.6.2 Build 199](https://gamecoaster.notion.site/p/v0-6-2-Build-199-3d04966ac9c380fbaba5ecda46d764cb)

### ระบบใหม่

- เพิ่ม **Variant Research**: จำนวนครั้งที่ Extract Variant ในรายการ Variant ของ Compendium สามารถนำกลับไปลงทุนเพื่อเพิ่ม Ability Score ให้มอนสเตอร์ชนิดนั้น
- โบนัส Variant Research มีผลกับมอนสเตอร์ชนิดเดียวกันทั้งหมด ไม่ขึ้นกับว่าได้รับมอนสเตอร์ก่อนหรือหลังการวิจัย
- เพิ่ม **Trial of Assault** โดย Release Note ฉบับเต็มระบุว่าแทน Trial of Invincibility

### Monster Progression

- โบนัสจาก Monster Promotion เพิ่มเป็นสองเท่า
- ยกเลิก Dominance penalty จาก Monster Promotion
- ช่วง Primary Ability Score จาก Awakening Stage เปลี่ยนจาก `0–4` เป็น `4–8`
- Tooltip ของ Primary Ability Score แสดงช่วง Base Ability Score และโบนัสจาก Training, Awakening และ Variant Research

### ข้อมูลและส่วนติดต่อผู้ใช้

- เพิ่ม Training Grounds และ Facility Combination ในหน้าข้อมูลภายในเกม
- War Room แสดงระดับปัจจุบันและระดับสูงสุดของ Tactical Facility
- ดูสกินที่ปลดล็อกแล้วจาก Compendium ได้
- เพิ่ม Tooltip รายละเอียด Part ในหน้าเปลี่ยน Part
- Sanctuary แสดง Action Card แบบตารางเมื่อมีตั้งแต่ 4 ใบ
- Trading Post ยกเลิก Bundle และปรับจำนวนแลกได้ด้วย Slider

### การแก้บั๊กที่กระทบข้อมูล Wiki

- แก้ Ability Score ที่ใช้หรือแสดงผิดใน Part tooltip บางหน้า
- แก้ Vessel of the Sovereign
- แก้ลำดับการใช้ Basic Attack และ Main Part ซึ่งเคยตายตัว
- แก้จำนวน Main Action, Initiative Action และ Action อื่นจาก Sole Sovereign กับ War Machine
- แก้การเปลี่ยน Part เมื่อมี Ethereal Part ตั้งแต่ 2 ช่อง
- แก้ Hunting Ground เมื่อศัตรูตั้งแต่ 3 กลุ่มเข้าพร้อมกัน
- แก้ DoT นอก Combat และ Trap ที่ยังส่งผลหลังจบ Combat
- แก้ Damage Reduction ของ Warlord Kiria และ Web Dome ซึ่งเคยส่งผลกับการโจมตีทุกแบบ
- แก้ Curse Evasion, Trial of Armament ระดับ 3, Expanded Throne และ Modification Stage ของ Facility เกรดสูง

## v0.6.1 Build 198

แหล่งหลัก: [GameCoaster Release Note — v0.6.1 Build 198](https://gamecoaster.notion.site/p/v0-6-1-Build-198-3c94966ac9c38028893ef6e3a8ff4bf5)

- เพิ่ม Memento Mori War Room และ Tactical Map สำหรับเปิดใช้ Tactical Facility
- เพิ่ม Facility Repeat Modification สำหรับ Facility ที่ถึง Memory Stage สูงสุด
- เพิ่มแคมเปญ Ascension and Curses; Curse และ Catastrophe ไม่ปรากฏใน Run ปกติ
- เพิ่ม Trial of Curses และขยายระดับ Trial บางชนิด พร้อมเพิ่มเพดานโบนัสสกุลเงินเป็น 500%
- เปลี่ยนโบนัสจาก Ability Modifier จาก Dice Count Bonus (%) เป็น Dice Damage Bonus (%)
- Facility Modification และ Facility Promotion ให้โบนัส All Ability Modifiers
- ปรับ Training Grounds, Honor Level, Dark Lord Promotion และสกิลมอนสเตอร์บางรายการ

## ข้อมูลขัดแย้งที่ต้องตรวจ

ข้อความบน App Store และ Google Play ระบุว่า Trial of Assault แทน “Forgotten Trial” แต่ Release Note v0.6.2 ฉบับเต็มระบุ “Trial of Invincibility” เอกสารนี้ยึดฉบับเต็มเป็นหลักและยังไม่ลบชื่อ Trial เดิมออกจากฐานข้อมูลจนกว่าจะตรวจในเกม Build 199

## ผลต่อฐานข้อมูล

- ข้อมูล Monster Promotion และ Ability Score ก่อน v0.6.2 ต้องตรวจใหม่
- ข้อมูล Part ที่เกี่ยวกับ Ability Score, ลำดับ Action หรือ Ethereal Part ต้องตรวจใหม่
- ข้อมูล Facility Modification/Promotion ก่อน v0.6.1 ต้องตรวจใหม่
- Web Dome, Vessel of the Sovereign, Sole Sovereign และ War Machine ต้องตรวจพฤติกรรมจาก Build 199 ก่อนยืนยันตัวเลขหรือสูตร
