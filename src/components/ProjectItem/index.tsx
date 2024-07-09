import React from "react";
import classNames from "classnames";

import { AccentLink } from "../../ui";

import styles from "./ProjectItem.module.scss";

interface ProjectItemProps {
  href: string;
  title: string;
  technologies: string[];
  imgUrl: string;
  animIndex: number
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  href,
  title,
  technologies,
  imgUrl,
  animIndex
}) => {
  return (
    <div className={classNames(styles.flex, 'slide-left-anim')}  style={{"--anim-order": animIndex}}>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles["tech-list"]}>
          {technologies.map((tech: string, index: number) => (
            <li key={index}>
              <span>{tech}</span>
            </li>
          ))}
        </ul>
        <AccentLink href={href}>check my work</AccentLink>
      </div>
      <div className={styles.image}>
        <img src={imgUrl} alt="Image of first section of the web page" />
      </div>
    </div>
  );
};

export default ProjectItem;
