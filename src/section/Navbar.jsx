import React, { useState } from "react";
import { navLinks } from "../constants";

// 🟢 ĐÃ SỬA: Nhận thêm prop onClick để xử lý sự kiện đóng menu trên mobile
const NavItems = ({ onClick }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={onClick}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  // 🟢 ĐÃ SỬA: Để mặc định là false để menu điện thoại đóng khi mới vào web
  const [isOpen, setIsOpen] = useState(false); 
  const baseUrl = import.meta.env.BASE_URL;
  
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const closeMenu = () => setIsOpen(false); // Hàm tự động thu menu lại

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href={baseUrl}
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Thắng
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? `${baseUrl}assets/close.svg` : `${baseUrl}assets/menu.svg`}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            {/* Trên PC không cần truyền sự kiện đóng */}
            <NavItems />
          </nav>

        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
            {/* 🟢 ĐÃ SỬA: Khi user click vào link, gọi hàm closeMenu để thu sidebar lại */}
            <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;