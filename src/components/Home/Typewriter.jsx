"use client";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export function Typewriter() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:w-1/2">
      <p className="text-neutral-200  text-center text-xs sm:text-base text-center lg:text-left">
        Empowering you with cutting-edge AI technology
   <br className="lg:block hidden"/>
        to Unlock the Future of Learning
      </p>

      <div className="flex flex-wrap items-center gap-2 text-4xl font-semibold text-center lg:text-left text-white">
        <span>igebra.ai</span> <span>empowers</span>
        <TypeAnimation
        sequence={[
          "Innovation 🚀", 4000,
          "Learning 📚", 4000,
          "The Future 🤖", 4000,
          "Intelligence ", 4000,
          "YOU",10000
        ]}
        wrapper="span"
        speed={10}
        className="text-blue-500"
        repeat={Infinity}
      />
   
      </div>

      <div className="flex flex-col flex-wrap md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <SignedIn>
        <Link href="/dashboard">
        <button className="w-40 h-10 rounded-xl z-[1] bg-black border border-white border-transparent text-white text-sm">
          Join now
        </button>
        </Link>
        <Link href="/dashboard">
        <button className="w-40 h-10 rounded-xl z-[1] bg-white text-black border border-black text-sm">
          Login
        </button>
        </Link>
        </SignedIn>
        <SignedOut>
        <Link href="/sign-up">
        <button className="w-40 h-10 rounded-xl z-[1] bg-black border border-white border-transparent text-white text-sm">
          Join now
        </button>
        </Link>
        <Link href="/sign-in">
        <button className="w-40 h-10 rounded-xl z-[1] bg-white text-black border border-black text-sm">
          Login
        </button>
        </Link>
        </SignedOut>
      </div>
    </div>
  );
}
