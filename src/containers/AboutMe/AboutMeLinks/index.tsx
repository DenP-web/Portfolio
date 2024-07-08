import React from "react";
import { Link } from "react-router-dom";
import styles from './AboutMeLinks.module.scss'

const AboutMeLinks: React.FC = () => {
  return (
    <ul className="scale-anim">
      <li>
        <Link className={`${styles.link} ${styles['link--portfolio']}`} to="/achievements">
          <span>If you want my CV</span>
        </Link>
      </li>
      <li>
        <Link className={`${styles.link} ${styles['link--achiev']}`} to="/projects">
          <span>Or my projects</span>
        </Link>
      </li>
    </ul>
  );
};

export default AboutMeLinks;
