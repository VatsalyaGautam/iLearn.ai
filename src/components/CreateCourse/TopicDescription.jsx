"use client";
import React,{useContext} from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { UserInputContext } from '@/context/UserInputContext';

function TopicDescription() {
 const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const handleInputChange =(fieldname,value)=>{
    setUserCourseInput(prev=>({
      ...prev,
      [fieldname]:value
    }))
  }
  return (
    <div className='mx-20 lg:mx-44'>
      {/*input topic */}
        <div className='mt-5'>
            <label className='mb-2'>💡 Write the topic for which you want to generate the course (e.g. Python, Yoga, etc.):</label>
            <Input placeholder={'Topic'} className="mt-2 mb-4"
            defaultValue={userCourseInput?.topic}
            onChange ={ (e)=>handleInputChange('topic',e.target.value)}
            />
        </div>
        <div className='mt-5'>
            <label className='mb-2'>📝 Tell us more about your course, what you want to include in the course</label>
            <Textarea placeholder = "About your course" className="mt-2 mb-4"
             defaultValue={userCourseInput?.description}
             onChange ={ (e)=>handleInputChange('description',e.target.value)}
            />
        </div>
      {/* textarea */}
    </div>
  )
}

export default TopicDescription
