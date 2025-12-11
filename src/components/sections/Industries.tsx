"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";

const industries = [
  { name: "Healthcare", image: "/slider-image-1.webp" },
  { name: "Financial services", image: "/slider-image-2.webp" },
  { name: "Technology", image: "/slider-image-3.webp" },
  { name: "Manufacturing", image: "/slider-image-4.webp" },
  { name: "Logistics & supply chain", image: "/slider-image-5.webp" },
];

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const x = useMotionValue(0);

  // Calculate drag constraints based on content width
  useEffect(() => {
    const updateConstraints = () => {
      if (!containerRef.current || !trackRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;
      const maxScroll = Math.min(0, containerWidth - trackWidth);
      setConstraints({ left: maxScroll, right: 0 });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const currentX = x.get();
    const cardWidth = 320;
    const newX = direction === "left" 
      ? Math.min(0, currentX + cardWidth) 
      : Math.max(constraints.left, currentX - cardWidth);
    
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <section className="py-24 bg-black overflow-hidden">
      <FadeIn>
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div className="max-w-md">
            {/* Swapped FadeIn for TextReveal for consistency with other headers */}
            <TextReveal as="h2" className="text-3xl lg:text-4xl font-bold text-[#F3FFC9] leading-tight">
              Accelerating B2B growth across diverse industries
            </TextReveal>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-4">
            <motion.button
              onClick={() => scroll("left")}
              whileHover={{ scale: 1.05, borderColor: "#F3FFC9", backgroundColor: "rgba(243, 255, 201, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-[#F3FFC9]/20 bg-[#F3FFC9]/5 flex items-center justify-center transition-all duration-300 text-[#F3FFC9]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              whileHover={{ scale: 1.05, borderColor: "#F3FFC9", backgroundColor: "rgba(243, 255, 201, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-[#F3FFC9]/20 bg-[#F3FFC9]/5 flex items-center justify-center transition-all duration-300 text-[#F3FFC9]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </motion.button>
          </div>
        </div>
      </FadeIn>

      {/* Draggable Track */}
      <FadeIn delay={0.1}>
        <div ref={containerRef} className="w-full pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragConstraints={constraints}
            className="flex gap-6 w-max cursor-grab active:cursor-grabbing pb-10"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="relative w-[300px] h-[420px] md:w-[350px] md:h-[480px] rounded-2xl overflow-hidden group select-none shrink-0 border border-[#F3FFC9]/10"
                whileHover={{ scale: 0.98, borderColor: "rgba(243, 255, 201, 0.3)" }}
                transition={{ duration: 0.4 }}
              >
                {/* Image with Brightness Effect */}
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-all duration-700 brightness-75 group-hover:brightness-100 grayscale group-hover:grayscale-0" // Added grayscale for a cleaner "Cyber" look until hover
                  draggable={false}
                />

                {/* Overlay Gradient - True Black for AMOLED */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                {/* Text Label */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <motion.div
                    className="w-8 h-1 bg-[#F3FFC9] mb-4 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <h3 className="text-2xl font-semibold text-[#F3FFC9]">
                    {industry.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}