import React from "react";
import { webSiteInfoDB } from "../common/webSiteInfoDB";
import NavItem from "./NavItem";
import "./styles/footer.scss";
import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsVimeo, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const { footerNavigation, footerNavigation1 } = webSiteInfoDB;
  return (
    <footer className="footer">
      <Link to="/home" className="logo">
        M<span className="hidden">iralou</span>
      </Link>
      <p className="paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <div className="social-media">
        <Link to="https://facebook.com" className="logo">
          <ImFacebook />
        </Link>
        <Link to="https://instagram.com" className="logo">
          <BsInstagram />
        </Link>
        <Link to="https://viemo.com" className="logo">
          <BsVimeo />
        </Link>
        <Link to="https://twitter.com" className="logo">
          <BsTwitter />
        </Link>
      </div>
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
