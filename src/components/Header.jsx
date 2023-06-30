import React, { useState } from "react";
import NavBar from "./NavBar";
import Hamburger from "./Hamburger";
import { FaSistrix, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import "./styles/header.scss";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

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
        <Hamburger mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <NavBar navMenu="mobile-menu" mobileMenu={mobileMenu} />
      </div>
    </header>
  );
}

export default Header;
