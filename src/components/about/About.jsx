import React from "react";
import "./about.css";
import ME from "../../assets/me1.png";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineComputer } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>

      <div className=" container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>

        <div className="about_contant">
          <div className="about_cards">
            <article className="about_card">
              <GiTeacher className="about_icon" />
              <h5>Experience</h5>
              <small>
                programmer Instructor <br /> In QueenB
              </small>
            </article>
            <article className="about_card">
              <MdOutlineComputer className="about_icon" />
              <h5>Hackathon</h5>
              <small>Participated in QueenB Hackathon</small>
            </article>
          </div>
          &nbsp;
          <p>
            I'm Eden, I'm a bachelor's student in computer science and I'm
            excited to find my first job in the high-tech world. In addition to
            my degree, I take part in the QueenB association where I guide
            eighth grade girls in the first stages of learning to write code and
            mainly show them that they too can be programmers and even enjoy it.
            <br />
            Beyond studies and training, I am passionate about sports, food and
            spending as much time as possible with the most perfect nephews in
            the world.
            <br />
            <br />
            Right now my main goal is to find a job where I can apply my skills,
            a job where I can learn anew every day and integrate into a company
            where I can develop professionally and personally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
