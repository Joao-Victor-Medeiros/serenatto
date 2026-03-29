import SerenattoHeader from "@/components/SerenattoHeader";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SerenattoFooter from "@/components/SerenattoFooter";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Load Langflow chatbot script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/logspace-ai/langflow-embedded-chat@v1.0.7/dist/build/static/js/bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const chat = document.createElement("langflow-chat");
      chat.setAttribute("window_title", "Serenatto Assistente");
      chat.setAttribute("flow_id", "12a115b5-baf6-49cc-a5e4-7b5bdb2d2520");
      chat.setAttribute("host_url", "http://4.168.234.223:7860");
      document.body.appendChild(chat);
    };

    return () => {
      script.remove();
      const chat = document.querySelector("langflow-chat");
      if (chat) chat.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SerenattoHeader />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <EducationSection />
      <SerenattoFooter />
    </div>
  );
};

export default Index;
