import React, { useEffect } from "react";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>Hello I'm</h3>
        <h1>Eden Ismah-Moshe</h1>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
