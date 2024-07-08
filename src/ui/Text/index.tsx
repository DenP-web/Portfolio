import React, { ReactNode } from 'react'
import styles from './Text.module.scss'
import classNames from 'classnames'


interface TextProps {
  children: ReactNode
}

const Text: React.FC<TextProps> = ({children}) => {
  return (
    <div className={classNames(styles.text, 'scale-anim')}>
      <p>{children}</p>
    </div>
  )
}

export default Text
