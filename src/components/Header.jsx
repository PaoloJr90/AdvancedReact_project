import React, { useState, useContext } from "react";
import ProductContext from "./ProductContext";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Hamburger from "./Hamburger";
import { FaSistrix, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import "./styles/header.scss";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { addWishlistsList } = useContext(ProductContext);
  const { addCartsList } = useContext(ProductContext);

  return (
    <header className="header">
      <div className="header-wrapper container">
        <Link to="/home" className="logo">
          M<span className="hidden">iralou</span>
        </Link>
        <NavBar navMenu="dekstop-menu" mobileMenu={mobileMenu} />
        <div className="nav-buttons">
          <button>
            <FaSistrix
              size={20}
              className="button"
              style={{ color: "#0e0e0e" }}
            />
          </button>
          <Link to="/wishlist">
            <FaRegHeart
              size={20}
              className="button"
              style={{ color: "#0e0e0e" }}
            />
            <span className="counter">{addWishlistsList.length}</span>
          </Link>
          <Link to="/cart">
            {addCartsList.length > 0 ? (
              <IoCartSharp
                size={20}
                className="button"
                style={{ color: "#0e0e0e" }}
              />
            ) : (
              <IoCartOutline
                size={20}
                className="button"
                style={{ color: "#0e0e0e" }}
              />
            )}
            <span className="counter">{addCartsList.length}</span>
          </Link>
        </div>
        <Hamburger mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <NavBar navMenu="mobile-menu" mobileMenu={mobileMenu} />
      </div>
    </header>
  );
}

export default Header;
