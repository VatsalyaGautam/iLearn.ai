import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex justify-between items-center px-5 py-3 shadow-sm bg-blue-50  text-gray-70'>
      <div className="flex items-center gap-3">
        <Image 
          src="/main/igebraIconColor.png" 
          width={50} 
          height={50} 
          alt="icon"
          className="rounded-md"
        />
       
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default Header