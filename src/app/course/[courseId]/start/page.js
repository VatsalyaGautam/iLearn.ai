'use client';
import { Chapters, CourseList } from '@/configs/schema'
import { and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import ChapterListCard from './_components/ChapterListCard';
import ChapterContent from './_components/ChapterContent';
import { db } from '@/configs/db';

function CourseStart({params}) {
  const unwrappedParams = React.use(params);
  const [course,setCourse]=useState();
  const [selectedChapter,setSelectedChapter]=useState();
  const [chapterContent,setChapterContent]=useState();
useEffect(()=>{
  GetCourse();
},[])

  const GetCourse=async()=>{
    const result= await db.select().from(CourseList)
    .where(eq(CourseList?.courseId,unwrappedParams?.courseId));
    setCourse(result[0]);
  }
  const GetSelectedChapterContent=async(chapterId)=>{
    const result = await db.select().from(Chapters)
    .where(and(eq(Chapters?.chapterId,chapterId ),
  eq(Chapters.courseId,course?.courseId)));
  setChapterContent(result[0]);
    console.log(result);
  }
  return (
    <div>
      <div className='md:w-72 hidden md:block h-screen border-r shadow-sm'>
        <h2 className='font-medium text-lg bg-blue-400 p-3 text-white'>{course?.courseOutput?.course?.name}</h2>
        <div>
          {course?.courseOutput?.course?.chapters.map((chapter,index)=>(
            <div onClick={()=>{
              setSelectedChapter(chapter);
              GetSelectedChapterContent(index);
            }}
             key={index} className={`cursor-pointer hover:bg-blue-50 ${selectedChapter==chapter?.name&&'bg-blue-400'}`}>
                <ChapterListCard chapter={chapter} index={index}/>
            </div>
          ))

          }
        </div>
      </div>
      <div className='md:ml-72'>
            <ChapterContent chapter={selectedChapter}
            
            />
      </div>
    </div>
  )
}

export default CourseStart
