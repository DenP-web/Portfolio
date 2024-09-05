import React, { useState } from "react";
import styles from "./CertificatImg.module.scss";

import classNames from "classnames";
import { BigImgModal } from "../../modals";

interface CertificatImgProps {
  imgUrl: string;
  alt: string;
  indexAnim?: number;
}

const CertificatImg: React.FC<CertificatImgProps> = ({
  imgUrl,
  alt,
  indexAnim,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFunc = (): void => {
    setOpenModal(true);
  };

  return (
    <>
      <li
        className={classNames(styles.item, "slide-left-anim")}
        style={{ "--anim-order": indexAnim } as React.CSSProperties}
      >
        <img src={imgUrl} alt={alt} onClick={openModalFunc} />
      </li>
      <BigImgModal
        imgUrl={imgUrl}
        openModal={openModal}
        alt={alt}
        closeModal={closeModal}
      />
    </>
  );
};

export default CertificatImg;
