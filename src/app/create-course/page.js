"use client";
import { ClipboardCheck, Grid2x2Check, Lightbulb } from "lucide-react";
import React, { useEffect, useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import SelectCategory from "@/components/CreateCourse/SelectCategory";
import TopicDescription from "@/components/CreateCourse/TopicDescription";
import SelectOption from "@/components/CreateCourse/SelectOption";
import { UserInputContext } from "@/context/UserInputContext";
import { GenerateCourseLayout_AI } from "@/configs/AiModels";
import LoadingDialog from "@/components/CreateCourse/LoadingDialog";
import { db } from "@/configs/db";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import { CourseList } from "@/configs/schema";
import { useRouter } from "next/navigation";

function Page() {
  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <Grid2x2Check />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <Lightbulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <ClipboardCheck />,
    },
  ];

  const {userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const {user} = useUser();

  const router = useRouter();

  useEffect(() => {
    console.log(userCourseInput);
  }, [userCourseInput]);

  const checkStatus = () => {
    if (!userCourseInput) {
      return true;
    }
    if (
      activeIndex == 0 &&
      (!userCourseInput.category || userCourseInput.category.length == 0)
    ) {
      return true;
    }
    if (
      activeIndex == 1 &&
      (!userCourseInput.topic || userCourseInput.topic.length == 0)
    ) {
      return true;
    }
    if (
      activeIndex == 2 &&
      (!userCourseInput.level ||
        userCourseInput.level.length == 0 ||
        !userCourseInput.duration ||
        userCourseInput.duration.length == 0 ||
        !userCourseInput.noOfChapters ||
        userCourseInput.noOfChapters.length == 0)
    ) {
      return true;
    }
    return false;
  };

  const GenerateCourseLayout = async () => {
    setLoading(true);
    // Create a well-structured prompt for AI course generation
    const prompt = `
  Create a comprehensive course tutorial with the following specifications:
  
  Course Category: ${userCourseInput?.category || "Not specified"}
  Course Topic: ${userCourseInput?.topic || "Not specified"}
  Difficulty Level: ${userCourseInput?.level || "Not specified"}
  Total Duration: ${userCourseInput?.duration || "Not specified"}
  Number of Chapters: ${userCourseInput?.noOfChapters || "Not specified"}
  
  Please provide the response in JSON format with the following structure:
  "course" : {
    "name": "Descriptive title based on topic",
    "description": "Comprehensive overview of what will be covered",
    "chapters": [
      {
        "name": "Chapter title",
        "about": "Detailed description of chapter content",
        "duration": "Estimated time to complete this chapter"
      },
      //Additional based on noOfChapters
    ]
    "category":"Category of the course",
    "topic":"topic of the course",
    "level":"difficulty of the course",
    "duration":"time duration of the course",
    "numberOfChapters" : "count of total number of chapters in the course"
  }
  `;

    console.log(prompt);
    // Here you would send this prompt to your AI service
    const result = await GenerateCourseLayout_AI.sendMessage(prompt);
    console.log(result.response?.text());
    console.log(JSON.parse(result.response?.text()));
    setLoading(false);
    SaveCourseLayoutInDb(JSON.parse(result.response?.text()));
  };


  const SaveCourseLayoutInDb = async (courseLayout)=>{
    var id = uuid4();
    setLoading(true)
    const result = await db.insert(CourseList).values({
      courseId:id,
      name:userCourseInput?.topic,
      level:userCourseInput?.level,
      category:userCourseInput?.category,
      courseOutput:courseLayout,
      includeVideo:userCourseInput?.video,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      userProfileImage:user?.imageUrl
    })
    console.log("db updated!")
    setLoading(false);
    router.replace('/create-course/'+id)
  }
  return (
    <div>
      {/* Stepper */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-blue-900 font-semibold">
          Create your personalised Course
        </h2>
        <div className="flex mt-10">
          {StepperOptions.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`p-3 rounded-full ${
                    activeIndex >= index
                      ? "bg-blue-400 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm font-medium">
                  {item.name}
                </h2>
              </div>
              {index !== StepperOptions.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] ${
                    activeIndex > index ? "bg-blue-400" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activeIndex == 0 ? (
          <SelectCategory />
        ) : activeIndex == 1 ? (
          <TopicDescription />
        ) : (
          <SelectOption />
        )}
        {/* Next previous Button */}
        <div className="flex justify-between  gap-4 mt-10">
          <Button
            variant="outline"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
            className="py-2 px-4 rounded-lg text-gray-900"
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => setActiveIndex(activeIndex + 1)}
              className="py-2 px-4 bg-blue-400 rounded-lg text-white"
            >
              Next
            </Button>
          )}
          {activeIndex == 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => GenerateCourseLayout()}
              className="py-2 px-4 bg-blue-400 rounded-lg text-white"
            >
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
      <LoadingDialog loading={loading} />
    </div>
  );
}

export default Page;
