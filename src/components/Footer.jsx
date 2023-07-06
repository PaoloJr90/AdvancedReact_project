import React from "react";
import { webSiteInfoDB } from "../common/webSiteInfoDB";
import NavItem from "./NavItem";
import "./styles/footer.scss";

const Footer = () => {
  const { footerNavigation, footerNavigation1 } = webSiteInfoDB;
  return (
    <footer className="container">
      <p className="first-block">
        Information
        {footerNavigation.map((item, index) => {
          return (
            <NavItem
              key={`menu-list-${index}`}
              url={item.link}
              title={item.title}
            />
          );
        })}
      </p>
      <p className="second-block">
        Quick Links
        {footerNavigation1.map((item, index) => {
          return (
            <NavItem
              key={`menu-list-${index}`}
              url={item.link}
              title={item.title}
            />
          );
        })}
      </p>
      <small className="copyright">COPYRIGHT © 2022 MIRALOU</small>
      <small className="rights">ALL RIGHTS RESERVED</small>
    </footer>
  );
};

export default Footer;
