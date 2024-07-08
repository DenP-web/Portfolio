import React from "react";

import { BigTitle, DownloadBtn, Resume, Text } from "../../ui";
import { Certificates } from "../../components";

import styles from "./Achievements.module.scss";

const Achievements: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <BigTitle>RESUME</BigTitle>
        <Text>
          I am a beginner developer specializing in website development. I am
          eager to learn new technologies and methods.
        </Text>
        <Certificates />
      </div>

      <div className={styles.right}>
        <Resume />
        <DownloadBtn href="/CV.pdf" fileName="Denys_Popov_CV.pdf">
          Download CV
        </DownloadBtn>
      </div>
    </div>
  );
};

export default Achievements;
