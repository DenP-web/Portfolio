import React, { ReactNode } from "react";

import styles from "./DownloadBtn.module.scss";
import classNames from "classnames";

interface DownloadBtnProps {
  fileName: string;
  href: string;
  children: ReactNode;
}

const DownloadBtn: React.FC<DownloadBtnProps> = ({
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

export default DownloadBtn;
