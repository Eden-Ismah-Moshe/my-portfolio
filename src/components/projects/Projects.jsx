import React, { useState, useEffect } from "react";
import "./projects.css";
import { projectsData } from "../../data/constants.js";

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
        {projectsData.map((project) => (
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
