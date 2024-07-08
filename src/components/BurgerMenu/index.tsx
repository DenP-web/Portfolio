import React, { useState } from 'react'
import { ILink } from '../../models'
import BurgerBtn from './BurgerBtn'
import BurgerNav from './BurgerNav'

interface BurgerMenuProps {
  navigationLinks: ILink[]
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({navigationLinks}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
     <BurgerBtn isOpen={isOpen} toggleMenu={toggleMenu} /> 
     <BurgerNav navigationLinks={navigationLinks} isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  )
}

export default BurgerMenu
