import React from 'react'
import PersonalProjectCard from './PersonalProjectCard'
import TotalOrganizationProjectCard from './TotalOrganizationProjectCard'
import TotalOrganizationCard from './TotalOrganizationCard'
import TotalCollaboratorCard from './TotalCollaboratorCard'

const ProjectDetail = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 ">
      <PersonalProjectCard />
      <TotalOrganizationProjectCard />
      <TotalOrganizationCard />
      <TotalCollaboratorCard />
    </div>
  )
}

export default ProjectDetail