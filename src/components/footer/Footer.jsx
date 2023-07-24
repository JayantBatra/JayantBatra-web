import React from "react";
import "./footer.css";
import { SiLeetcode } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        JB
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href="#services">Services</a></li> */}
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        {/* <a href='https://facebook.com'><FaFacebookF/></a> */}
        <a href="https://leetcode.com/Jayant_Batra/">
          <SiLeetcode />
        </a>
        <a href="https://twitter.com/Jayant_Batra025">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          Made with <FaHeart />{" "}
        </small>
        <br />
        <small>&copy; Jayant Batra. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
