import React from 'react'
import { Sidebar, SidebarGroup } from './ui/sidebar'
import NavDashboard from './NavDashboard'
import NavOrganizational from './NavOrganizational'
import NavPersonal from './NavPersonal'

const AppSidebar = () => {
  return (
      <Sidebar>
          <div className='p-4 flex items-center gap-4'>
            <div className='bg-white p-4 w-fit text-black rounded-2xl'>
              Logo
            </div>
            <div className='font-semibold text-white'>
              <h1>CMS Project #20</h1>
            </div>
          </div>
          <div>
            <SidebarGroup>
              <NavDashboard />
              <NavOrganizational />
              <NavPersonal />
            </SidebarGroup>
          </div>
      </Sidebar>
  )
}

export default AppSidebar