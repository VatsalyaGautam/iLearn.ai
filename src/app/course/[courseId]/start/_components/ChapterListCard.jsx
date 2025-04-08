import React from "react";

function ChapterListCard({ chapter, index }) {
  return (
    <div className="grid grid-cols-5 gap-4 p-4 items-center border-b">
      <div>
        <h2 className="p-2 aspect-square bg-blue-400 text-white rounded-full text-center">
          {index + 1}
        </h2>
      </div>

      <div className="col-span-4">
        <h2 className="font-medium">{chapter?.name}</h2>
        <h2 className="text-blue-400">{chapter?.duration}</h2>
      </div>
    </div>
  );
}

export default ChapterListCard;
