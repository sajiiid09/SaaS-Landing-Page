"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn"; // Reusing your wrapper

const logos = [
  "/client-item-1.svg",
  "/client-item-2.svg",
  "/client-item-3.svg",
  "/client-item-4.svg",
  "/client-item-5.svg",
  "/client-item-6.svg",
];

export default function ClientLogos() {
  return (
    <section className="h-[30vh] bg-[#161A18] overflow-hidden border-b border-white/5 flex flex-col justify-center">
      <div className="container mx-auto px-6 mb-8 text-center">
        <FadeIn>
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
            Trusted by fast-moving B2B teams
          </p>
        </FadeIn>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden mask-linear-gradient">
        {/* We need two sets of logos to create the seamless loop effect */}
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </section>
  );
}

const MarqueeGroup = () => (
  <motion.div
    initial={{ x: 0 }}
    animate={{ x: "-100%" }}
    transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    }}
    className="flex flex-shrink-0 gap-16 px-8 items-center"
  >
    {logos.map((src, index) => (
      <motion.div 
        key={index} 
        className="relative w-32 h-12 cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={src}
          alt={`Client logo ${index + 1}`}
          fill
          className="object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-all duration-300"
        />
      </motion.div>
    ))}
  </motion.div>
);