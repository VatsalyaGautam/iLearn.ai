import { TimelineDemo } from "@/components/About/TimelineDemo";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import { VortexDemo } from "@/components/VortexDemo";
export default function AboutPage() {
  return (
    
    <div className="font-ubuntu ">
      <Navbar/>
      <VortexDemo
      title="Discover igebra.ai"
      subtitle="Shaping the Future of AI Learning"
      />
      <div className="
 
      bg-gradient-to-b from-[rgb(1,2,9)] to-[rgb(4,6,23)] font-ubuntu border-b-2 border-slate-600 ">
        <div className=" px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <div className="flex flex-col gap-36">
            <TimelineDemo />
            <div className=" pb-8 flex flex-col justify-center items-center">
            
              <Heading
                title="Built by"
                color={300}
                description="Vatsalya Gautam"
              />
          
             
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
   
  );
}
