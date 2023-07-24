import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="www.linkedin.com/in/jayant-batra-933104219" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/JayantBatra" target="_blank">
        <BsGithub />
      </a>
      <a href="https://leetcode.com/Jayant_Batra/" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
