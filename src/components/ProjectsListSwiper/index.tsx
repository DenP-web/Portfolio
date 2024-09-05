import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectItem } from "..";

import { IProject } from "../../models";

import "swiper/css";

interface ProjectsListSwiperProps {
  projects: IProject[];
}

const ProjectsListSwiper: React.FC<ProjectsListSwiperProps> = ({
  projects,
}) => {
  return (
    <Swiper spaceBetween={60} slidesPerView={1.5}>
      {projects.map((item: IProject, animIndex) => (
        <SwiperSlide key={item.id}>
          <ProjectItem {...item} animIndex={animIndex} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsListSwiper;
