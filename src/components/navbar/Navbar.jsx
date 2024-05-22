import React from "react";
import "./navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { GrUserFemale } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { GiBlackBook } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <GrUserFemale />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#education"
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <GiBlackBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TfiWrite />
      </a>
    </nav>
  );
};

export default Navbar;
