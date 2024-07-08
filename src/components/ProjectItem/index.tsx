import React from "react";

import styles from "./ProjectItem.module.scss";
import { AccentBtn } from "../../ui";

interface ProjectItem {
  href: string;
  title: string;
  technologies: string[];
  imgUrl: string;
}

const ProjectItem: React.FC<ProjectItem> = ({
  href,
  title,
  technologies,
  imgUrl,
}) => {
  return (
    <>
      <div className={styles.left}>
        <h4 className={styles.title}>{title}</h4>
        <ul>
          {technologies.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>

        <AccentBtn href={href}>check my work</AccentBtn>
      </div>
      <div className={styles.right}>
        <img src={imgUrl} alt="Image of first section of the web page" />
      </div>
    </>
  );
};

export default ProjectItem;
