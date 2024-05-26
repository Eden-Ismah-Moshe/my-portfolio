import React from "react";

const CTA = () => {
  return (
    <>
      <div className="cta">
        <a
          href="https://drive.google.com/file/d/1WPOxxu-nWKnNRE7MVfgMECp8pN2fIuU2/view?usp=drive_link"
          download
          className="btn btn-primary"
        >
          Download CV
        </a>

        <a href="#contact" className="btn download-btn">
          Let's Talk
        </a>

        <a href="#footer" className="btn download-btn">
          My Social Networks
        </a>
      </div>
    </>
  );
};

export default CTA;
