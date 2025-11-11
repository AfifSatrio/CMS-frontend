import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { personalProjectsData } from '@/constants'

const PersonalProjectTable = () => {
  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead className='text-center'>Project Name</TableHead>
                <TableHead className='text-center'>Last Update</TableHead>
                <TableHead className='text-center'>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody className='text-center'>
            {personalProjectsData.map((items) => (
                <TableRow key={items.id}>
                    <TableCell>{items.title}</TableCell>
                    <TableCell>{items.lastUpdate}</TableCell>
                    <TableCell className='justify-center gap-4 flex'>
                            <div>Action 1</div>
                            <div>Action 2</div>
                            <div>Action 3</div>
                            <div>Action 4</div>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}

export default PersonalProjectTable