import Separator from "components/common/separator/Separator";
import React from "react";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectCarousel from "./ProjectCarousel";
import "./projects.css";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Main Projects</label>
      <div className="project-description">
        <p>
          Over the past three years I worked on 20+ projects in different
          sectors. <br />
          At the end I always give my best to deliver a high end product with
          continuous monitoring to our customers.
        </p>
        <p>
          This list summarizes the projects that helped me grow during my
          career. I've developed a lot of my technical and project management
          skills.
        </p>
      </div>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
      <div className="wrapper-projects">
        <h4>Other websites I've worked on!</h4>
        <div className="project-carousel">
          <ProjectCarousel />
        </div>
      </div>
    </div>
  );
}

export default Projects;
