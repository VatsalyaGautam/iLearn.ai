"use client";
import { TypeAnimation } from "react-type-animation";

export function Typewriter() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-neutral-600 dark:text-neutral-200  text-center text-xs sm:text-base">
        Empowering you with cutting-edge AI technology for seamless multilingual
        questionnaires.
      </p>

      <div className="flex flex-wrap items-center gap-2 text-4xl font-bold">
        <span>Knowledge</span> <span>bridges</span>
        <TypeAnimation
          sequence={[
            "Cultures",
            4000,
            "Languages",
            4000,
            "Understanding",
            4000,
            "Communities",
            4000,
          ]}
          wrapper="span"
          speed={10}
          className="text-blue-500"
          repeat={Infinity}
        />
      </div>

      <div className="flex flex-col flex-wrap md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl z-[1] bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl z-[1] bg-white text-black border border-black text-sm">
          Login
        </button>
      </div>
    </div>
  );
}
