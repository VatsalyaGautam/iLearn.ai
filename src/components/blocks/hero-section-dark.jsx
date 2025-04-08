
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/utils/ScrollReveal"; // Make sure path is correct

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
     
      bottomImage = "/Home/sec2_1.webp",
      gridOptions,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute z-[0] inset-0   bg-blue-500/10 bg-[radial-gradient(ellipse_30%_56%_at_50%_-20%,rgba(100,149,237,0.3),rgba(255,255,255,0))]" />
        <section className="relative max-w-full mx-auto z-1">
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-4xl leading-0 lg:leading-5 mx-auto text-center">
              <ScrollReveal 
                animation="fadeIn" 
                duration={1000} 
                delay={200}
              >
                <h1 className="text-sm text-gray-300 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr   to-transparent from-cyan-300/5 via-blue-400/5 border-[2px]  border-white/5 rounded-3xl w-fit">
                  {title}
                  <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                </h1>
              </ScrollReveal>
              
              <ScrollReveal 
                animation="slightDown" 
                duration={1200} 
                delay={900}
                easing="gentle"
              >
                <h2 className="text-4xl md:text-6xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto  bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                  {subtitle.regular}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r  from-cyan-300 to-blue-200">
                    {subtitle.gradient}
                  </span>
                </h2>
              </ScrollReveal>
              
              <ScrollReveal 
                animation="fadeSlightDown" 
                duration={1000} 
                delay={600}
              >
                <p className="max-w-2xl mx-auto text-gray-300">
                  {description}
                </p>
              </ScrollReveal>
              
              <ScrollReveal 
                animation="scaleUp" 
                duration={1200} 
                delay={800}
                easing="spring"
              >
                <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                  <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B0E0E6_0%,#4682B4_50%,#B0E0E6_100%)]" />
                    <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                      <Link
                        href="/dashboard"
                        className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr to-transparent from-cyan-300/5 via-blue-400/20 text-white border-input border-[1px] hover:bg-gradient-to-tr  hover:to-transparent hover:from-cyan-300/10 hover:via-blue-400/30 transition-all sm:w-auto py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 text-sm md:text-base lg:text-lg"
                      >
                        {ctaText}
                      </Link>
                    </div>
                  </span>
                </div>
              </ScrollReveal>
            </div>
            
            {bottomImage && (
              <ScrollReveal 
                animation="MidUp" 
                duration={1400} 
                delay={1000}
                easing="smooth"
              >
                <div className="mt-16 mx-10 relative z-10">
                
                  <img
                    src={bottomImage}
                    className=" w-full rounded-lg "
                    alt="Dashboard preview"
                  />
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };