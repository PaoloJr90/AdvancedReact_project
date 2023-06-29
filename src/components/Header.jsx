import React from "react";
import { useImmer } from "use-immer";

import Nav from "./Nav";
import { FaSistrix, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { webSiteInfoDB } from "../common/webSiteInfoDB.js";

import "./styles/header.scss";

function Header() {
  const { headerNavigation } = webSiteInfoDB;
  const [menu] = useImmer(headerNavigation);

  return (
    <header className="header">
      <div className="header-wrapper container">
        <p className="logo">
          M<span className="hidden">iralou</span>
        </p>
        <nav>
          <ul className="nav-menu">
            {menu.map((item, index) => {
              return (
                <Nav
                  key={`menu-list-${index}`}
                  url={item.link}
                  title={item.title}
                />
              );
            })}
          </ul>
        </nav>
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
        {/* TODO: Burger button */}
      </div>
    </header>
  );
}

export default Header;
