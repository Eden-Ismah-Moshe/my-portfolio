import React from "react";
import "./education.css";
import { GiTrafficCone } from "react-icons/gi";

const Education = () => {
  return (
    <section id="education">
      <h4>My Recent Studies</h4>
      <h2>Education</h2>

      <div className="under-construction">
        <h1>This part of the site is still under construction</h1>

        <GiTrafficCone size={50} />
        <GiTrafficCone size={50} />
      </div>
    </section>
  );
};

export default Education;
