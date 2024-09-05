import React from "react";
import { IProject } from "../../models";
import ProjectCard from "../ProjectCard";

interface ProjectListScrollProps {
  projects: IProject[];
}

const ProjectList: React.FC<ProjectListScrollProps> = ({ projects }) => {
  return (
    <ul>
      {projects.map((project: IProject, index: number) => (
        <li key={project.id}>
          <ProjectCard {...project} animIndex={index} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
