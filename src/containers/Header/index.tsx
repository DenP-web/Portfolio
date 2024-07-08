import React from "react";

import { ILink } from "../../models";
import { ROUTES } from "../../constants/routes";
import { Menu } from "../../components";

import styles from './Header.module.scss'


const socialLinks: ILink[] = [
  // In future this data will come from server
  {
    id: 1,
    href: "#",
    srText: 'Link to my telegram',
    className: ["socialLink", "socialLink--telegram"],
  },
  {
    id: 2,
    href: "#",
    srText: 'Link to my linkedIn',
    className: ["socialLink", "socialLink--linked"],
  },
  {
    id: 3,
    href: '#',
    srText: 'Link to my github',
    className: ["socialLink", "socialLink--github"],
  },
];

const navigationLinks: ILink[] = [
  // In future this data will come from server
  { to: ROUTES.ABOUT, text: "About", id: 4 },
  { to: ROUTES.PROJECTS, text: "Projects", id: 5 },
  { to: ROUTES.ACHIEVEMENTS, text: "Achievements", id: 6 },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Menu
        navigationLinks={navigationLinks}
        socialLinks={socialLinks}
      />
    </header>
  );
};

export default Header;
