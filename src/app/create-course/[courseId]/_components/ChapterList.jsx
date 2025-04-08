import { Check, Clock, BookOpen } from "lucide-react";
import React from "react";

function ChapterList({ course }) {
  return (
    <div className="mt-8">
      <h2 className="font-semibold text-2xl mb-4">Course Chapters</h2>
      <div className="space-y-4">
        {course?.courseOutput?.course?.chapters.map((chapter, index) => (
          <div 
            key={index} 
            className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between bg-white"
          >
            <div className="flex gap-5 items-center">
              <div className="bg-blue-500 h-12 w-12 flex-none text-white rounded-full flex items-center justify-center font-medium text-lg shadow-sm">
                {index + 1}
              </div>
              <div>
                <h2 className="font-medium text-lg text-gray-800">{chapter?.name}</h2>
                <p className="text-gray-500 mt-1">{chapter?.about}</p>
                <div className="flex gap-4 mt-2">
                  <span className="flex items-center gap-1 text-blue-500">
                    <Clock size={16} />
                    <span className="text-sm">{chapter?.duration}</span>
                  </span>
                  <span className="flex items-center gap-1 text-green-500">
                    <BookOpen size={16} />
                    <span className="text-sm">Start Learning</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-full">
              <Check className="text-3xl text-green-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;