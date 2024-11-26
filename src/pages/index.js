import Hero from "@/components/Hero";
import ServiceHighlights from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import AboutUsTeaser from "@/components/AboutUsTeaser";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import CallToActions from "@/components/CallToActions";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Hero />
      <ServiceHighlights />
      <PortfolioShowcase />
      <Testimonials />
      <AboutUsTeaser />
      <CallToActions/>
    </div>
  );
}
