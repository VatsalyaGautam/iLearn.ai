"use client";
import React,{useContext} from "react";
import { UserInputContext } from "@/context/UserInputContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

function SelectOption(){

  const {userCourseInput,setUserCourseInput}= useContext(UserInputContext);
  const handleInputChange = (fieldname,value)=>{
    console.log(userCourseInput)
    setUserCourseInput(prev=>({
     ...prev,
     [fieldname]:value
  }))
}
  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label className="text-sm">🎓 Difficulty Level</label>
          <Select onValueChange={(value)=>handleInputChange('level',value)}
            defaultValue={userCourseInput.level}>
            <SelectTrigger className="mt-2 mb-4">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">🕒 Course Duration</label>
          <Select onValueChange={(value)=>handleInputChange('duration',value)}
             defaultValue={userCourseInput.duration}>
            <SelectTrigger className="mt-2 mb-4">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hours">1 Hours</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More than 3 hours">More than 3 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">▶️ Add Video</label>
          <Select onValueChange={(value)=>handleInputChange('video',value)}
             defaultValue={userCourseInput.video}>
            <SelectTrigger className="mt-2 mb-4">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
             
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">📖 No. of Chapters</label>
          <Input 
           defaultValue={userCourseInput.noOfChapters}
          onChange = {(e)=>handleInputChange('noOfChapters',e.target.value)}
          type="number" className="mt-2 mb-4"/>
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
