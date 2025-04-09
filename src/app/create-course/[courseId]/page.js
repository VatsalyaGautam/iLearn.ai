"use client";
import { Chapters, CourseList } from "@/configs/schema";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs/db";
import { eq, and } from "drizzle-orm";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";
import { GenerateChapterContent_AI } from "@/configs/AiModels";
import LoadingDialog from "@/components/CreateCourse/LoadingDialog";
import service from "@/configs/service";
import { useRouter } from "next/navigation";

function CourseLayout({ params }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (unwrappedParams && user) {
      GetCourse();
    }
  }, [unwrappedParams, user]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, unwrappedParams.courseId),
          eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    setCourse(result[0]);
    console.log(result);
  };

  const GenerateChapterContent = () => {
    setLoading(true);
    const chapters = course?.courseOutput?.course?.chapters;
    const topic = course?.courseOutput?.course?.name;

    chapters.forEach(async (chapter, index) => {
      const PROMPT =
        "Explain the concept in Detail on Topic :" +
        topic +
        ",Chapter :" +
        chapter?.name +
        ", in JSON format with the list of array with fields as title, explanation of given chapter in detail. Code Example (Code field in <precode> format) if applicable";
      console.log(PROMPT);

      try {
        let videoId = "";
        // youtube api
        try {
          const resp = await service.getVideos(
            course?.name + ":" + chapter?.name
          );
          console.log(resp);
          videoId = resp[0]?.id?.videoId || "";
        } catch (videoError) {
          console.error("Error fetching video:", videoError);
        }

        // generate chapter content
        const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
        console.log(result?.response?.text());
        const content = JSON.parse(result?.response?.text());

        // In your GenerateChapterContent function:
        await db.insert(Chapters).values({
          chapterId: index,
          courseId: course?.courseId,
          content: content,
          videoId: videoId,
        });
      } catch (e) {
        console.log(e);
      }
    });

    setLoading(false);
    router.replace("/create-course/" + course?.courseId + "/finish");
  };

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-black text-center text-2xl">
        Course Layout
      </h2>
      {/* basic info */}
      <LoadingDialog loading={loading} />
      <CourseBasicInfo course={course} />
      {/* course detail */}
      <CourseDetail course={course} />
      {/* list of lessons */}
      <ChapterList course={course} />
      <Button onClick={GenerateChapterContent} className="mb-10 mt-4">
        Generate Course Content
      </Button>
    </div>
  );
}

export default CourseLayout;
