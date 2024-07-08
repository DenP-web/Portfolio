import React from "react";

import { Logo } from "../../ui";
import { BurgerMenu, NavList } from "..";

import styles from "./Menu.module.scss";
import { ILink } from "../../models";

interface MenuProps {
  navigationLinks: ILink[];
  socialLinks: ILink[];
}

const Menu: React.FC<MenuProps> = ({ navigationLinks, socialLinks }) => {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <div className={styles.wrapper}>
        <NavList links={socialLinks} />
        <BurgerMenu navigationLinks={navigationLinks} />
      </div>
    </nav>
  );
};

export default Menu;
