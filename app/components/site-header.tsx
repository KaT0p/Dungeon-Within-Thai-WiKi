export default function SiteHeader() {
  return <header className="site-header">
    <a className="brand" href="/" aria-label="Dungeon Within Thailand Wiki หน้าแรก">
      <span className="brand-mark"><i>DW</i></span><span><strong>Dungeon Within</strong><small>THAILAND WIKI</small></span>
    </a>
    <nav aria-label="เมนูหลัก"><a className="nav-hub" href="/wiki">คลังข้อมูล</a><a href="/wiki/systems">ระบบ</a><a href="/wiki/stats">ค่าสถานะ</a><a href="/wiki/dark-lords">จอมมาร</a><a href="/wiki/monsters">มอนสเตอร์</a><a href="/wiki/facilities">ห้อง/กับดัก</a><a href="/wiki/items">ไอเทม</a><a href="/wiki/glossary">ศัพท์</a><a href="/roadmap">Roadmap</a></nav>
    <a className="header-search" href="/#search">ค้นหา <span>⌕</span></a>
    <a className="menu-button" href="/wiki" aria-label="เปิดคลังข้อมูล"><span>คลังข้อมูล</span>☰</a>
  </header>;
}

export function SiteFooter() {
  return <footer><span>Dungeon Within Thailand Wiki</span><span>โปรเจกต์แฟนเมดโดยชุมชน — ไม่เกี่ยวข้องกับ GameCoaster</span></footer>;
}
