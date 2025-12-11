"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import clsx from "clsx";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="w-full h-full">
        
        {/* THE "GREEN MOSS" CANVAS */}
        {/* Updated to a darker shade (#161A18) and full-height/width feel */}
        <div className="bg-[#161A18] p-6 md:p-10 relative overflow-hidden min-h-[800px] flex flex-col justify-between">
          
          {/* Background Decor */}
          <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] pointer-events-none" />
          
          {/* Decorative Corner Shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
             <Image 
               src="/nav-gray-shape.svg" 
               alt="" 
               width={300} 
               height={300} 
               className="absolute -top-32 -left-32 opacity-10 invert sepia saturate-[500%] hue-rotate-[50deg]" 
             />
             <Image 
               src="/nav-gray-shape.svg" 
               alt="" 
               width={300} 
               height={300} 
               className="absolute -top-32 -right-32 opacity-10 invert sepia saturate-[500%] hue-rotate-[50deg] -rotate-90" 
             />
          </div>

          {/* MAIN CONTENT AREA: The Two "Black Islands" */}
          {/* The grid pushes the islands apart. We use flex-grow to ensure they fill the space nicely */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-4 flex-grow">
            
            {/* --- LEFT ISLAND (Navigation & Newsletter) --- */}
            {/* Note: rounded-br-[100px] creates the LEFT side of the notch */}
            <div className="bg-black rounded-[40px] lg:rounded-br-[100px] p-8 md:p-12 flex flex-col gap-12 border border-[#F3FFC9]/5 h-full relative z-20">
              
              {/* Newsletter */}
              <FadeIn>
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold text-[#F3FFC9] mb-6">Stay ahead of the curve</h3>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-[#0A0A0A] border border-[#F3FFC9]/20 rounded-full px-6 py-4 text-sm text-[#F3FFC9] placeholder:text-[#F3FFC9]/40 focus:outline-none focus:border-[#F3FFC9] transition-colors"
                    />
                    <button type="submit" className="bg-[#F3FFC9] text-black px-8 py-4 rounded-full text-sm font-bold hover:bg-white transition-colors shadow-lg shadow-[#F3FFC9]/10">
                      Subscribe
                    </button>
                  </form>
                </div>
              </FadeIn>

              {/* Links Grid */}
              <div className="grid grid-cols-2 gap-8 mt-auto">
                <div>
                  <h3 className="text-lg font-bold mb-6 text-[#F3FFC9] opacity-80">Pages</h3>
                  <ul className="space-y-3">
                    {["Home", "Services", "About", "Case Studies", "Contact"].map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-[#F3FFC9]/60 hover:text-[#F3FFC9] text-sm transition-colors font-medium block w-max">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-6 text-[#F3FFC9] opacity-80">Utility</h3>
                  <ul className="space-y-3">
                    {["Style Guide", "Licenses", "Changelog", "404 Page"].map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-[#F3FFC9]/60 hover:text-[#F3FFC9] text-sm transition-colors font-medium block w-max">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-8 border-t border-[#F3FFC9]/10">
                {[
                  { icon: "/facebook.svg", alt: "Facebook" },
                  { icon: "/instagram.svg", alt: "Instagram" },
                  { icon: "/linkedin_icon.svg", alt: "LinkedIn" }
                ].map((social, idx) => (
                  <Link 
                    key={idx} 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-[#F3FFC9]/10 flex items-center justify-center hover:bg-[#F3FFC9] hover:text-black transition-all group"
                  >
                    <Image 
                      src={social.icon} 
                      alt={social.alt} 
                      width={20} 
                      height={20} 
                      className="invert sepia saturate-[500%] hue-rotate-[50deg] opacity-80 group-hover:filter-none group-hover:brightness-0 group-hover:invert-0 transition-all" 
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* --- RIGHT ISLAND (Contact & Featured) --- */}
            {/* Note: rounded-bl-[100px] creates the RIGHT side of the notch */}
            <div className="bg-black rounded-[40px] lg:rounded-bl-[100px] p-8 md:p-12 flex flex-col gap-12 border border-[#F3FFC9]/5 h-full relative z-20">
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FadeIn delay={0.1}>
                  <h3 className="text-lg font-bold mb-4 text-[#F3FFC9] opacity-80">Contact</h3>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:hello@b2bizz.com" className="text-[#F3FFC9]/60 hover:text-[#F3FFC9] text-sm transition-colors">hello@b2bizz.com</a>
                    <a href="tel:+1234567890" className="text-[#F3FFC9]/60 hover:text-[#F3FFC9] text-sm transition-colors">+1 (555) 123-4567</a>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h3 className="text-lg font-bold mb-4 text-[#F3FFC9] opacity-80">Office</h3>
                  <p className="text-[#F3FFC9]/60 text-sm leading-relaxed">
                    120 Business Avenue,<br/>
                    Suite 14, New York,<br/>
                    NY 10001, USA
                  </p>
                </FadeIn>
              </div>

              {/* Featured Case Study */}
              <FadeIn delay={0.3} className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="text-sm font-bold text-[#F3FFC9] uppercase tracking-wider opacity-60">Featured Story</h3>
                   <span className="text-[#F3FFC9] text-[10px] font-bold px-2 py-1 rounded border border-[#F3FFC9]/20 bg-[#F3FFC9]/5">NEW</span>
                </div>
                <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-8 group cursor-pointer border border-[#F3FFC9]/10">
                  <Image
                    src="/case-study-06.webp"
                    alt="Featured Case Study"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                     <h4 className="text-[#F3FFC9] font-bold text-lg group-hover:translate-x-2 transition-transform">Digital Transformation for Retail</h4>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-[#F3FFC9]/10">
                  <Link href="/" className="inline-block opacity-80 hover:opacity-100 transition-opacity">
                    <Image
                      src="/Cobalto.svg"
                      alt="B2Bizz Logo"
                      width={120}
                      height={32}
                      className="w-auto h-8 invert sepia saturate-[500%] hue-rotate-[50deg]" 
                    />
                  </Link>
                </div>
              </FadeIn>
            </div>

          </div>

          {/* THE "COPYRIGHT NOTCH" CONTENT */}
          {/* Absolutely positioned at the bottom center. No background, just text on moss. */}
          {/* The negative margin pulls it up into the space created by the rounded corners above */}
          <div className="absolute bottom-4 left-0 w-full flex justify-center z-10">
             <div className="flex items-center gap-6 text-[10px] font-bold text-[#F3FFC9]/60 uppercase tracking-widest">
                <p>© 2025 B2Bizz.</p>
                <div className="w-1 h-1 rounded-full bg-[#F3FFC9]/40" />
                <p className="hover:text-[#F3FFC9] transition-colors cursor-pointer">Designed by Webestica</p>
                <div className="w-1 h-1 rounded-full bg-[#F3FFC9]/40" />
                <p className="hover:text-[#F3FFC9] transition-colors cursor-pointer">Powered by Webflow</p>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
}