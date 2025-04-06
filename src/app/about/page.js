import { TimelineDemo } from "@/components/About/TimelineDemo";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import { VortexDemo } from "@/components/VortexDemo";
export default function AboutPage() {
  return (
    <div className="font-ubuntu ">
      <VortexDemo
      title="Discover igebra.ai"
      subtitle="Shaping the Future of AI Learning"
      />
      <div className="
      bg-gradient-to-b from-[rgb(253,253,254)] via-blue-100 to-blue-200
      dark:bg-gradient-to-b dark:from-[rgb(1,2,9)] dark:to-[rgb(4,6,23)] font-ubuntu border-b-2 dark:border-slate-600 border-gray-200">
        <div className=" px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <div className="flex flex-col gap-36">
            <TimelineDemo />
            <div className=" pb-8 flex flex-col justify-center items-center">
              <div className="dark:block hidden">
              <Heading
                title="Built by"
                color={300}
                description="Vatsalya Gautam"
              />
              </div>
              <div className="block dark:hidden">
              <Heading
                title="Built by"
                color={700}
                description="Vatsalya Gautam"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
}
