"use client";
import ChapterList from '@/app/create-course/[courseId]/_components/ChapterList';
import CourseBasicInfo from '@/app/create-course/[courseId]/_components/CourseBasicInfo';
import CourseDetail from '@/app/create-course/[courseId]/_components/CourseDetail';
import Header from '@/components/Dashboard/Header';
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState, useCallback } from 'react'

function Course({params}) {
  const [course, setCourse] = useState();
  
  // Use useCallback to memoize the function
  const getCourse = useCallback(async() => {
    if (!params || !params.courseId) return;
    
    try {
      const result = await db.select().from(CourseList)
        .where(eq(CourseList.courseId, params.courseId));
      if (result && result.length > 0) {
        setCourse(result[0]);
        console.log(result);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  }, [params]);
  
  useEffect(() => {
    getCourse();
  }, [getCourse]); // Now getCourse is properly in the dependency array
  
  return (
    <div>
      <Header/>
      <div className='px-10 md:px-20 lg:px-44'>
        <CourseBasicInfo course={course}/>
        <CourseDetail course={course}/>
        <ChapterList course={course}/>
      </div>
    </div>
  )
}

export default Course;