import React from "react";
import styles from "./CertificatImg.module.scss";

import classNames from "classnames";

interface CertificatImgProps {
  imgUrl: string,
  alt: string,
  indexAnim?: number
}

const CertificatImg: React.FC<CertificatImgProps> = ({ imgUrl, alt, indexAnim }) => {
  return (
    <li
      className={classNames(styles.item, "slide-left-anim")}
      style={{ "--anim-order": indexAnim }}
    >
      <img src={imgUrl} alt={alt} />
    </li>
  );
};

export default CertificatImg;
