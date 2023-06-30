import React from "react";
import { useState } from "react";

const Hamburger = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((prev) => {
      setMobileMenu(!prev);
    });
  };

  return (
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
  );
};

export default Hamburger;
