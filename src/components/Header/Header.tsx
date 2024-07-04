import React from "react";
import Icon from "../Icon/Icon";

import { Logo, Nav } from "./styles";
import NavList from "../NavList/NavList";
import { ILink } from "../../models";

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
      <Nav>
        <Logo>
          <Icon id="logo" />
        </Logo>
        <NavList links={navigationLinks} />
        <NavList links={socialLinks} />
      </Nav>
    </header>
  );
};

export default Header;
