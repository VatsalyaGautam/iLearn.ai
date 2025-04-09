import React from 'react';

import { Marquee3D } from './Marquee3D';
import ScrollReveal from '@/utils/ScrollReveal';

const Testimonials = () => {
  
  return (
    <div className="bg-gradient-to-b from-[#0a122e] to-black to-20% text-white py-16 overflow-hidden overflow-x-hidden">
      <div className="px-5 md:max-w-5xl lg:max-w-6xl mx-auto">
        {/* Header Section with animations */}
        <ScrollReveal 
          animation="slightBottomLeft" 
          duration={1000} 
          easing="spring"
        >
          <div className="flex items-center mb-4">
          
            <div className="text-gray-400 font-semibold text-xl flex items-center relative z-10">
              TESTIMONIALS
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal 
          animation="fadeSlightUp" 
          duration={1200} 
          delay={200}
          easing="gentle"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 mb-2 relative z-10">
              Clients Appreciate Our Dedication to Delivering{" "} <br className='hidden md:block'></br>Transformative Excellence
            </h2>
          </div>
        </ScrollReveal>
        
        {/* Preserve the original Marquee3D component */}
        <ScrollReveal 
          animation="fadeIn" 
          duration={1000} 
          delay={400}
          easing="smooth"
        >
          <Marquee3D />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Testimonials;