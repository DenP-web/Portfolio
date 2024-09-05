import React, { ReactNode } from "react";

import styles from "./AccentLink.module.scss";
import classNames from "classnames";

interface AccentLinkProps {
  fileName?: string;
  href: string;
  children: ReactNode;
}

const AccentLink: React.FC<AccentLinkProps> = ({
  fileName,
  href,
  children,
}) => {
  return (
    <a
      className={classNames("scale-anim", styles.btn)}
      href={href}
      download={fileName}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default AccentLink;
