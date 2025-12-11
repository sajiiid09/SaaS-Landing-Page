"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";

const features = [
  "Deep experience across B2B sectors",
  "Solutions aligned with your business goals",
  "Frameworks built for long-term success",
  "Working with you, not just for you",
];

export default function About() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        
        {/* Header: Title & Description */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="max-w-3xl">
             <TextReveal as="h2" className="text-4xl lg:text-5xl font-bold leading-tight text-[#F3FFC9]">
               Informed strategy, Operational strength, and sustainable results.
             </TextReveal>
          </div>
          
          <FadeIn direction="left" delay={0.2}>
            {/* Removed specific text color class to inherit global #F3FFC9 */}
            <p className="text-lg leading-relaxed max-w-lg opacity-80">
              We specialize in empowering B2B companies with results-driven consulting 
              solutions tailored to modern business challenges.
            </p>
          </FadeIn>
        </div>

        {/* Main Content: Image & List */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image with Reveal Effect */}
          <FadeIn className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10">
            <Image
              src="/about-detail-image.webp" 
              alt="Team working on strategy"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </FadeIn>

          {/* Right: Feature List */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <FadeIn 
                key={index} 
                delay={0.2 + (index * 0.1)}
                direction="up"
              >
                <SpotlightCard className="rounded-xl p-6 flex items-center gap-6 group cursor-default bg-[#0A0A0A]">
                  {/* Custom Checkmark Bullet */}
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#F3FFC9] shrink-0 border border-white/10 group-hover:bg-[#F3FFC9] group-hover:text-black group-hover:border-[#F3FFC9] transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  
                  {/* Text Item */}
                  <span className="text-xl font-medium text-[#F3FFC9] transition-colors duration-300">
                    {item}
                  </span>
                </SpotlightCard>
              </FadeIn>
            ))}

            <FadeIn delay={0.6} className="pt-4">
              <motion.button 
                whileHover={{ x: 4 }}
                // Updated border/text color to match the new theme
                className="text-[#F3FFC9] font-semibold border-b-2 border-[#F3FFC9]/30 hover:border-[#F3FFC9] pb-1 transition-all duration-300"
              >
                More about us
              </motion.button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}