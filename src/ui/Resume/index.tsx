import React from "react";
import classNames from "classnames";

import styles from "./Resume.module.scss";

import cv from "/images/cv.webp";

const Resume: React.FC = () => {
  return (
    <div className={classNames(styles.cv, "scale-anim")}>
      <img src={cv} alt="My CV" />
    </div>
  );
};

export default Resume;
