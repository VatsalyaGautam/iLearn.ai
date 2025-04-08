"use client";
import React from 'react'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';

function AddCourse() {
    const {user} = useUser();
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h2 className='text-2xl text-black'>Hello, <span className='font-extrabold'>{user?.fullName}</span></h2>
        <p className='text-gray-500 text-light'>Create a new course with our cutting-edge AI!</p>
      </div>
      <Link href={'/create-course'}>
        <button className='py-2 px-4 bg-blue-400 rounded-lg text-white'>+ Create AI Course</button>
      </Link>
    </div>
  )
}

export default AddCourse
