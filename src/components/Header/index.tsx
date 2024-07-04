import React from "react";

import Logo from "../Logo";
import NavList from "../NavList";

import { ILink } from "../../models";

import styles from './Header.module.scss'

const Header: React.FC = () => {
  const socialLinks: ILink[] = [ // In future this data will come from server
    { href: "#", iconId: "telegram" },
    { href: "#", iconId: "linked" },
    { href: "#", iconId: "github" },
  ];
  const navigationLinks: ILink[] = [ // In future this data will come from server
    { to: "/", text: "About" },
    { to: "/projects", text: "Projects" },
    { to: "/achievements", text: "Achievements" },
  ];  

  return (
    <header>
      <nav className={styles.navigation}>
        <Logo />
        <NavList links={navigationLinks} />
        <NavList links={socialLinks} />
      </nav>
    </header>
  );
};

export default Header;
