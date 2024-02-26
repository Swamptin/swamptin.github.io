import React from "react";
import { BsLinkedin, BsMastodon } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/eoghan-o-brien-41403911/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/swamptin"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://freeradical.zone/@swamptin"
        target="_blank"
        rel="noreferrer"
      >
        <BsMastodon />
      </a>
    </div>
  );
};

export default HeaderSocials;
