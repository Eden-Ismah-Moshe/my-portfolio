import React from "react";
import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import {
  linkedinLink,
  githubLink,
  facebookLink,
  instagramLink,
} from "../../data/constants.js";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="footer">
        <a href={"#"} className="footer_logo">
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
          <a href={linkedinLink} target="_blank">
            <FaLinkedinIn size={18} />
          </a>
          <a href={githubLink} target="_blank">
            <IoLogoGithub size={18} />
          </a>
          <a href={facebookLink} target="_blank">
            <FaFacebookF size={18} />
          </a>
          <a href={instagramLink} target="_blank">
            <FaInstagram size={18} />
          </a>
        </div>

        <div className="footer_copyright">
          <small>&copy; 2024 Eden Ismah-Moshe. All rights reserved.</small>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
