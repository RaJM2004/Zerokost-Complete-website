import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuantumSection from "@/components/QuantumSection";
import AISection from "@/components/AISection";
import RoboSection from "@/components/RoboSection";
import ConsultingSection from "@/components/ConsultingSection";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProductsSection from "@/components/ProductsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <QuantumSection />
      <AISection />
      <ConsultingSection />
      <RoboSection />
      <AboutSection />
      <IndustriesSection />
      <ProductsSection />
      <Contact />
      <Footer />
    </div>
  );
}
