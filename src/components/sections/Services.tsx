"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import clsx from "clsx";

// Data Structure matching your assets and HTML content
const services = [
  {
    id: 0,
    title: "B2B website design & development",
    icon: "/service-icon.svg",
    description: "Professional, conversion-optimized websites tailored for business clients and lead generation.",
    tags: ["Business website", "Corporate site", "Responsive design", "Frontend"],
    image: "/service-01.webp",
    dashboard: "/service-1.svg", 
  },
  {
    id: 1,
    title: "Custom SaaS solutions",
    icon: "/service-icon-2.svg",
    description: "Robust SaaS platforms tailored for growth, scalability, and performance.",
    tags: ["SaaS development", "Cloud platform", "MVP"],
    image: "/service-02.webp",
    dashboard: "/service-2.svg",
  },
  {
    id: 2,
    title: "Enterprise digital strategy",
    icon: "/service-icon-3.svg",
    description: "Strategic insights that align digital efforts with business goals.",
    tags: ["Digital transformation", "B2B marketing", "KPIs"],
    image: "/service-03.webp",
    dashboard: "/service-3.svg",
  },
  {
    id: 3,
    title: "CRM & ERP integrations",
    icon: "/service-icon-4.svg",
    description: "Streamline operations with seamless business system integrations.",
    tags: ["Automation", "Business tools"],
    image: "/service-04.webp",
    dashboard: "/service-4.svg",
  },
  {
    id: 4,
    title: "Data-Driven marketing",
    icon: "/service-icon-5.svg",
    description: "Targeted marketing campaigns driven by real-time data analytics.",
    tags: ["Analytics", "Growth hacking", "B2B Lead Gen"],
    image: "/service-05.webp",
    dashboard: "/service-5.svg",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl mb-4">
            <TextReveal as="h2" className="text-3xl lg:text-4xl font-bold text-[#F3FFC9]">
              Expert services that move your business forward
            </TextReveal>
          </div>
          <FadeIn delay={0.2}>
            <motion.button 
              whileHover={{ y: -2 }}
              className="border border-[#F3FFC9]/20 text-[#F3FFC9] px-6 py-3 rounded-full font-medium hover:bg-[#F3FFC9]/5 hover:border-[#F3FFC9] transition-all duration-300"
            >
              Get started
            </motion.button>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: Dynamic Image Area */}
          {/* Updated background to #0A0A0A to stand out from bg-black */}
          <FadeIn className="relative aspect-[4/3] w-full rounded-2xl bg-[#0A0A0A] border border-[#F3FFC9]/10 overflow-hidden shadow-lg order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Main Background Image */}
                <Image
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  fill
                  className="object-cover opacity-80" // Slightly dimmed to blend with dark mode
                />

                {/* Floating Dashboard Overlay */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute bottom-0 right-0 w-3/4 h-3/4"
                >
                   <Image
                    src={services[activeTab].dashboard}
                    alt="Dashboard UI"
                    fill
                    className="object-contain object-bottom-right drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </FadeIn>

          {/* RIGHT: Interactive Accordion List */}
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            {services.map((service, index) => {
              const isActive = activeTab === index;

              return (
                <FadeIn key={service.id} delay={0.1 + index * 0.05}>
                  <SpotlightCard
                    onClick={() => setActiveTab(index)}
                    className={clsx(
                      "cursor-pointer rounded-2xl transition-all duration-300 bg-[#0A0A0A]", // Dark card bg
                      isActive
                        ? "border-[#F3FFC9]/30 shadow-[0_0_30px_-10px_rgba(243,255,201,0.15)]" // Glow effect
                        : "border-[#F3FFC9]/5 hover:border-[#F3FFC9]/20"
                    )}
                  >
                    <div className="p-6">
                      {/* Top Row: Icon & Title */}
                      <div className="flex items-center gap-4">
                        <div className={clsx(
                          "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
                          // Updated active/inactive states for the icon box
                          isActive ? "bg-[#F3FFC9] shadow-lg shadow-[#F3FFC9]/20" : "bg-[#F3FFC9]/5 border border-[#F3FFC9]/10"
                        )}>
                          <Image
                            src={service.icon}
                            alt=""
                            width={24}
                            height={24}
                            // Invert logic: If active, icon is dark (on light bg). If inactive, icon is light (on dark bg)
                            // Also added sepia tint to match the yellowish theme
                            className={clsx(
                              "transition-all duration-300",
                              isActive ? "brightness-0" : "invert sepia saturate-[500%] hue-rotate-[50deg] opacity-80"
                            )}
                          />
                        </div>
                        <h3 className={clsx(
                          "text-xl font-bold transition-colors",
                          // Active: Full color. Inactive: Dimmed
                          isActive ? "text-[#F3FFC9]" : "text-[#F3FFC9] opacity-60"
                        )}>
                          {service.title}
                        </h3>
                      </div>

                      {/* Expandable "Dropdown" Content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pl-[64px]">
                          <p className="text-[#F3FFC9] opacity-70 mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map(tag => (
                              <span key={tag} className="text-sm font-medium text-[#F3FFC9] opacity-80 bg-[#F3FFC9]/5 border border-[#F3FFC9]/10 px-3 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </SpotlightCard>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}