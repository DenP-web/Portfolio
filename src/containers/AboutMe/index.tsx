import React from "react";

import Text from "../../components/Text";
import AboutMeLinks from "./AboutMeLinks";

import styles from "./AboutMe.module.scss";
import BigTitle from "../../components/BigTitle/BigTitle";

const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div>
        <h3 className={styles.helloTitle}>Hello web company,</h3>
        <BigTitle>I’m Denys</BigTitle>
      </div>
      <div className={styles.flex}>
        <Text>
          I am a beginner developer specializing in website development. I am
          eager to learn new technologies and methods. I can work in a team,
          meet deadlines, and fulfill project requirements. My skills and
          motivation will add value to your development team. I would like to
          join and contribute to the success of the project.
        </Text>
        <AboutMeLinks />
      </div>
    </section>
  );
};

export default AboutMe;
