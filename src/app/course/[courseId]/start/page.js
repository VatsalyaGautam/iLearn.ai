"use client";
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import ChapterListCard from './_components/ChapterListCard';
import ChapterContent from './_components/ChapterContent';

function CourseStart({params}) {
  const [course, setCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [chapterContent, setChapterContent] = useState();
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);
  const [isLoadingChapter, setIsLoadingChapter] = useState(false);
  
  useEffect(() => {
    GetCourse();
  }, []);
  
  // Modified useEffect to pass adjusted chapter ID
  useEffect(() => {
    if (course && selectedChapterIndex !== null) {
      // Adjust the chapter ID by adding 1 (so index 0 becomes chapterId 1)
      const adjustedChapterId = selectedChapterIndex + 1;
      console.log("Using adjusted chapter ID:", adjustedChapterId);
      GetSelectedChapterContent(adjustedChapterId);
    }
  }, [course, selectedChapterIndex]);
  
  const GetCourse = async() => {
    try {
      const result = await db.select().from(CourseList)
        .where(eq(CourseList.courseId, params.courseId));
      
      if (result && result.length > 0) {
        setCourse(result[0]);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };
  
  const GetSelectedChapterContent = async(chapterId) => {
    if (!course) return;
    setIsLoadingChapter(true);
    
    try {
      const result = await db.select().from(Chapters)
        .where(and(
          eq(Chapters.chapterId, chapterId),
          eq(Chapters.courseId, course.courseId)
        ));
      
      if (result.length > 0) {
        setChapterContent(result[0]);
        console.log("Chapter content found:", result);
      } else {
        console.log("No chapter content found for chapter ID:", chapterId);
        setChapterContent(null);
      }
    } catch (error) {
      console.error("Error fetching chapter content:", error);
    } finally {
      setIsLoadingChapter(false);
    }
  };
  
  // If course is still loading, show a loading state
  if (!course) {
    return <div className="flex items-center justify-center h-screen">Loading course...</div>;
  }
  
  return (
    <div>
      {/* Chapter List Sidebar */}
      <div className='md:w-72 fixed hidden md:block h-screen border-r shadow-md'>
        <h2 className='font-medium text-lg bg-blue-400 p-4 text-white'>
          {course.courseOutput.course.name}
        </h2>
        <div>
          {course.courseOutput.course.chapters.map((chapter, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedChapter(chapter);
                setSelectedChapterIndex(index); // Store the original index
              }}
              className={`cursor-pointer hover:bg-blue-50 ${
                selectedChapter?.name === chapter.name ?
                'bg-blue-100 hover:bg-blue-100' : ''
              }`}
            >
              <ChapterListCard chapter={chapter} index={index}/>
            </div>
          ))}
        </div>
      </div>
      
      {/* Content Div */}
      <div className='md:ml-72'>
        {selectedChapter ? (
          isLoadingChapter ? (
            <div className="flex items-center justify-center h-screen">Loading chapter content...</div>
          ) : (
            <ChapterContent chapter={selectedChapter} content={chapterContent}/>
          )
        ) : (
          <div className="flex items-center justify-center h-screen">
            Select a chapter to start
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseStart;