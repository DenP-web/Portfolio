import React from "react";

import { ILink } from "../../../models";
import styles from "./BurgerNav.module.scss";

import { NavList } from "../..";
import classNames from "classnames";

interface BurgerMenuProps {
  navigationLinks: ILink[];
  isOpen: boolean;
  toggleMenu: () => void
}

const BurgerNav: React.FC<BurgerMenuProps> = ({ navigationLinks, isOpen, toggleMenu }) => {
  const menuClasses = classNames({
    [styles.burgerMenu]: true,
    [styles.show]: isOpen,
  });
  return (
    <div className={menuClasses}>
      <NavList links={navigationLinks} toggleMenu={toggleMenu} />
    </div>
  );
};

export default BurgerNav;
