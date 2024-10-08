import React from "react";

import {Modal} from "../../components";
import { ButtonClose } from "../../ui";

import styles from './BigImgModal.module.scss'

interface BigImgModalProps {
  imgUrl: string;
  alt: string;
  openModal: boolean;
  closeModal: () => void
}

const BigImgModal: React.FC<BigImgModalProps> = ({
  imgUrl,
  alt,
  openModal,
  closeModal
}) => {
  return (
    <Modal open={openModal} closeModal={closeModal}>
      <ButtonClose onClick={closeModal} />
      <div className={styles.image}>
        <img src={imgUrl} alt={alt} />
      </div>
    </Modal>
  );
};

export default BigImgModal;
