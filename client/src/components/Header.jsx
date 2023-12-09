import React from 'react'

const Header = () => {
  return (
    <nav className='flex justify-between md:p-5 p-2 gap-5 relative'>
        <h1 className="mt-1 font-logo text-3xl text-d_green">TaskFlow</h1>
       <ul className="flex items-center  gap-5 font-body font-bold max-sm:absolute max-sm:top-20 max-sm:flex-col  max-sm:items-start" >
        <li className="text-custom_black">Profile</li>
        <li className="text-custom_black">About</li>
        <li className='buttons'>Sign in </li>
        <li className="buttons">Sign out</li>
       </ul>
    </nav>
  )
}

export default Header
