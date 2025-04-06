import React from "react";
import { Vortex } from "./ui/vortex";
export function VortexDemo({
  title = "Get to Know Me Better",
  subtitle = "Explore my interests, my journey as a programmer, why I chose this field, everything 101.",
  darkBgColor = "dark:bg-[rgb(7,0,12)]",
  lightBgColor = "bg-slate-50",
}) {
  return (
    <div
      className={`w-full rounded-md h-[20rem]  max-w-full bg-slate-50 dark:bg-[rgb(4,6,23)] }`}
    >
      <Vortex
        baseHue={500}
        backgroundColor="#00000000"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="dark:text-slate-200 text-neutral-950  text-2xl md:text-6xl z-10 font-medium text-center">
          {title}
        </h2>
        <p className=" text-gray-300 text-sm  md:text-2xl max-w-xl mt-6 text-center z-10   bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 dark:from-white/95 dark:via-white/80 dark:to-white/95 bg-clip-text text-transparent leading-relaxed transition-all duration-300">
          {subtitle}
        </p>
      </Vortex>
    </div>
  );
}
