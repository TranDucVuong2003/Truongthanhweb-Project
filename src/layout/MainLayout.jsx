import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

function MainLayout() {
  return (
    <div>
      <Outlet />
      <ScrollToTop />
    </div>
  )
}

export default MainLayout
