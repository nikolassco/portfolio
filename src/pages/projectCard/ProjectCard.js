import React from 'react';

import { useParams } from "react-router-dom";

import { projectsList } from '../../data/projects';


const ProjectCard = () => {
  const { id } = useParams();

  const numberId = Number.parseInt(id, 10);

  return (
    <div>
      {projectsList.filter((project) => project.id === numberId).map((project) => (
        <div key={project.id}>
          <p>{project.name}</p>
          <p>{project.explanation}</p>
          <p>{project.githubUrl}</p>
          <p>{project.pageLink}</p>
          <p>{project.img}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard;
