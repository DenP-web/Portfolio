import React from "react";
import styles from "./BurgerBtn.module.scss";
import classNames from "classnames";

interface BurgerBtnProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BurgerBtn: React.FC<BurgerBtnProps> = ({ isOpen, toggleMenu }) => {
  const classes = classNames({
    "slide-left-anim": true,
    [styles.burgerBtn]: true,
    [styles.open]: isOpen,
  });

  return (
    <button className={classes} onClick={toggleMenu} style={{ "--anim-order": 4 }}>
      <span className={styles.line}></span>
      <span className="sr-only">Button for open mobile menu</span>
    </button>
  );
};


export default BurgerBtn;
