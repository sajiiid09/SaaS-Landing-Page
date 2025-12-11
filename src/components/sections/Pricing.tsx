"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import clsx from "clsx";

const plans = [
  {
    name: "Starter",
    price: { monthly: 1500, yearly: 1250 },
    description: "Perfect for early-stage teams or small B2B companies.",
    features: [
      "Strategy sessions (2x/month)",
      "Competitive landscape analysis",
      "Ideal customer profile (ICP)",
      "1 sales funnel review",
      "Basic email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: { monthly: 3500, yearly: 2900 },
    description: "Designed for scaling B2B teams focused on lead generation.",
    features: [
      "Weekly consulting sessions",
      "GTM & sales process alignment",
      "CRM optimization & reporting",
      "Lead generation roadmap",
      "Priority Slack support",
      "A/B testing strategies",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 5500, yearly: 4600 },
    description: "Consulting for mature B2B operations or multi-region teams.",
    features: [
      "Dedicated strategy consultant",
      "Quarterly growth audits",
      "Team training & onboarding",
      "Full-stack MarTech evaluation",
      "On-call support",
      "Custom API integrations",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  // State to track which card's dropdown is open. null means none.
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header & Toggle */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-6">
            <TextReveal as="h2" className="text-3xl lg:text-4xl font-bold text-[#F3FFC9]">
              The right consulting plan for your business
            </TextReveal>
          </div>
          
          {/* Toggle Switch */}
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4 bg-[#0A0A0A] p-1.5 rounded-full border border-[#F3FFC9]/20">
              <button
                onClick={() => setBilling("monthly")}
                className={clsx(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300",
                  billing === "monthly" ? "bg-[#F3FFC9] text-black shadow-lg" : "text-[#F3FFC9]/60 hover:text-[#F3FFC9]"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={clsx(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 relative",
                  billing === "yearly" ? "bg-[#F3FFC9] text-black shadow-lg" : "text-[#F3FFC9]/60 hover:text-[#F3FFC9]"
                )}
              >
                Yearly
                {/* Badge */}
                <span className="absolute -top-3 -right-3 bg-[#F3FFC9] text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm animate-pulse border border-black/10">
                  -20%
                </span>
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <FadeIn 
              key={plan.name} 
              delay={0.2 + index * 0.1}
              className="h-full"
            >
              <SpotlightCard 
                className={clsx(
                  "relative p-8 rounded-3xl transition-all duration-300 flex flex-col h-full bg-[#0A0A0A]",
                  plan.popular 
                    ? "border-[#F3FFC9]/40 shadow-[0_0_40px_-10px_rgba(243,255,201,0.15)] scale-105 z-10" 
                    : "border-[#F3FFC9]/10 hover:border-[#F3FFC9]/20"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F3FFC9] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="mb-8 text-center">
                  <h3 className="text-lg font-bold text-[#F3FFC9] mb-2 uppercase tracking-widest opacity-80">{plan.name}</h3>
                  <p className="text-sm text-[#F3FFC9]/60 min-h-[40px]">{plan.description}</p>
                </div>

                {/* Price Animation */}
                <div className="mb-8 flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-[#F3FFC9]">$</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={billing}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-6xl font-bold text-[#F3FFC9] tracking-tighter"
                    >
                      {plan.price[billing].toLocaleString()}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-[#F3FFC9]/50 font-medium">/mo</span>
                </div>

                {/* DROPDOWN SECTION (The "Slick" Accordion) */}
                <div className="w-full mb-8">
                  <button 
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex items-center justify-between text-sm font-medium text-[#F3FFC9] py-3 border-b border-[#F3FFC9]/20 hover:text-white transition-colors group"
                  >
                    <span>What&apos;s included</span>
                    <motion.svg 
                      animate={{ rotate: openDropdown === index ? 180 : 0 }}
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="opacity-70 group-hover:opacity-100"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {(openDropdown === index || plan.popular) && ( // Option: Keep popular open by default or just use openDropdown check
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="pt-4 space-y-3">
                          {plan.features.map((feature, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div className={clsx(
                                "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                                plan.popular ? "bg-[#F3FFC9] text-black" : "bg-[#F3FFC9]/10 text-[#F3FFC9]"
                              )}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="2 6 4.5 9 10 3" />
                                </svg>
                              </div>
                              <span className="text-sm text-[#F3FFC9]/80">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-auto">
                  <button className={clsx(
                    "w-full py-4 rounded-full font-bold transition-all duration-300",
                    plan.popular 
                      ? "bg-[#F3FFC9] text-black hover:bg-white hover:shadow-lg hover:shadow-[#F3FFC9]/25" 
                      : "bg-[#F3FFC9]/10 text-[#F3FFC9] border border-[#F3FFC9]/20 hover:bg-[#F3FFC9] hover:text-black"
                  )}>
                    Get Started
                  </button>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}