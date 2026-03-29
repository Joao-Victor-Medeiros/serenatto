import SerenattoHeader from "@/components/SerenattoHeader";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SerenattoFooter from "@/components/SerenattoFooter";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SerenattoHeader />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <EducationSection />
      <SerenattoFooter />
      <ChatWidget />
    </div>
  );
};

export default Index;
