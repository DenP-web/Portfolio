import React, { ReactNode } from "react";

import styles from "./AccentBtn.module.scss";
import classNames from "classnames";

interface AccentBtnProps {
  fileName?: string;
  href: string;
  children: ReactNode;
}

const AccentBtn: React.FC<AccentBtnProps> = ({
  fileName,
  href,
  children,
}) => {
  return (
    <a
      className={classNames("scale-anim", styles.btn)}
      href={href}
      download={fileName}
    >
      {children}
    </a>
  );
};

export default AccentBtn;
