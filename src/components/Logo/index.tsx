import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
