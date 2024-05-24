import React from "react";
import "./navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { GrUserFemale } from "react-icons/gr";
import { IoCloudDoneOutline } from "react-icons/io5";
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
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <IoCloudDoneOutline />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
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
