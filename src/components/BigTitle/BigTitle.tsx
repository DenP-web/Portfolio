import React, { ReactNode } from 'react'
import styles from './BigTitle.module.scss'

interface BigTitleProps {
  children: ReactNode
}

const BigTitle:React.FC<BigTitleProps> = ({children}) => {
  return (
    <h2 className={styles.title}>
      {children}
    </h2>
  )
}

export default BigTitle
