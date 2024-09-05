import React from "react";

import { BigTitle } from "../../ui";
import { IProject } from "../../models";
import { ProjectsList } from "../../components";

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
      "Prisma",
      "NextUI",
      "TailwindCSS",
      "SocketIO",
      "Jest",
      "React Testing Library",
    ],
    href: "https://small-social.onrender.com",
    gitUrl: "https://github.com/DenP-web/Small-social",
    imgUrl: "/images/projects/DeDigger.png",
  },
  {
    id: 2,
    title: "Task Chat",
    technologies: [
      "HTML",
      "CSS modules",
      "ReactJS",
      "TypeScript",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "mongoose",
      "SocketIO",
      "OAuth",
    ],
    href: "https://chat-sa6m.onrender.com",
    gitUrl: "https://github.com/DenP-web/Chat",
    imgUrl: "/images/projects/task-chat.png",
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
    gitUrl: "https://github.com/DenP-web/LoftShopOnline",
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
    gitUrl: "https://github.com/DenP-web/BydBaza",
    imgUrl: "/images/projects/budBaza.png",
  },
];

const Projects: React.FC = () => {
  return (
    <section className={styles.sectionProjects}>
      <BigTitle>PROJECTS</BigTitle>
      <ProjectsList projects={projectsArr} />
    </section>
  );
};

export default Projects;
