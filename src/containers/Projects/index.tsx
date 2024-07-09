import React, { useEffect, useState } from "react";

import { BigTitle } from "../../ui";
import { IProject } from "../../models";
import { ProjectListScroll, ProjectsListSwiper } from "../../components";

import styles from "./Projects.module.scss";

const projectsArr: IProject[] = [
  {
    id: 1,
    title: "Loft.ShopOnline",
    technologies: [
      "HTML",
      "SCSS",
      "GULP",
      "JavaScript",
      "WordPress",
      "SwiperJS",
    ],
    href: "#",
    imgUrl: "/src/assets/images/projects/1.webp",
  },

  {
    id: 2,
    title: "Loft.ShopOnline",
    technologies: [
      "HTML",
      "SCSS",
      "GULP",
      "JavaScript",
      "WordPress",
      "SwiperJS",
    ],
    href: "#",
    imgUrl: "/src/assets/images/projects/1.webp",
  },

  {
    id: 3,
    title: "Loft.ShopOnline",
    technologies: [
      "HTML",
      "SCSS",
      "GULP",
      "JavaScript",
      "WordPress",
      "SwiperJS",
    ],
    href: "#",
    imgUrl: "/src/assets/images/projects/1.webp",
  },
];

const Projects: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };
    setIsMobile(window.innerWidth <= 960);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.sectionProjects}>
      <BigTitle>PROJECTS</BigTitle>
      {isMobile ? (
        <ProjectListScroll projects={projectsArr} />
      ) : (
        <ProjectsListSwiper projects={projectsArr} />
      )}
    </section>
  );
};

export default Projects;
