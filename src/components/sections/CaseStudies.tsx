"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "@/components/ui/Counter";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { FadeIn } from "@/components/animations/FadeIn";
import clsx from "clsx";

const caseStudies = [
  {
    id: 1,
    client: "TransEdge Logistics",
    category: "Design & development",
    title: "Lead generation boost for a B2B logistics company",
    challenge: "Low lead conversion from the existing website.",
    solution: "Redesigned their website UX and implemented targeted lead capture automation.",
    stats: [
      { value: 2.5, suffix: "X", label: "Increase in qualified B2B leads" },
      { value: 38, suffix: "%", label: "Bounce rate dropped" }
    ],
    image: "/case-study-01.webp",
  },
  {
    id: 2,
    client: "Brand Boosters",
    category: "SaaS solution",
    title: "Scalable SaaS platform for a fintech startup",
    challenge: "Delayed product iteration and market responsiveness.",
    solution: "Introduced agile development workflows to accelerate feature deployment.",
    stats: [
      { value: 50, suffix: "%", label: "Social media followers increased" },
      { value: 30, suffix: "%", label: "The campaign achieved" }
    ],
    image: "/case-study-02.webp",
  },
  {
    id: 3,
    client: "Green Enterprise",
    category: "CRM & ERP integrations",
    title: "Enterprise resource integration for a manufacturing firm",
    challenge: "Disconnected legacy systems hindered real-time data access.",
    solution: "Integrated ERP, CRM, and supply chain tools into a unified platform.",
    stats: [
      { value: 25, suffix: "%", label: "Lead generation increased" },
      { value: 70, suffix: "%", label: "The bounce rate dropped" }
    ],
    image: "/case-study-03.webp",
  },
  {
    id: 4,
    client: "Spendora",
    category: "Enterprise digital strategy",
    title: "Strategic digital shift for a B2B consulting agency",
    challenge: "Outdated digital presence and manual processes limited client acquisition.",
    solution: "Implemented automated workflows and revamped their digital brand.",
    stats: [
      { value: 40, suffix: "%", label: "Patient engagement increased" },
      { value: 60, suffix: "%", label: "Missed appointments decreased" }
    ],
    image: "/case-study-04.webp",
  },
   {
    id: 5,
    client: "InnovateTech",
    category: "SaaS product launch",
    title: "SaaS product launch",
    challenge: "Entering a competitive market with no brand recognition.",
    solution: "Developed a scalable SaaS MVP, positioned the product with precision.",
    stats: [
      { value: 20000, suffix: "", label: "The product gained" },
      { value: 95, suffix: "%", label: "Users found the platform" }
    ],
    image: "/case-study-05.webp",
  },
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  // Variants for the cross-fade slide effect
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    }),
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Slider Container */}
        <FadeIn>
          <div className="relative max-w-[1400px] mx-auto">

          {/* Main Card Shell */}
          {/* Changed bg to #0A0A0A and added tinted border */}
          <SpotlightCard className="bg-[#0A0A0A] rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-[#F3FFC9]/10 relative min-h-[600px] lg:min-h-[500px] flex flex-col lg:flex-row group">
            
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row w-full h-full absolute inset-0"
              >
                
                {/* LEFT: Image Section */}
                <div className="relative w-full lg:w-1/2 h-64 lg:h-full overflow-hidden">
                  <Image
                    src={currentStudy.image}
                    alt={currentStudy.title}
                    fill
                    className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Badge: Dark bg with Theme Text Color */}
                  <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#F3FFC9] uppercase tracking-wide shadow-sm border border-[#F3FFC9]/10">
                    {currentStudy.category}
                  </div>
                </div>

                {/* RIGHT: Content Section */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
                  
                  {/* Content Header */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-[#F3FFC9] opacity-60 uppercase tracking-wider mb-3">
                      {currentStudy.client}
                    </h4>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#F3FFC9] leading-tight mb-6">
                      {currentStudy.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-extrabold text-[#F3FFC9] opacity-90 uppercase tracking-wider">Challenge:</span>
                        <p className="text-[#F3FFC9] opacity-70 leading-relaxed mt-1">{currentStudy.challenge}</p>
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-[#F3FFC9] opacity-90 uppercase tracking-wider">Solution:</span>
                        <p className="text-[#F3FFC9] opacity-70 leading-relaxed mt-1">{currentStudy.solution}</p>
                      </div>
                    </div>
                  </div>

                    {/* Stats & Navigation Row */}
                  {/* Updated border color */}
                  <div className="border-t border-[#F3FFC9]/10 pt-8 mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                    
                    {/* Stats */}
                    <div className="flex gap-8">
                      {currentStudy.stats.map((stat, idx) => (
                        <div key={idx}>
                          {/* Updated Number Color */}
                          <div className="text-3xl font-bold text-[#F3FFC9] flex items-baseline">
                             <span className="tabular-nums">
                               {stat.value >= 1000 ? stat.value.toLocaleString() : <Counter value={stat.value} suffix={stat.suffix} />}
                             </span>
                          </div>
                          <div className="text-[10px] font-bold text-[#F3FFC9] opacity-60 uppercase max-w-[100px] leading-tight mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View Detail Button */}
                    {/* <button className="flex items-center gap-2 text-sm font-bold text-[#F3FFC9] hover:opacity-80 transition-colors group w-max">
                      <span className="mb-0.5"></span>
                      <div className="w-8 h-8 rounded-full bg-[#F3FFC9]/10 flex items-center justify-center transition-colors border border-[#F3FFC9]/20"> */}
                         {/* Tinted Arrow */}
                         <img 
                           src="/button-arrow.svg" 
                           alt="" 
                           className="w-3 h-3 transition-transform group-hover:translate-x-0.5 invert brightness-100 sepia saturate-[500%] hue-rotate-[50deg]" 
                         />
                      </div>
                    {/* </button>
                  </div> */}

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Custom Navigation Arrows */}
            <div className="absolute bottom-8 right-8 hidden lg:flex gap-3 z-10">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[#F3FFC9]/10 bg-[#0A0A0A]/50 hover:bg-[#F3FFC9]/10 flex items-center justify-center transition-colors shadow-sm backdrop-blur-sm"
              >
                <img 
                  src="/slider-left-arrow.svg" 
                  alt="Previous" 
                  className="w-5 h-5 invert brightness-100 sepia saturate-[500%] hue-rotate-[50deg]" 
                /> 
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-[#F3FFC9]/10 border border-[#F3FFC9]/20 hover:bg-[#F3FFC9]/20 flex items-center justify-center transition-colors shadow-md backdrop-blur-sm"
              >
                <img 
                  src="/slider-right-arrow.svg" 
                  alt="Next" 
                  className="w-5 h-5 invert brightness-100 sepia saturate-[500%] hue-rotate-[50deg]" 
                /> 
              </button>
            </div>

            {/* Mobile Navigation */}
             <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 lg:hidden z-10 pointer-events-none">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-black/50 border border-[#F3FFC9]/20 shadow-md flex items-center justify-center pointer-events-auto backdrop-blur-md"
              >
                <img src="/slider-left-arrow.svg" alt="Previous" className="w-4 h-4 invert brightness-100 sepia saturate-[500%] hue-rotate-[50deg]" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-black/50 border border-[#F3FFC9]/20 shadow-md flex items-center justify-center pointer-events-auto backdrop-blur-md"
              >
                <img src="/slider-right-arrow.svg" alt="Next" className="w-4 h-4 invert brightness-100 sepia saturate-[500%] hue-rotate-[50deg]" />
              </button>
            </div>

          </SpotlightCard>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-[#F3FFC9]" : "w-2 bg-[#F3FFC9]/20 hover:bg-[#F3FFC9]/40"
                }`}
              />
            ))}
          </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}