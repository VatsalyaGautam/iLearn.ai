import { Album } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CourseCard({course}) {
  return (
    <Link href={'/course/'+course?.courseId}>
    <div className='shadow-sm rounded-lg border p-2 h-full'>
     <div className='p-2'>
     <p className='text-sm text-gray-400 my-1'>{course?.category}</p>
        <h2 className='font-medium text-lg'>{course?.courseOutput?.course?.name}</h2>
        <div className='flex justify-between items-center rounded-sm'>
            <h2 className='flex gap-2 items-center p-1 bg-blue-50 text-blue-300 text-sm '><Album/>{course?.courseOutput?.course?.numberOfChapters} Chapters</h2>
            <h2 className='text-sm'>{course?.level} Chapters</h2>
      
            </div>
        </div>
     </div>
     </Link>
  )
}

export default CourseCard
