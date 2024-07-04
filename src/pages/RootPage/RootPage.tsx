import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";

import { Wrapper } from "./styles";

const RootPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

export default RootPage;
