import { motion } from "framer-motion";
import heroCoffee from "@/assets/hero-coffee.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroCoffee}
        alt="Grãos de café especiais"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/90 via-coffee-dark/70 to-transparent" />
    </div>

    <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-sage/20 text-sage-light text-sm font-medium tracking-wide border border-sage/30">
          Nota SCA acima de 80
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-cream">
          Cafés especiais selecionados direto das melhores fazendas de Minas Gerais
        </h1>
        <p className="text-lg md:text-xl text-cream-dark/90 mb-8 leading-relaxed max-w-xl">
          Uma experiência sensorial única em cada xícara. Grãos recém-torrados, perfis aromáticos
          exclusivos e rastreabilidade completa da origem.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#produtos"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity shadow-elevated"
          >
            Explorar Cafés
          </a>
          <a
            href="#sobre"
            className="px-8 py-4 rounded-lg border border-cream/30 text-cream font-medium hover:bg-cream/10 transition-colors"
          >
            Nossa História
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
