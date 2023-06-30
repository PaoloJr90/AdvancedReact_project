import React, { useState } from "react";
import { webSiteInfoDB } from "../common/webSiteInfoDB";
import NavItem from "./NavItem";

const Footer = () => {
  const { footerNavigation } = webSiteInfoDB;
  return (
    <footer className="container">
      <ul>
        {footerNavigation.map((item, index) => {
          return (
            <NavItem
              key={`menu-list-${index}`}
              url={item.link}
              title={item.title}
            />
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
