import React from "react";
import { webSiteInfoDB } from "../common/webSiteInfoDB";
import NavItem from "./NavItem";
import "./styles/footer.scss";
import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsVimeo, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const { footerNavigation, footerNavigation1, footerNavigation2 } =
    webSiteInfoDB;
  return (
    <footer className="footer">
      <Link to="/home" className="logo">
        M<span className="hidden">iralou</span>
      </Link>
      <p className="paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="social-media">
        <Link to="https://facebook.com" className="logos">
          <ImFacebook />
        </Link>
        <Link to="https://instagram.com" className="logos">
          <BsInstagram />
        </Link>
        <Link to="https://viemo.com" className="logos">
          <BsVimeo />
        </Link>
        <Link to="https://twitter.com" className="logos">
          <BsTwitter />
        </Link>
      </div>
      <div className="info-links-contact">
        <p className="information">
          INFORMATION
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
          QUICK LINKS
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
        <p className="contact-us">CONTACT US</p>
        <p>
          {footerNavigation2.address}
          {footerNavigation2.phone}
          {footerNavigation2.email}
        </p>
      </div>
      <hr></hr>
      <small className="copyright">COPYRIGHT © 2022 MIRALOU</small>
      <small className="rights">ALL RIGHTS RESERVED</small>
    </footer>
  );
};

export default Footer;
