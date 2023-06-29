import React, { useState } from "react";

import NavBar from "./NavBar";
import { FaSistrix, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";

import "./styles/header.scss";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((prev) => {
      setMobileMenu(!prev);
    });
  };

  return (
    <header className="header">
      <div className="header-wrapper container">
        <a href="/" className="logo">
          M<span className="hidden">iralou</span>
        </a>
        <NavBar navMenu="dekstop-menu" mobileMenu={mobileMenu} />
        <div className="nav-buttons">
          <button>
            <FaSistrix size={20} className="button" />
          </button>
          <button>
            <FaRegHeart size={20} className="button" />
          </button>
          <button>
            <IoCartOutline size={20} className="button" />
          </button>
        </div>
        <button className="hamburger" type="button" onClick={handleMobileMenu}>
          <span
            className="hamburger-top"
            style={{
              transform: mobileMenu
                ? "rotate(45deg) translateY(6px) translateX(6px)"
                : "rotate(0)",
            }}
          ></span>
          <span
            className="hamburger-middle"
            style={{
              display: mobileMenu ? "none" : "block",
            }}
          ></span>
          <span
            className="hamburger-bottom"
            style={{
              transform: mobileMenu
                ? "rotate(-45deg) translateY(6px) translateX(-6px)"
                : "translateY(14px)",
            }}
          ></span>
        </button>
        <NavBar navMenu="mobile-menu" mobileMenu={mobileMenu} />
      </div>
    </header>
  );
}

export default Header;
