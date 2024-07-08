import React, { MouseEvent, ReactElement, useRef } from "react";
import Portal from "../Portal";

import styles from "./Modal.module.scss";

interface ModalProps {
  open: boolean;
  closeModal: () => void;
  children: ReactElement[];
}

const Modal: React.FC<ModalProps> = ({ open, closeModal, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  if (!open) {
    return null;
  }

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (contentRef.current && e.target === contentRef.current) {
      closeModal();
    }
  };

  return (
    <Portal>
      <div className={styles.backdrop} onClick={onClick} ref={contentRef}>
        <div className={styles.content}>
          {...children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
