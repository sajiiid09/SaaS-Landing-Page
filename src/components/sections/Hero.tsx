"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#161A18] p-4 h-[70vh] flex flex-col">
      {/* Background Decor with Radial Glow - Framed */}
      <div className="relative w-full h-full rounded-[32px] overflow-hidden z-0 flex-grow">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-90"
        >
          <source src="/hero-vid04.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1121] via-[#0B1121]/10 to-transparent" />
        
        {/* Radial Blue Glow Behind Text */}
        <div className="absolute top-1/3 right-0 w-[800px] h-[500px] bg-blue-500/10 blur-[50px] pointer-events-none" />
      </div>

      <div className="absolute inset-0 container mx-auto px-10 grid lg:grid-cols-2 gap-12 items-center z-10 pointer-events-none">
        
        {/* LEFT COLUMN: Content */}
        <div className="max-w-xl pointer-events-auto pl-8 flex flex-col justify-center h-full pb-10">
          <FadeIn delay={0.1}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-4 border border-blue-500/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"/>
              v2.0 Released
            </motion.div>
          </FadeIn>

          <div className="mb-4">
             <TextReveal as="h1" className="text-3xl lg:text-5xl font-bold leading-[1.1] text-[#F8FAFC]">
               Smart Solutions For Scaling
             </TextReveal>
             <div className="flex flex-wrap items-baseline gap-x-[0.25em] text-3xl lg:text-5xl font-bold leading-[1.1]">
               <TextReveal as="span" className="text-blue-500">B2B</TextReveal>
               <TextReveal as="span" className="text-[#F8FAFC]">operations.</TextReveal>
             </div>
          </div>

          <FadeIn delay={0.3} direction="up">
            <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-md">
              We help B2B companies streamline their processes, automate workflows, and drive measurable growth with data-driven strategies.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ y: -2, boxShadow: "0 0 20px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ y: -1 }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
           
          </FadeIn>

          <FadeIn delay={0.5} className="mt-6 flex items-center gap-4 text-xs font-medium text-slate-400">
             <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-[10px]">✓</div>
                No credit card
             </div>
             <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-[10px]">✓</div>
                7-day free trial
             </div>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN: Floating Visuals */}
        <div className="relative h-full w-full hidden lg:block pointer-events-none">
          
          {/* Main Dashboard Image */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute top-10 left-10 z-10 w-[90%] shadow-2xl shadow-blue-900/20 rounded-xl overflow-hidden border border-white/10 bg-[#151F32]"
          >
             <div className="aspect-[4/3] relative bg-slate-900">
               <Image src="/hero-list-two.svg" alt="Dashboard" fill className="object-cover" />
             </div>
          </motion.div> */}

          {/* Floating Element 1 (Top Right) */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute -right-4 top-1/4 z-20 bg-[#151F32]/80 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-white/10 pointer-events-auto"
          >
             <div className="flex items-center gap-3">
               <div className="bg-blue-500/20 p-2 rounded-md">📈</div>
               <div>
                 <p className="text-xs text-slate-500">Growth</p>
                 <p className="font-bold text-white">+128%</p>
               </div>
             </div>
          </motion.div> */}

           {/* Floating Element 2 (Bottom Left) */}
           {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute bottom-1/4 left-0 z-20 bg-[#151F32]/80 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-white/10 max-w-[200px] pointer-events-auto"
          >
             <p className="text-xs text-slate-500 mb-2">Active Users</p>
             <div className="flex -space-x-2">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-blue-900/40 border-2 border-[#0B1121]" />
               ))}
               <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-[#0B1121] flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
             </div>
          </motion.div> */}
          
        </div>
      </div>
    </section>
  );
}