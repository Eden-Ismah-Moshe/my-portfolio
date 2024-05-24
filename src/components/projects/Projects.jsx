import React from "react";
import "./projects.css";
import PIC1 from "../../assets/stepper.jpg";
import PIC2 from "../../assets/instaguard.png";
import PIC3 from "../../assets/portfolio.jpg";

const data = [
  {
    id: 1,
    image: PIC1,
    title: "Stepper",
    description:
      "Stepper is a workflow/pipeline system that enables the assembly of different scenarios from common components, including executing them and producing required results.",
    github: "https://github.com/Eden-Ismah-Moshe/Stepper-V3-Client_Server",
    demo: "https://github.com/Eden-Ismah-Moshe/Stepper-V3-Client_Server",
  },
  {
    id: 2,
    image: PIC2,
    title: "InstaGuard",
    description:
      "InstaGuard is a web application designed to address the growing concern of fake accounts on Instagram, which often lead to scams and catfishing, particularly alarming for parents and users alike.",
    github: "https://github.com/InstaGuard/InstaGuard",
    demo: "https://github.com/InstaGuard/InstaGuard",
  },
  {
    id: 3,
    image: PIC3,
    title: "Portfolio",
    description:
      "Portfolio is a compilation of my academic and professional materials that exemplifies my beliefs, skills, qualifications, education, training, and experiences. It provides insight into my personality and work ethic.",
    github: "https://github.com/Eden-Ismah-Moshe/my-portfolio",
    demo: "https://github.com/Eden-Ismah-Moshe/my-portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h4>My Recent Work</h4>
      <h2>Projects</h2>

      <div className="container projects_container">
        {data.map((project) => (
          <article key={project.id} className="project_card">
            <div className="project_card_image">
              <img src={project.image} alt="" />
            </div>
            <h3>{project.title}</h3>
            <small>{project.description}</small>
            <div className="project_card_cta">
              <a href={project.github} className="btn" target="_blank">
                GitHub
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

/*View Project in GitHub*/
/* View Live Demo*/

export default Projects;
