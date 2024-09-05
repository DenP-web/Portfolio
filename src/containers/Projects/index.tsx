import React, { useEffect, useState } from "react";

import { BigTitle } from "../../ui";
import { IProject } from "../../models";
import { ProjectListScroll, ProjectsListSwiper } from "../../components";

import styles from "./Projects.module.scss";

const projectsArr: IProject[] = [
  {
    id: 1,
    title: "DeDigger",
    technologies: [
      "ReactJS",
      "TypeScript",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "mongoose",
      "NextUI",
      "TailwindCSS",
      "SocketIO",
    ],
    href: "https://small-social.onrender.com",
    imgUrl: "/images/projects/DeDigger.png",
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
    href: "https://loftshoponline.com.ua/",
    imgUrl: "/images/projects/loft.png",
  },
  {
    id: 3,
    title: "BudBaza",
    technologies: [
      "HTML",
      "SCSS",
      "GULP",
      "JavaScript",
      "WordPress",
      "SwiperJS",
    ],
    href: "https://budbaza.net/",
    imgUrl: "/images/projects/budBaza.png",
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
