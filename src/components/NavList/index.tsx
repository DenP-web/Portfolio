import React from "react";

import styles from './NavList.module.scss'

import { ILink } from "../../models";
import { Link } from "react-router-dom";

interface NavListProps {
  links: ILink[];
}

const NavList: React.FC<NavListProps> = ({ links }: NavListProps) => {
  return (
    <ul className={styles.list}>
      {links.map((link: ILink, index: number) => (
        <li key={index}>
          {link.to !== undefined ? (
            <Link className={styles.link} to={link.to}>{link.text}</Link>
          ) : (
            <a className={styles.socialLink} href={link.href}></a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
