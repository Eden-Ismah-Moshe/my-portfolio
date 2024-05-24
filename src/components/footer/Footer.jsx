import React from "react";
import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <a herf={"#"} className="footer_logo">
        Eden Ismah-Moshe
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#content">Content</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a herf="https://www.linkedin.com/in/edenim/" target="_blank">
          <FaLinkedinIn size={18} />
        </a>
        <a herf="https://github.com/Eden-Ismah-Moshe" target="_blank">
          <IoLogoGithub size={18} />
        </a>
        <a herf="https://www.facebook.com/ismahm1?locale=he_IL" target="_blank">
          <FaFacebookF size={18} />
        </a>
        <a herf="https://www.instagram.com/eden_im/" target="_blank">
          <FaInstagram size={18} />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; 2024 Eden Ismah-Moshe. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
