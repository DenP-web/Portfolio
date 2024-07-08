import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {ProjectItem} from "..";

import "swiper/css";


const projectsArr = [
  {title: 'Loft.ShopOnline', technologies: ['HTML', 'SCSS', 'GULP', 'JavaScript', 'WordPress', 'SwiperJS'], href: '#', imgUrl: '/src/assets/images/cer-react.webp'}
]


const ProjectsList: React.FC = () => {
  return (
    <Swiper
      spaceBetween={60}
      slidesPerView={1.3}
    >
      <SwiperSlide><ProjectItem {...projectsArr[0]} /></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default ProjectsList;
