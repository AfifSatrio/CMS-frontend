import EmptyOrganizationPage from '@/components/EmptyOrganizationPage'
import { SiteHeader } from '@/components/SiteHeader'
import { listOrganizationData } from '@/constants'
import React from 'react'

const organizationData = listOrganizationData || []

const OrganizationalPage = () => {
  return (
    <div className='w-full'>
        <SiteHeader />
        <div>
          {organizationData?.length ? (
            <div>
              OrganizationalPage
            </div>
          ) : (
            <div className='p-4'>
              <EmptyOrganizationPage />
            </div>
          )}
        </div>
    </div>
  )
}

export default OrganizationalPage