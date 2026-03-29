import { motion } from "framer-motion";
import { Leaf, Award, Coffee, MapPin } from "lucide-react";
import farmImage from "@/assets/farm-origin.jpg";

const features = [
  { icon: MapPin, title: "Origem Controlada", desc: "Grãos selecionados de fazendas em Minas Gerais com rastreabilidade completa." },
  { icon: Award, title: "Nota SCA 80+", desc: "Todos os nossos cafés são avaliados por Q-Graders com nota mínima de 80 pontos." },
  { icon: Coffee, title: "Recém-Torrado", desc: "Torração artesanal em pequenos lotes, garantindo frescor e perfil sensorial ideal." },
  { icon: Leaf, title: "Sustentável", desc: "Parceria direta com produtores, valorizando práticas sustentáveis e comércio justo." },
];

const AboutSection = () => (
  <section id="sobre" className="py-24 md:py-32 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase">Nossa Essência</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            Do terroir à sua xícara
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A Serenatto nasceu da paixão por cafés que contam histórias. Cada grão carrega o aroma
            das montanhas de Minas Gerais, o cuidado da colheita seletiva e a expertise de uma
            torração que revela sabores únicos — chocolate, frutas, especiarias e flores que se
            desdobram a cada gole.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={farmImage}
            alt="Fazenda de café em Minas Gerais"
            className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-card p-5 border border-border">
            <p className="font-display text-2xl font-bold text-primary">+2.000</p>
            <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
