"use client";
import Header from '@/components/Dashboard/Header'
import React, { useState } from 'react'
import { UserInputContext } from '@/context/UserInputContext';

function CreateCourseLayout({children}) {
  const [userCourseInput,setUserCourseInput] = useState([]);
  
  return (
    <div>
      <UserInputContext.Provider value={{userCourseInput,setUserCourseInput}}>
        <>
          <Header/>
          {children}
        </>
      </UserInputContext.Provider>
    </div>
   
  )
}

export default CreateCourseLayout
