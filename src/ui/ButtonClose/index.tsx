import React from "react";

import styles from './ButtonClose.module.scss'

interface ButtonCloseProps {
  onClick: () => void;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({ onClick }) => {
  return <button className={styles.button} onClick={onClick} type="button"></button>;
};

export default ButtonClose;
