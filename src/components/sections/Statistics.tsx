"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import Counter from "@/components/ui/Counter";

const stats = [
  {
    id: 1,
    value: 4,
    suffix: "X",
    label: "Average ROI on digital strategy projects",
  },
  {
    id: 2,
    value: 5,
    suffix: "", 
    label: "Countries served with B2B services",
  },
];

export default function Statistics() {
  return (
    <section className="py-24 bg-black"> {/* AMOLED Black */}
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Visual Decoration */}
          {/* Added consistent background and border styling for image container */}
          <FadeIn className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#F3FFC9]/10">
             <Image
               src="/dd_statistics-image.png" //
               alt="Growth Statistics"
               fill
               className="object-contain p-8" // Added padding to frame the graphic nicely
             />
          </FadeIn>

          {/* Right: Content & Counters */}
          <div className="flex flex-col gap-10">
            <div className="mb-6">
              <TextReveal as="h2" className="text-3xl lg:text-4xl font-bold text-[#F3FFC9] mb-6">
                Proven performance, Measurable results
              </TextReveal>
            </div>
              {/* Used global text color with opacity for hierarchy */}
              <p className="text-[#F3FFC9] opacity-80 text-lg leading-relaxed">
                Our work is backed by measurable results. These numbers reflect the trust, 
                success, and outcomes we&apos;ve delivered for our B2B partners across 
                industries and regions.
              </p>

            {/* Counters Grid */}
            <div className="grid sm:grid-cols-2 gap-8 border-t border-[#F3FFC9]/20 pt-10">
              {stats.map((stat, index) => (
                <FadeIn 
                  key={stat.id} 
                  delay={0.2 + (index * 0.1)}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-baseline gap-1 text-5xl font-bold text-[#F3FFC9]">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  {/* The small divider line matching accent color */}
                  <div className="w-12 h-1 bg-[#F3FFC9] my-2" />
                  
                  <p className="font-medium text-[#F3FFC9] opacity-90">
                    {stat.label}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}