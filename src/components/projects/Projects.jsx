import React, { useState, useEffect } from "react";
import "./projects.css";
import PIC1 from "../../assets/stepper.jpg";
import PIC2 from "../../assets/instaguard.png";
import PIC3 from "../../assets/portfolio.jpg";

const data = [
  {
    id: 1,
    image: PIC1,
    title: "Stepper",
    place: "The Academic College of Tel Aviv-Yafo",
    tags: ["Java", "JavaFX"],
    description:
      "Stepper is a workflow/pipeline system that enables the assembly of different scenarios from common components, including executing them and producing required results.",
    github: "https://github.com/Eden-Ismah-Moshe/Stepper-V3-Client_Server",
    details:
      "Stepper is a workflow/pipeline system that enables the assembly of different scenarios (called flows) from common components (called steps), including executing them and producing required results. The project includes various UI clients: Client-server. It includes a component that manages users and permissions, serving multiple clients concurrently and collecting information and statistics on their progress. ",
  },
  {
    id: 2,
    image: PIC2,
    title: "InstaGuard",
    place: "QueenB x AppsFlyer Hackathon",
    tags: ["React", "Node.js"],
    description:
      "InstaGuard is a web application designed to address the growing concern of fake accounts on Instagram, which often lead to scams and catfishing, particularly alarming for parents and users alike.",
    github: "https://github.com/InstaGuard/InstaGuard",
    details:
      "InstaGuard is a web application designed to address the growing concern of fake accounts on Instagram, which often lead to scams and catfishing, particularly alarming for parents and users alike.",
  },
  {
    id: 3,
    image: PIC3,
    title: "Portfolio",
    place: "",
    tags: ["React", "Node.js"],
    description:
      "Portfolio is a compilation of my academic and professional materials that exemplifies my beliefs, skills, qualifications, education, training, and experiences. It provides insight into my personality and work ethic.",
    github: "https://github.com/Eden-Ismah-Moshe/my-portfolio",
    details:
      "Portfolio is a compilation of my academic and professional materials that exemplifies my beliefs, skills, qualifications, education, training, and experiences. It provides insight into my personality and work ethic.",
  },
];

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close_button" onClick={onClose}>
          &times;
        </span>
        <h3 style={{ textAlign: "center" }}>{project.title}</h3>
        <h4 style={{ textAlign: "center" }}>{project.place}</h4>

        <div className="tags">
          {project.tags.map((tag) => (
            <div className="tag" key={tag}>
              <div style={{ padding: "5px" }}>{tag}</div>
            </div>
          ))}
        </div>
        <img src={project.image} alt={project.title} />
        <p>{project.details}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedProject]);

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h4>My Recent Work</h4>
      <h2>Projects</h2>

      <div className="container projects_container">
        {data.map((project) => (
          <article key={project.id} className="project_card">
            <div className="project_card_image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <small>{project.description}</small>
            <div className="project_card_cta">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <button
                className="btn btn-primary"
                style={{ fontSize: "17px" }}
                onClick={() => handleDetailsClick(project)}
              >
                Details
              </button>
            </div>
          </article>
        ))}
      </div>

      <Modal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;
