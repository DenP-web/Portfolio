import React, { ReactElement } from "react";
import Portal from "../Portal";

import styles from "./Modal.module.scss";

interface ModalProps {
  open: boolean;
  closeModal: () => void;
  children: ReactElement;
}

const Modal: React.FC<ModalProps> = ({ open, closeModal, children }) => {
  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.backdrop}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
