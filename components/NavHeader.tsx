import React from 'react'

const NavHeader = () => {
  return (
    <div className='p-4 flex items-center gap-4'>
      <div className='bg-white p-4 w-fit text-black rounded-2xl'>
        Logo
      </div>
      <div className='font-semibold text-white'>
        <h1>CMS Project #20</h1>
      </div>
    </div>
  )
}

export default NavHeader