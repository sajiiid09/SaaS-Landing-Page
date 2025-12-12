"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = {
  label: string;
  href: string;
  key: string;
};

type NavSection = {
  title: string;
  columns: NavLink[][];
};

type PreviewConfig = {
  imageSrc: string;
  alt: string;
};

const NAV_SECTIONS: NavSection[] = [
  {
    title: "Agentic Intelligence Services",
    columns: [
      [
        { label: "AI For Everyone", href: "/ai-for-everyone", key: "ai-for-everyone" },
        { label: "AI For Business", href: "/ai-for-business", key: "ai-for-business" },
        { label: "AI For Government", href: "/ai-for-government", key: "ai-for-government" },
      ],
      [
        { label: "Contact Us", href: "/contact", key: "contact-us" },
        { label: "Privacy Policy", href: "/privacy-policy", key: "privacy-policy" },
      ],
    ],
  },
  {
    title: "Services & Resources",
    columns: [
      [
        { label: "AI Custom Solution", href: "/ai-custom-solution", key: "ai-custom-solution" },
        { label: "AI Consultancy", href: "/ai-consultancy", key: "ai-consultancy" },
      ],
      [
        { label: "Blogs", href: "/blogs", key: "blogs" },
        { label: "Case Studies", href: "/case-studies", key: "case-studies" },
        { label: "ROI", href: "/roi", key: "roi" },
        { label: "Reviews", href: "/reviews", key: "reviews" },
      ],
    ],
  },
];

const PREVIEW_MAP: Record<string, PreviewConfig> = {
  "ai-for-everyone": {
    imageSrc: "/images/previews/ai-for-everyone.jpg",
    alt: "AI for everyone preview",
  },
  "ai-for-business": {
    imageSrc: "/images/previews/ai-for-business.jpg",
    alt: "AI for business preview",
  },
  "ai-for-government": {
    imageSrc: "/images/previews/ai-for-government.jpg",
    alt: "AI for government preview",
  },
  "contact-us": {
    imageSrc: "/images/previews/contact-us.jpg",
    alt: "Contact us preview",
  },
  "privacy-policy": {
    imageSrc: "/images/previews/privacy-policy.jpg",
    alt: "Privacy policy preview",
  },
  "ai-custom-solution": {
    imageSrc: "/images/previews/ai-custom-solution.jpg",
    alt: "AI custom solution preview",
  },
  "ai-consultancy": {
    imageSrc: "/images/previews/ai-consultancy.jpg",
    alt: "AI consultancy preview",
  },
  blogs: {
    imageSrc: "/images/previews/blogs.jpg",
    alt: "Blogs preview",
  },
  "case-studies": {
    imageSrc: "/images/previews/case-studies.jpg",
    alt: "Case studies preview",
  },
  roi: {
    imageSrc: "/images/previews/roi.jpg",
    alt: "ROI preview",
  },
  reviews: {
    imageSrc: "/images/previews/reviews.jpg",
    alt: "Reviews preview",
  },
};

type PreviewCardProps = {
  preview: PreviewConfig;
};

function PreviewCard({ preview }: PreviewCardProps) {
  return (
    <div className="bg-white/5 rounded-xl p-4 h-full flex flex-col gap-4">
      <h4 className="text-[#F3FFC9] text-xs font-bold uppercase tracking-wider opacity-50">
        Preview
      </h4>
      <div className="relative w-full overflow-hidden rounded-xl aspect-video bg-gray-800">
        <Image
          src={preview.imageSrc}
          alt={preview.alt}
          fill
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 text-[#F3FFC9] text-xs font-bold mt-4 hover:gap-3 transition-all"
      >
        Book a free call <span>→</span>
      </Link>
    </div>
  );
}

export default function Navbar() {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string>("ai-for-everyone");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pt-0 pointer-events-none">
      
      {/* CTA Button - Top Right (Glassmorphism) */}
      <div className="absolute top-8 right-8 pointer-events-auto hidden md:block">
         <Link 
            href="/contact" 
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wide hover:bg-white/20 transition-all shadow-lg hover:shadow-xl"
         >
            Request a consultation
         </Link>
      </div>

      {/* Container for the Notch Effect */}
      <div className="relative flex items-start pointer-events-auto">
        
        {/* Left Shape - Connecting Top Edge to Navbar Side */}
        <div className="h-full relative z-20 -mr-[20px] flex items-start">
             <Image 
               src="/vector-01.svg" 
               alt="" 
               width={20} 
               height={20} 
               className="w-auto h-[4.2rem]" 
             />
        </div>

        {/* MAIN NAVBAR CONTENT BLOCK */}
        <nav 
            className="bg-[#161A18] px-8 py-0 h-[4.5rem] flex items-center gap-8 rounded-b-[24px] shadow-2xl relative z-20"
            style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-[#F8FAFC] mr-4">
              <span className="text-white"></span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#F3FFC9]/60">
                <Link href="/" className="hover:text-[#F3FFC9] transition-colors text-white">Company</Link>
                
                {/* Pages Dropdown (Mega Menu Trigger) */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setIsPagesOpen(true)}
                  onMouseLeave={() => setIsPagesOpen(false)}
                >
                    <button className="flex items-center gap-1 hover:text-[#F3FFC9] transition-colors focus:outline-none py-4">
                       RACO AI
                        <svg className={`w-3 h-3 transition-transform ${isPagesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                        {isPagesOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[600px] bg-[#161A18] border border-[#F3FFC9]/10 rounded-2xl p-6 shadow-xl overflow-hidden grid grid-cols-2 gap-8"
                            >
                                {/* Column 1: Pages & Resources */}
                                <div className="space-y-6">
                                    {NAV_SECTIONS.map((section) => (
                                        <div key={section.title}>
                                            <h4 className="text-[#F3FFC9] text-xs font-bold uppercase tracking-wider mb-3 opacity-50">{section.title}</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {section.columns.map((column, columnIndex) => (
                                                    <div key={`${section.title}-col-${columnIndex}`} className="space-y-2">
                                                        {column.map((link) => (
                                                            <Link
                                                                key={link.key}
                                                                href={link.href}
                                                                className="block text-sm text-white/80 hover:text-[#F3FFC9] hover:bg-white/5 p-2 rounded transition-colors"
                                                                onMouseEnter={() => setActiveKey(link.key)}
                                                                onFocus={() => setActiveKey(link.key)}
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Column 2: Preview Feature */}
                                <PreviewCard
                                    preview={
                                        PREVIEW_MAP[activeKey] ?? PREVIEW_MAP["ai-for-everyone"]
                                    }
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <Link href="/about" className="hover:text-[#F3FFC9] transition-colors">Plans</Link>
                <Link href="/services" className="hover:text-[#F3FFC9] transition-colors">Resources</Link>
            </div>

            {/* Mobile Menu Toggle (Simplified) */}
             <div className="md:hidden">
                <button className="text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </button>
            </div>
        </nav>

        {/* Right Shape */}
        <div className="h-full relative z-20 -ml-[20px] flex items-start">
             <Image 
               src="/vector-01.svg" 
               alt="" 
               width={20} 
               height={20} 
               className="w-auto h-[4.3rem]" 
               style={{ transform: "scaleX(-1)" }}
             />
        </div>

      </div>
    </div>
  );
}