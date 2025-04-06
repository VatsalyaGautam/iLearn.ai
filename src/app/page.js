import { cn } from "@/lib/utils";
import React from "react";
import { HeroSection } from "@/components/blocks/hero-section-dark";
import  Footer  from "@/components/Footer";
import { Typewriter } from "@/components/Home/Typewriter";
import { GridPattern } from "@/components/ui/grid-pattern";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="bg-sky-100 dark:bg-[rgb(4,6,23)] h-auto">
        {/* hero sec 1 */}   
  
     
        <HeroSection/>
        {/* sec 1 ends here */}


        {/* sec 2 starts */}
        <div className="dark:bg-gradient-to-b dark:from-[#0a122e] dark:to-black font-ubuntu relative">
        <div className="px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <div className="flex gap-12 mt-8">
            <div className="w-full lg:w-3/5 flex justify-center h-[30rem] z-10">
              <Typewriter />
            </div>
            <div className="hidden lg:block w-2/5 h-[30rem] ">
              <div className="w-full h-full relative flex justify-center">
                <Spline
                  className="spline-div rounded-2xl absolute !w-[68%]"
                  scene="https://prod.spline.design/DUsonSpAK6trNQLe/scene.splinecode"
                />
              </div>
            </div>

            <div
        className={cn(
          "absolute inset-0  z-[0]",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-[0]"></div>
          </div> 
        </div>
      </div>
        {/* sec  2 ends here */}

        {/* sec 3 starts */}
       
        {/* sec  3 ends here */}

        {/* sec 4 starts */}
     
        {/* sec  4 ends here */}

        {/* sec 5 starts */}
       
        {/* sec  5 ends here */}

        {/* sec 6 starts */}
     
        {/* sec  6 ends here */}

        {/* sec 7 starts */}
       
        {/* sec  7 ends here */}
        {/* sec 8 starts */}
       
        {/* sec  8 ends here */}
        {/* sec 9 starts */}
   
        {/* sec  9 ends here */}
        {/* sec 10 starts */}
  
        {/* sec  10 ends here */}
        <Footer/>
    </div>
  );
}
