import React from "react";
import "./project-card.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i className="bi bi-box-arrow-up-right"></i>Website
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i className="bi bi-github"></i>Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag" key={tag}>{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" alt={project.title} />
    </div>
  );
}

export default ProjectCard;
