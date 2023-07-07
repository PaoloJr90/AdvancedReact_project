import React from "react";
import { webSiteInfoDB } from "../common/webSiteInfoDB";
import NavItem from "./NavItem";
import "./styles/footer.scss";
import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsVimeo, BsTwitter } from "react-icons/bs";
import { BiMap, BiPhone, BiMailSend } from "react-icons/bi";

const Footer = () => {
  const { footerNavigation, footerNavigation1, footerNavigation2 } =
    webSiteInfoDB;
  return (
    <footer className="footer">
      <div>
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
          <Link to="https://vimeo.com" className="logos">
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
          <dt className="contact-us">
            CONTACT US
            <dl>{footerNavigation2.adress}</dl>
            <Link to="https://www.google.ca/maps/place/Ash+Dr,+East+Shannon,+SD+57772,+USA/@43.1778084,-102.3295983,17z/data=!3m1!4b1!4m6!3m5!1s0x877c096bdc93a297:0xc3ec93524ea4b557!8m2!3d43.1778084!4d-102.3270234!16s%2Fg%2F11rxwlbdkx?hl=en&entry=ttu">
              <BiMap className="icons" />
            </Link>
            <BiPhone className="icons"></BiPhone>
            <dl>{footerNavigation2.phone}</dl>
            <Link to={`mailto:${footerNavigation2.email}`}>
              <dl>{footerNavigation2.email}</dl>
              <BiMailSend className="icons" />
            </Link>
          </dt>
        </div>
        <hr></hr>
        <small className="copyright">COPYRIGHT © 2022 MIRALOU</small>
        <small className="rights">ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  );
};

export default Footer;

//
