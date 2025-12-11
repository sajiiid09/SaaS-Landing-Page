"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import SpotlightCard from "@/components/ui/SpotlightCard"; // Using SpotlightCard for consistency if available, otherwise manual styling below works too

export default function CTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Main Wrapper */}
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          
          {/* 1. The Big Banner */}
          <FadeIn className="relative w-full rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[2.4/1] group border border-[#F3FFC9]/10">
            {/* Background Image */}
            <Image
              src="/cta-bg.webp" 
              alt="CTA Background"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 grayscale" // Added grayscale to blend with the yellow theme
            />
            
            {/* Dark Overlay/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-[#F3FFC9]/5 mix-blend-overlay" />

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-lg z-10">
                <div className="text-3xl md:text-4xl font-bold text-[#F3FFC9] mb-6 leading-tight">
                  <span className="text-[#F3FFC9] mr-2">
                    Is your B2B business ready for the
                  </span>
                  <span className="text-[#F3FFC9] opacity-70">
                     next level?
                  </span>
                </div>
              </div>
              
              <div className="z-10 shrink-0">
                <Link 
                  href="/contact" 
                  className="group/btn relative inline-flex items-center gap-3 bg-[#F3FFC9] text-black px-8 py-4 rounded-full font-bold transition-all hover:bg-white hover:shadow-[0_0_30px_-5px_rgba(243,255,201,0.4)]"
                >
                  Book a Free Call
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover/btn:bg-black/20 transition-colors">
                    <Image 
                       src="/button-arrow.svg" 
                       alt="" 
                       width={12} 
                       height={12} 
                       // Invert arrow to be black on the light button
                       className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 invert" 
                    />
                  </div>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* 2. The Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <FadeIn delay={0.2} className="h-full">
              <Link 
                href="/contact" 
                className="group flex items-center justify-between p-8 rounded-2xl transition-all duration-300 bg-[#0A0A0A] border border-[#F3FFC9]/10 hover:border-[#F3FFC9]/30 hover:shadow-lg hover:shadow-[#F3FFC9]/5 h-full"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#F3FFC9]/5 flex items-center justify-center border border-[#F3FFC9]/10 group-hover:border-[#F3FFC9]/30 transition-all">
                    <Image 
                      src="/cta-icon.svg" 
                      alt="Icon" 
                      width={32} 
                      height={32}
                      className="invert brightness-100 sepia saturate-[500%] hue-rotate-[50deg] opacity-90"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F3FFC9] mb-2">Time to level up?</h3>
                    <span className="text-sm font-bold text-[#F3FFC9] opacity-60 uppercase tracking-wider group-hover:text-[#F3FFC9] group-hover:opacity-100">
                      Contact now
                    </span>
                  </div>
                </div>
                
                <div className="w-10 h-10 rounded-full border border-[#F3FFC9]/20 flex items-center justify-center group-hover:bg-[#F3FFC9] group-hover:text-black transition-all">
                  <Image 
                    src="/slider-right-arrow.svg" 
                    alt="Arrow" 
                    width={16} 
                    height={16}
                    // Default: Tinted Yellow. Hover: Black (because bg becomes yellow)
                    className="invert brightness-100 sepia saturate-[500%] hue-rotate-[50deg] group-hover:filter-none group-hover:invert transition-all"
                  />
                </div>
              </Link>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.3} className="h-full">
              <Link 
                href="/contact" 
                className="group flex items-center justify-between p-8 rounded-2xl transition-all duration-300 bg-[#0A0A0A] border border-[#F3FFC9]/10 hover:border-[#F3FFC9]/30 hover:shadow-lg hover:shadow-[#F3FFC9]/5 h-full"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#F3FFC9]/5 flex items-center justify-center border border-[#F3FFC9]/10 group-hover:border-[#F3FFC9]/30 transition-all">
                    <Image 
                      src="/cta-icon-02.svg" 
                      alt="Icon" 
                      width={32} 
                      height={32}
                      className="invert brightness-100 sepia saturate-[500%] hue-rotate-[50deg] opacity-90"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F3FFC9] mb-2">Need expert help?</h3>
                    <span className="text-sm font-bold text-[#F3FFC9] opacity-60 uppercase tracking-wider group-hover:text-[#F3FFC9] group-hover:opacity-100">
                      Contact our experts
                    </span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full border border-[#F3FFC9]/20 flex items-center justify-center group-hover:bg-[#F3FFC9] group-hover:text-black transition-all">
                  <Image 
                    src="/slider-right-arrow.svg" 
                    alt="Arrow" 
                    width={16} 
                    height={16}
                    className="invert brightness-100 sepia saturate-[500%] hue-rotate-[50deg] group-hover:filter-none group-hover:invert transition-all"
                  />
                </div>
              </Link>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}