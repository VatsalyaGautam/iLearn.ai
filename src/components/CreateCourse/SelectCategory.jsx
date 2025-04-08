"use client";
import React, { useContext } from 'react';
import { UserInputContext } from '@/context/UserInputContext';
import { categoryList } from '@/lib/config'
import Image from 'next/image' 
export default function SelectCategory() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);

  const handleCategoryChange = (category)=>{
    setUserCourseInput((prev)=>({
      ...prev,
      category:category
    }))
  }

  return (

    <div className='px-10 md:px-20'>

      <h2 className='my-5'>Select the Course Category</h2>
  
    <div className='grid grid-cols-3 gap-10'>
   
      {categoryList.map((item,index)=>(
        <div key={index} className={`flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer
          ${userCourseInput?.category==item.name && 'border-blue-400 bg-blue-50'}`}
        onClick={()=>handleCategoryChange(item.name)}
        >
          <Image src={item.icon} width={50} height={50} alt="icon"/>
          <h2>{item.name}</h2>
          </div>
      ))}
    </div>
    </div>
  )
}
