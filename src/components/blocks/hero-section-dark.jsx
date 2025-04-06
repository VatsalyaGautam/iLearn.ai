import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const HeroSection = React.forwardRef(
  (
    {
      className,
      title = "AI Course Creator",
      subtitle = {
        regular: "Generate custom learning paths with  ",
        gradient: "our revolutionary AI engine.",
      },
      description = "Instantly transform any subject into personalized educational journeys, delivering unparalleled knowledge acquisition and skill development that traditional course platforms simply cannot match.",
      ctaText = "Browse courses",
      ctaHref = "#",
      bottomImage = "",
      gridOptions,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute z-[0] inset-0 bg-cyan-100/20 dark:bg-blue-500/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(173,216,230,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(100,149,237,0.3),rgba(255,255,255,0))]" />
        <section className="relative max-w-full mx-auto z-1">
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-4xl leading-0 lg:leading-5 mx-auto text-center">
              <h1 className="text-sm text-gray-700 dark:text-gray-300 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-cyan-300/20 via-blue-400/20 to-transparent dark:from-cyan-300/5 dark:via-blue-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
                {title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
              <h2 className="text-4xl md:text-6xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-300 dark:to-blue-200">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                {description}
              </p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B0E0E6_0%,#4682B4_50%,#B0E0E6_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <Link
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-cyan-300/20 via-blue-400/30 to-transparent dark:from-cyan-300/5 dark:via-blue-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-cyan-300/30 hover:via-blue-400/40 hover:to-transparent dark:hover:from-cyan-300/10 dark:hover:via-blue-400/30 transition-all sm:w-auto py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 text-sm md:text-base lg:text-lg"
                    >
                      {ctaText}
                    </Link>
                  </div>
                </span>
              </div>
            </div>
            {bottomImage && (
              <div className="mt-32 mx-10 relative z-10">
                <img
                  src={bottomImage.light}
                  className="w-full shadow-lg rounded-lg border border-gray-200 dark:hidden"
                  alt="Dashboard preview"
                />
                <img
                  src={bottomImage.dark}
                  className="hidden w-full shadow-lg rounded-lg border border-gray-800 dark:block"
                  alt="Dashboard preview"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
);
HeroSection.displayName = "HeroSection";

export { HeroSection };
