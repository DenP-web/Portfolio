import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../containers";

import styles from './RootPage.module.scss'

const RootPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootPage;
