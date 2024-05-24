import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};
/* <Experience />*/
/*<Contact />*/
export default App;
