"use client";
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { and, eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { useUser } from '@clerk/nextjs';

function Finish({ params }) {
  // Properly unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const { user } = useUser();
  const [course, setCourse] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    if (unwrappedParams && user) {
      GetCourse();
    }
  }, [unwrappedParams, user]);
  
  const GetCourse = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(
          and(
            eq(CourseList.courseId, unwrappedParams.courseId),
            eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        );
      
      if (result && result.length > 0) {
        setCourse(result[0]);
        console.log(result);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  }
  
  return (
    <div className='px-20 md:px-20 lg:px-44 my-7'>
        <h2 className='text-center font-bold text-2xl text-blue-500 my-3'>Congrats! Your course is ready!</h2>
      <CourseBasicInfo course={course} refreshData={() => console.log()} />
    </div>
  )
}

export default Finish;