import React from "react";
import styles from "./SocialLink.module.scss";
import classNames from "classnames";

interface SocialLink {
  classes: string[];
  href: string;
  srText: string;
  index: number;
}

const cx = classNames.bind(styles);

const SocialLink: React.FC<SocialLink> = ({ classes, href, srText, index }) => {
  const className = cx({
    "slide-left-anim": true,
    ...classes.reduce((acc, cls) => ({ ...acc, [styles[cls]]: true }), {}),
  });

  return (
    <a className={className} href={href} style={{ "--anim-order": index }}>
      <span className="sr-only">{srText}</span>
    </a>
  );
};

export default SocialLink;
