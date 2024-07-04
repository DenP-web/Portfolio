import React, { ReactNode } from 'react'
import styles from './Text.module.scss'


interface TextProps {
  children: ReactNode
}

const Text: React.FC<TextProps> = ({children}) => {
  return (
    <div className={styles.text}>
      <p>{children}</p>
    </div>
  )
}

export default Text
