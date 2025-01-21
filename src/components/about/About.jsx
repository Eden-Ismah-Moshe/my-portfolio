import React from "react";
import "./about.css";
import { aboutMe } from "../../data/constants.js";
import ME from "../../assets/me1.png";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineComputer } from "react-icons/md";
import { BiColor } from "react-icons/bi";

const About = () => {
  // Function to convert newlines to <br> elements
  const formatText = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiTeacher className="about_icon" />
              <h5>Experience</h5>
              <small>
                Programmer Instructor <br /> In QueenB
              </small>
            </article>
          </div>
          &nbsp;
          <p>{formatText(aboutMe)}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
