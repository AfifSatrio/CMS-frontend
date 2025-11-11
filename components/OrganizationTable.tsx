import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { listOrganizationData } from '@/constants'
import { LogOut, Trash2 } from 'lucide-react'

const OrganizationTable = () => {
  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead className='text-center'>Organizational Name</TableHead>
                <TableHead className='text-center'>Collaborator</TableHead>
                <TableHead className='text-center'>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody className='text-center'>
        {listOrganizationData.map((items) => (
          <TableRow key={items.id}>
            <TableCell className='flex items-center gap-2 justify-between'>
                {items.name}
              <span 
                className='p-1 px-4 rounded-2xl'
                style={{
                  backgroundColor: `${items.role.color}`,
                  color: 'black'
                }}  
              >
                {items.role.name}
              </span>
            </TableCell>
            <TableCell>Collaborator</TableCell>
            <TableCell>
              <div className='flex gap-4 justify-center'>
                <Trash2 className='text-vermilion'/>
                <LogOut />
              </div>
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
    </Table>
  )
}

export default OrganizationTable