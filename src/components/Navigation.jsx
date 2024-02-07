import React from "react";
import { useState } from "react";
import Menu from '/menu.svg'
import Close from '/close.svg'


const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const body = document.querySelector("body");

  const openMenu = () => {
    setMenuOpen(true);
    body?.classList.add("overflow-hidden");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    body?.classList.remove("overflow-hidden");
  };

  return (
    <header className="pb-3 md:py-3 pt-4">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="z-50">
          <h1>LOGO HERE</h1>
        </div>
        <div
          className={`nav-link-container duration-300 absolute min-h-screen left-0 top-[-100%] w-full flex items-center px-16 md:px-5 md:static md:min-h-max md:w-auto ${
            menuOpen && "top-[0%] z-40 intended-background-color"
          }`}
        >
          <ul className="flex flex-col gap-8 md:flex-row md:items-center md:gap-[4vw]">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <a href="#footer" className="z-50" onClick={closeMenu}>
            <button className="button-filled">Get Started</button>
          </a>
          <div className="cursor-pointer h-10 md:hidden z-50">
            {
              menuOpen ? <img src={Close} alt="close menu button" onClick={closeMenu} /> : <img src={Menu} alt="hamburger menu button" onClick={openMenu} />
            }
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
