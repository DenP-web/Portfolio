import React from "react";
import styles from "./SocialLink.module.scss";
import classNames from "classnames";

interface SocialLinkProps {
  classes: string[];
  href: string;
  srText: string;
  index?: number;
}

const cx = classNames.bind(styles);

const SocialLink: React.FC<SocialLinkProps> = ({
  classes,
  href,
  srText,
  index = 0,
}) => {
  const className = cx({
    "slide-left-anim": true,
    ...classes.reduce((acc, cls) => ({ ...acc, [styles[cls]]: true }), {}),
  });

  return (
    <a
      className={className}
      href={href}
      style={{ "--anim-order": index } as React.CSSProperties}
    >
      <span className="sr-only">{srText}</span>
    </a>
  );
};

export default SocialLink;
