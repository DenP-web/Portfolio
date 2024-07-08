import React, { ReactNode } from 'react'
import styles from './BigTitle.module.scss'
import classNames from 'classnames'

interface BigTitleProps {
  children: ReactNode
}

const BigTitle:React.FC<BigTitleProps> = ({children}) => {
  return (
    <h2 className={classNames(styles.title, 'fade-out-anim')}>
      {children}
    </h2>
  )
}

export default BigTitle
