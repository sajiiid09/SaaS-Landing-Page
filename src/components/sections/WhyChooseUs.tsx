"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";

const features = [
  {
    icon: "/why-choose-us-icon-1.svg",
    title: "B2B expertise that matters",
    description: "Deep expertise in navigating B2B challenges and opportunities.",
  },
  {
    icon: "/why-choose-us-icon-2.svg",
    title: "End-to-End consulting",
    description: "From planning to execution, we cover every step.",
  },
  {
    icon: "/why-choose-us-icon-3.svg",
    title: "Data-Driven decisions",
    description: "We use data and experience to drive smart business moves.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="mb-4 flex flex-col items-center">
            <TextReveal as="h2" className="text-3xl lg:text-4xl font-bold text-[#F3FFC9] mb-4">
              What makes us the right partner
            </TextReveal>
          </div>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg text-[#F3FFC9] opacity-80">
              Choosing the right consulting partner can define the future of your business. 
              At B2bizz, we don’t just advise — we collaborate, innovate, and deliver.
            </p>
          </FadeIn>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FadeIn 
              key={index} 
              delay={0.2 + index * 0.1} 
              className="h-full"
            >
              <SpotlightCard className="group p-8 rounded-2xl h-full flex flex-col transition-all duration-300 bg-[#0A0A0A] border-[#F3FFC9]/10">
                <div className="w-14 h-14 bg-[#F3FFC9]/5 rounded-xl shadow-sm border border-[#F3FFC9]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src={feature.icon} 
                    alt="" 
                    width={32} 
                    height={32} 
                    // Using a sepia filter trick to tint the white inverted icon towards the yellowish #F3FFC9
                    className="w-8 h-8 invert brightness-100 sepia saturate-[500%] hue-rotate-[50deg] opacity-90"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#F3FFC9] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#F3FFC9] opacity-70 leading-relaxed">
                  {feature.description}
                </p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        {/* Large Image with Floating Testimonial */}
        <FadeIn direction="up" delay={0.4} className="relative rounded-3xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] border border-[#F3FFC9]/10">
          <Image
            src="/why-choose-bg-image.webp" 
            alt="Office meeting"
            fill
            className="object-cover opacity-80"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Floating Testimonial Card */}
          <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-12 md:bottom-12 md:w-[480px]">
              <FadeIn delay={0.6} direction="left" className="bg-[#0A0A0A]/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-[#F3FFC9]/10">
                <div className="flex items-start gap-4">
                  <Image
                    src="/review-avtar-image.webp"
                    alt="Orion Blake"
                    width={56}
                    height={56}
                    className="rounded-full object-cover shrink-0 border border-[#F3FFC9]/20"
                  />
                  <div>
                    <p className="text-[#F3FFC9] italic text-sm leading-relaxed mb-4 opacity-90">
                      &quot;Working with B2bizz was a game-changer for our B2B strategy. 
                      Their team didn’t just offer advice — they became an extension of our leadership.&quot;
                    </p>
                    <div>
                      <div className="font-bold text-[#F3FFC9]">Orion Blake</div>
                      <div className="text-xs font-semibold text-[#F3FFC9] opacity-70 uppercase tracking-wide">COO, TechFlow</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}