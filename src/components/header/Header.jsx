import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Subject.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Jayant Batra</h1>
        <h5 className="text-light">
          {""}An enthusiastic final-year college student with a passion for
          problem-solving and development, fueled by a strong desire to learn
          and embrace new opportunities.
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
