import React from "react";
import { BigTitle } from "../../ui";

import styles from './Projects.module.scss'
import ProjectsList from "../../components/ProjectsList";

const Projects: React.FC = () => {
  return (
    <section className={styles.sectionProjects}>
      <BigTitle>PROJECTS</BigTitle>
      <ProjectsList />
    </section>
  );
};

export default Projects;
