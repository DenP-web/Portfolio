import React from "react";

import { CustomLink, SocialLink } from "../../ui";

import styles from "./NavList.module.scss";

import { ILink } from "../../models";

interface NavListProps {
  links: ILink[];
  toggleMenu?: () => void;
}

const NavList: React.FC<NavListProps> = ({ links, toggleMenu }) => {
  return (
    <ul className={styles.list}>
      {links.map((link: ILink, index: number) => (
        <li key={link.id}>
          {link.to !== undefined ? (
            <CustomLink onClick={toggleMenu} to={link.to} text={link.text!} />
          ) : (
            <SocialLink
              classes={link.className!}
              href={link.href!}
              srText={link.srText!}
              index={index}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
