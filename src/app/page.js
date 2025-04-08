import { cn } from "@/lib/utils";
import React from "react";
import { HeroSection } from "@/components/blocks/hero-section-dark";
import  Footer  from "@/components/Footer";
import { Typewriter } from "@/components/Home/Typewriter";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
     
    <Navbar/>
    <div className="bg-[rgb(4,6,23)] h-auto">
        {/* hero sec 1 */}   
    <div className="w-full bg-black relative pt-16">
      <div className="w-full max-w-5xl lg:max-w-[96rem] mx-auto px-7 h-[500px]  relative overflow-hidden z-10 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 hidden lg:block"
        fill="white"
      />
      
      <div className="flex h-full justify-center  lg:justify-normal">
        {/* Left content */}
       <Typewriter/>

        {/* Right content */}
        <div className="flex-1 relative hidden lg:block">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
    <div
        className={cn(
          "absolute inset-0 opacity-60",
          "[background-size:40px_40px]",

          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
    </div>
    
        <HeroSection/>
        {/* sec 1 ends here */}


        {/* sec 2 starts */}
        
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
   
    </>
  );
}
