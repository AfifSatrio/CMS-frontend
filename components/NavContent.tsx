import React from 'react'
import { SidebarGroup } from './ui/sidebar'
import NavDashboard from './NavDashboard'
import NavOrganizational from './NavOrganizational'
import NavPersonal from './NavPersonal'

const NavContent = () => {
  return (
    <div className=' h-full '>
        <SidebarGroup>
            <NavDashboard />
            <NavOrganizational />
            <NavPersonal />
        </SidebarGroup>
    </div>
  )
}

export default NavContent