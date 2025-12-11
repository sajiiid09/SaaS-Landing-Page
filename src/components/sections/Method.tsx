"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import clsx from "clsx";

const steps = [
  {
    id: 1,
    title: "Understand your business",
    icon: "/step-icon-01.svg",
    description: "We dive deep into your operational model to identify bottlenecks and opportunities.",
  },
  {
    id: 2,
    title: "Build the right strategy",
    icon: "/step-icon-02.svg", // Ensure this file exists in /public
    description: "Our team crafts a tailored roadmap that aligns with your specific growth KPIs.",
  },
  {
    id: 3,
    title: "Execute & deliver results",
    icon: "/step-icon-03.svg", // Ensure this file exists in /public
    description: "We implement the solution with precision, ensuring measurable ROI and scalability.",
  },
];

export default function Method() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 bg-[#0B1121] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* 1. HEADER LAYOUT (Text Left, Button Right) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-slate-100 pb-12">
          <div className="max-w-2xl">
            <div className="mb-6">
              <TextReveal as="h2" className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Our method for strategic B2B growth
              </TextReveal>
            </div>
            <FadeIn delay={0.1}>
              <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                Our streamlined 3-step approach ensures your business gets a focused strategy, 
                practical solutions, and measurable outcomes.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="shrink-0">
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1">
              Explore our services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 12L10 8L6 4"/>
              </svg>
            </button>
          </FadeIn>
        </div>

        {/* 2. INTERACTIVE GRAPH SECTION */}
        <div className="relative">
          
          {/* Mobile Tab Switcher (Optional, but good for accessibility) */}
          <div className="flex gap-8 mb-16 md:hidden overflow-x-auto pb-4 scrollbar-hide">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={clsx(
                  "whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-colors",
                  activeStep === step.id ? "text-blue-500" : "text-slate-500"
                )}
              >
                Step {step.id}
              </button>
            ))}
          </div>

          {/* THE GRAPH AREA */}
          <div className="relative grid md:grid-cols-3 gap-8">
            
            {/* Background Decoration (The S-Curve or Line) */}
            <div className="absolute top-[3.5rem] left-0 w-full h-auto -z-10 hidden md:block opacity-30 pointer-events-none">
               <Image 
                 src="/step-decoration.svg" //
                 alt="" 
                 width={1200} 
                 height={200} 
                 className="w-full object-contain"
               />
            </div>

            {/* The 3 Interactive Steps */}
            {steps.map((step, index) => {
              const isActive = activeStep === step.id;
              
              // Logic: Steps BEFORE or EQUAL to current active step are "Passed/Active"
              const isPassed = activeStep >= step.id; 

              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(step.id)} // <--- THIS MAKES THE GRAPH CLICKABLE
                  className={clsx(
                    "relative group cursor-pointer flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300",
                    isActive ? "bg-slate-800" : "hover:bg-slate-800/50"
                  )}
                >
                  
                  {/* Step Connector Line (Custom "Light Up" Logic) */}
                  {index < steps.length - 1 && (
                     <div className={clsx(
                       "hidden md:block absolute top-[4.5rem] left-1/2 w-full h-[2px] -z-10 transition-colors duration-500 delay-100",
                       // If we are past this step, light up the line to the next one
                       activeStep > step.id ? "bg-blue-600" : "bg-slate-700"
                     )} />
                  )}

                  {/* Icon Circle */}
                  <div className="relative mb-8">
                     <motion.div 
                       initial={false}
                       animate={{
                         backgroundColor: isActive ? "#2563eb" : "#0f172a",
                         borderColor: isActive ? "#2563eb" : isPassed ? "#2563eb" : "#334155", // Blue border if passed
                         scale: isActive ? 1.15 : 1
                       }}
                       transition={{ duration: 0.3 }}
                       className={clsx(
                         "w-24 h-24 rounded-full border-2 flex items-center justify-center shadow-lg z-10 relative",
                         !isActive && "border-slate-700"
                       )}
                     >
                        {/* The Icon */}
                        <Image 
                          src={step.icon} 
                          alt={`Step ${step.id}`} 
                          width={36} 
                          height={36}
                          className={clsx(
                            "transition-all duration-300", 
                            isActive ? "brightness-0 invert" : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 invert"
                          )}
                        />
                     </motion.div>
                     
                     {/* Pulsing Ring for Active State */}
                     {isActive && (
                       <motion.div 
                         layoutId="pulse-ring"
                         className="absolute inset-0 rounded-full border-4 border-blue-100 z-0"
                         initial={{ scale: 1, opacity: 1 }}
                         animate={{ scale: 1.4, opacity: 0 }}
                         transition={{ duration: 1.5, repeat: Infinity }}
                       />
                     )}
                  </div>

                  {/* Text Content */}
                  <h3 className={clsx(
                    "text-xl font-bold mb-3 transition-colors duration-300",
                    isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"
                  )}>
                    {step.title}
                  </h3>
                  
                  <motion.div
                    animate={{ 
                      opacity: isActive ? 1 : 0.5,
                      y: isActive ? 0 : 5
                    }}
                    className="max-w-xs mx-auto"
                  >
                    <p className={clsx(
                      "leading-relaxed transition-colors duration-300",
                      isActive ? "text-slate-300" : "text-slate-600"
                    )}>
                      {step.description}
                    </p>
                  </motion.div>

                  {/* "Selected" Label (Optional visual cue) */}
                  <div className={clsx(
                    "mt-6 text-xs font-bold uppercase tracking-wider text-blue-600 transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0"
                  )}>
                    Selected Step
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}