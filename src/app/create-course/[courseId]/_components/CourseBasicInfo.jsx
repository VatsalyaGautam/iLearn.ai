
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { Puzzle } from 'lucide-react'
import { Button } from '@/components/ui/button'
function CourseBasicInfo({course}) {
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
            <h2 className='font-bold text-3xl'>{course?.courseOutput?.course?.name}</h2>
            <p className='text-sm text-gray-400 mt-3 '>{course?.courseOutput?.course?.description}</p>
            <h2 className='font-medium mt-2 flex gap-2 items-center text-blue-400'><Puzzle/>{course?.category}</h2>
            <Link href={'/course/'+course?.courseId+"/start"}>
            <Button className="mt-5 w-full bg-blue-400"> Start</Button>
            </Link>
        </div>
        <div className='flex justify-end'>
         
            <Image src={'/magicBook.jpg'} width={240} height={240}
            className="w-[15rem] rounded-xl" alt="magical Courses"/>
        </div>
      </div>
      
    </div>
  )
}

export default CourseBasicInfo
