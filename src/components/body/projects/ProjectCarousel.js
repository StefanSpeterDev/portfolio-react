import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { ProjectCarouselData } from "components/data/projects-carousel";
import "./project-carousel.css";

function ProjectCarousel() {
  const data = ProjectCarouselData;

  return (
    <div>
      <Carousel show={2.5} slide={1} swiping={true} transition={0.5} useArrowKeys={true}>
        {data.map((project) => {
          return (
            <a href={project.demo} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.title}
                key={project.id}
                className="img-slide"
              />
            </a>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ProjectCarousel;
