import React from "react";
import styles from "./CertificatImg.module.scss";
import { ICertificat } from "../../models";
import classNames from "classnames";

interface CertificatImgProps {
  certificat: ICertificat;
}

const CertificatImg: React.FC<CertificatImgProps> = ({ certificat }) => {
  return (
    <li
      className={classNames(styles.item, "slide-left-anim")}
      style={{ "--anim-order": certificat.id }}
    >
      <img src={certificat.imgUrl} alt={certificat.alt} />
    </li>
  );
};

export default CertificatImg;
