import React from "react";
import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiC } from "react-icons/si";
import { SiCoursera } from "react-icons/si";

import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h4>What Skills I Have</h4>
      <h2>My Skills</h2>
      <div className="container development_experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_item">
              <FaHtml5 />
              <h4>HTML</h4>
            </article>
            <article className="experience_item">
              <FaCss3Alt />
              <h4>CSS</h4>
            </article>
            <article className="experience_item">
              <IoLogoJavascript />
              <h4>JavaScript</h4>
            </article>
            <article className="experience_item">
              <FaReact />
              <h4>React</h4>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_item">
              <SiCoursera />
              <h4>C</h4>
            </article>
            <article className="experience_item">
              <SiCplusplus /> <h4>C++</h4>
            </article>
            <article className="experience_item">
              <FaJava />
              <h4>Java</h4>
            </article>
            <article className="experience_item">
              <FaPython />
              <h4>Python</h4>
            </article>
          </div>
        </div>
      </div>
      &nbsp;
      <div className="container other_experience_container">
        <div className="experience_others">
          <h3>Others</h3>
          <div className="experience_content_others">
            <article className="experience_item">
              <FaGitAlt />
              <h4>Git</h4>
            </article>
            <article className="experience_item">
              <IoLogoGithub />
              <h4>GitHub</h4>
            </article>
            <article className="experience_item">
              <VscVscode />
              <h4>VS Code</h4>
            </article>
            <article className="experience_item">
              <SiPostman />
              <h4>Postman</h4>
            </article>
            <article className="experience_item">
              <SiJupyter />
              <h4>Jupyter</h4>
            </article>
            <article className="experience_item">
              <SiMongodb />
              <h4>Mongo DB</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
