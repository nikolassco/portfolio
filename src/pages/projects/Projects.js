import React from 'react';
import styles from './Projects.module.css';

import { Link } from "react-router-dom";

// import imgDelivery from "../../img/imgDelivery.png";

import { projectsList } from '../../data/projects';

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>Aqui estão os meus projetos</h1>
      <div className={styles.cards}>
        {projectsList && projectsList.map((project) => (
          <div key={project.id} className={styles.cover}>
            <h2>{project.name.toUpperCase()}</h2>
            <img src={project.img} alt="landing page delivery" />
            <Link to={`/project/${project.id}`}>Ver detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
