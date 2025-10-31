import React from 'react'
import { Sidebar, SidebarContent } from './ui/sidebar'
import NavHeader from './NavHeader'
import NavContent from './NavContent'

const AppSidebar = () => {
  return (
      <Sidebar>
          <NavHeader />
          <NavContent />
      </Sidebar>
  )
}

export default AppSidebar