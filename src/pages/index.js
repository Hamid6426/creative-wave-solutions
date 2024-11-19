import Image from "next/image";
import Hero from "@/components/Hero";
import ServiceHighlights from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import AboutUsTeaser from "@/components/AboutUsTeaser";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import BlogTeaser from "@/components/BlogTeaser";
import CallToActions from "@/components/CallToActions";
import ContactInfo from "@/components/ContactInfo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Hero />
      <ServiceHighlights />
      <PortfolioShowcase />
      <Testimonials />
      <AboutUsTeaser />
      <BlogTeaser/>
      <CallToActions/>
      <ContactInfo />
    </div>
  );
}
