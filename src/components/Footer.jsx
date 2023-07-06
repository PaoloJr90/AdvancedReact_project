import React from "react";
import { webSiteInfoDB } from "../common/webSiteInfoDB";
import NavItem from "./NavItem";
import "./styles/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const { footerNavigation, footerNavigation1 } = webSiteInfoDB;
  return (
    <footer className="container">
      <Link to="/home" className="logo">
        M<span className="hidden">iralou</span>
      </Link>
      <p className="information">
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
      <p className="quick-links">
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
      <hr></hr>
      <small className="copyright">COPYRIGHT © 2022 MIRALOU</small>
      <small className="rights">ALL RIGHTS RESERVED</small>
    </footer>
  );
};

export default Footer;
