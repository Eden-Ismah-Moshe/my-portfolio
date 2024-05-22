import React from "react";
import CV from "../../assets/cv/Eden Ismah-Moshe CV.pdf";

const CTA = () => {
  return (
    <>
      <div className="cta">
        <a href={CV} download className="btn download-btn">
          Download CV
        </a>

        <a href="#contact" className="btn download-btn">
          Let's Talk
        </a>

        <a href="" className="btn download-btn">
          My Social Networks
        </a>
      </div>
    </>
  );
};

export default CTA;
