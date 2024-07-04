import React from "react";
import { List, SocialLink, StyledLink } from "./styled";

import Icon from "../Icon/Icon";

import { ILink } from "../../models";

interface NavListProps {
  links: ILink[];
}

const NavList: React.FC<NavListProps> = ({ links }: NavListProps) => {
  return (
    <List>
      {links.map((link: ILink, index: number) => (
        <li key={index}>
          {link.to !== undefined ? (
            <StyledLink to={link.to}>{link.text}</StyledLink>
          ) : (
            <SocialLink href={link.href}>
              <Icon id={link.iconId!} />
            </SocialLink>
          )}
        </li>
      ))}
    </List>
  );
};

export default NavList;
