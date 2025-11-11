import AppChart from '@/components/AppChart'
import ListOrganization from '@/components/ListOrganization'
import ProjectDetail from '@/components/ProjectDetail'
import RecentlyActivity from '@/components/RecentlyActivity'
import { SiteHeader } from '@/components/SiteHeader'
import React from 'react'

const DashboardPage = () => {
  return (
      <div className='w-full'>
        <SiteHeader />
        <div className='p-4'>
          <ProjectDetail />
        </div>
        <div className='p-4'>
          <AppChart />
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 p-4 gap-4'>
          <RecentlyActivity />
          <ListOrganization />
        </div>
      </div>
  )
}

export default DashboardPage