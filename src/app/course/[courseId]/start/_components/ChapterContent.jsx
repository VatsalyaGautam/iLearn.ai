
import React from "react";
import YouTube from "react-youtube";
import ReactMarkdown from "react-markdown";
export default function ChapterContent({ chapter, content }) {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      }
    };
  
    if (!chapter || !content) {
      return <div className="p-4">Loading chapter content...</div>;
    }
  
    // Get the content array from the dynamic property name (likely the chapter name)
    const contentKey = Object.keys(content.content)[0]; // Get the first key in the content object
    const contentItems = content.content[contentKey] || [];
  
    return (
      <div className='p-10'>
        <h2 className='font-medium text-2xl mt-2'>{chapter?.name}</h2>
        <p className='text-gray-500'>{chapter?.about}</p>
        
        {content.videoId && (
          <div className='flex justify-center my-6'>
            <YouTube
              videoId={content.videoId}
              opts={opts}
            />
          </div>
        )}
        
        <div>
          {contentItems.map((item, index) => (
            <div key={index} className='p-5 bg-sky-50 mb-3 rounded-lg'>
              <h2 className='font-medium text-lg text-gray-900'>{item.title}</h2>
              <ReactMarkdown>{item.explanation}</ReactMarkdown>
              {item?.codeExample && (
                <div className='p-4 bg-black text-white mt-3 rounded-md'>
                  <pre>
                    <code>{item.codeExample}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }