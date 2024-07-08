import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { ROUTES } from "../../constants/routes";

import logo from "../../assets/images/logo.svg";

import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <Link to={ROUTES.ABOUT} className={classNames(styles.logo, 'fade-out-anim')}>
      <img src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
