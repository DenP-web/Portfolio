import React from "react";
import classNames from "classnames";

import { AccentLink, SocialLink } from "../../ui";

import styles from "./ProjectCard.module.scss";
import { IProject } from "../../models";

interface ProjectCardProps extends IProject {
  animIndex: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  technologies,
  imgUrl,
  animIndex,
  gitUrl
}) => {
  return (
    <div
      className={classNames(styles.card, "slide-left-anim")}
      style={{ "--anim-order": animIndex } as React.CSSProperties}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles["tech-list"]}>
          {technologies.map((tech: string, index: number) => (
            <li key={index}>
              <span>{tech}</span>
            </li>
          ))}
        </ul>
        <SocialLink
          classes={["socialLink", "socialLink--github", "mb--bottom"]}
          href={gitUrl}
          srText={"Link on project github repository"}
        />
        <AccentLink href={href}>check my work</AccentLink>
      </div>
      <div className={styles.image}>
        <img src={imgUrl} alt="Image of first section of the web page" />
      </div>
    </div>
  );
};

export default ProjectCard;
