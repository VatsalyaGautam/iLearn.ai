import { Album, Book, ChartBarDecreasing, Clock, Play, Video, Youtube } from 'lucide-react'
import React from 'react'

function CourseDetail({course}) {
  return (
    <div className='border p-6 rounded-xl shadow-sm mt-3'>
      <div className='grid grid-cols-2 md:grid-cols-4'>
            <div className='flex gap-2'>
                <ChartBarDecreasing className='text-5xl text-blue-500'/>
                <div>
                    <h2 className='text-xs text-gray-500'>Skill Level</h2>
                    <h2 className='font-medium text-lg'>{course?.level}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <Clock className='text-5xl text-blue-500'/>
                <div>
                    <h2 className='text-xs text-gray-500'>Duration</h2>
                    <h2 className='font-medium text-lg'>{course?.courseOutput?.course?.duration}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <Album className='text-5xl text-blue-500'/>
                <div>
                    <h2 className='text-xs text-gray-500'>No. of Chapters</h2>
                    <h2 className='font-medium text-lg'>{course?.courseOutput?.course?.numberOfChapters}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <Youtube className='text-5xl text-blue-500'/>
                <div>
                    <h2 className='text-xs text-gray-500'>Videos Included?</h2>
                    <h2 className='font-medium text-lg'>{course?.includeVideo}</h2>
                </div>
            </div>
      </div>
    </div>
  )
}

export default CourseDetail
