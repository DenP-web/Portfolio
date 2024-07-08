import React from "react";
import styles from "./CustomLink.module.scss";
import { Link } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  text: string;
  onClick?: ()=> any
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, text, onClick}) => (
  <Link className={styles.link} to={to} onClick={onClick}>
    {text}
  </Link>
);

export default CustomLink;
