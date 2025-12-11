// app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import About from "@/components/sections/About";
import Industries from "@/components/sections/Industries";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
// import Method from "@/components/sections/Method";
import Statistics from "@/components/sections/Statistics";
import CaseStudies from "@/components/sections/CaseStudies";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ClientLogos />
      <About />
      <Industries />
      <WhyChooseUs />
      <Services />
      {/* <Method /> */}
      <Statistics />
      <CaseStudies />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}