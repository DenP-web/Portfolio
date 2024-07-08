import React from "react";

import styles from "./Resume.module.scss";

import cv from "../../assets/images/cv.webp";
import classNames from "classnames";

const Resume: React.FC = () => {
  return (
    <div className={classNames(styles.cv, "scale-anim")}>
      <img src={cv} alt="My CV" />
    </div>
  );
};

export default Resume;
