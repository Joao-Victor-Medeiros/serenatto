import { motion } from "framer-motion";
import { BookOpen, Droplets, Flame } from "lucide-react";
import brewingImage from "@/assets/brewing.jpg";

const topics = [
  {
    icon: BookOpen,
    title: "Como escolher seu café",
    desc: "Entenda a diferença entre processos naturais, lavados e cereja descascado. Cada método revela perfis sensoriais únicos que combinam com seu paladar.",
  },
  {
    icon: Droplets,
    title: "Notas sensoriais",
    desc: "Chocolateado, frutado, floral ou especiado? Aprenda a identificar as nuances que tornam cada café especial e descubra seus favoritos.",
  },
  {
    icon: Flame,
    title: "Métodos de preparo",
    desc: "V60, Chemex, French Press, Espresso — cada método extrai características diferentes. Encontre o preparo ideal para seu café.",
  },
];

const EducationSection = () => (
  <section id="educativo" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <img
            src={brewingImage}
            alt="Preparo de café com V60"
            className="rounded-2xl shadow-elevated w-full max-w-md mx-auto object-cover aspect-square"
            loading="lazy"
            width={800}
            height={800}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase">
            Universo do Café
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Aprenda & Deguste
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg">
            Conhecimento transforma cada xícara em uma experiência. Descubra o que torna um café
            verdadeiramente especial.
          </p>

          <div className="flex flex-col gap-6">
            {topics.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-soft transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center">
                  <t.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-foreground mb-1">{t.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationSection;
