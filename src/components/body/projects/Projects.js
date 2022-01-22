import Separator from 'components/common/separator/Separator';
import React from 'react'
import { ProjectData } from '../../data/projects'
import ProjectCard from './ProjectCard';
import './projects.css'

function Projects() {
    const data = ProjectData;
    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project) => {
                    return <ProjectCard project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects