import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

const RootPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default RootPage
