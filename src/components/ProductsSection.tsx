import { motion } from "framer-motion";

interface Coffee {
  name: string;
  region: string;
  process: string;
  notes: string;
  badges: string[];
  price: string;
  sca: number;
}

const coffees: Coffee[] = [
  {
    name: "Serenatto Clássico",
    region: "Sul de Minas",
    process: "Natural",
    notes: "Chocolate, caramelo, nozes",
    badges: ["Equilibrado", "Corpo médio"],
    price: "R$ 49,90",
    sca: 83,
  },
  {
    name: "Cerrado Doce",
    region: "Cerrado Mineiro",
    process: "Cereja descascado",
    notes: "Frutas vermelhas, mel, especiarias",
    badges: ["Notas frutadas", "Premium"],
    price: "R$ 59,90",
    sca: 85,
  },
  {
    name: "Montanha Fina",
    region: "Mantiqueira de Minas",
    process: "Lavado",
    notes: "Cítrico, floral, chá preto",
    badges: ["Alta acidez", "Complexo"],
    price: "R$ 64,90",
    sca: 87,
  },
  {
    name: "Bourbon Amarelo",
    region: "Chapada de Minas",
    process: "Natural",
    notes: "Amêndoas, rapadura, cacau",
    badges: ["Encorpado", "Edição limitada"],
    price: "R$ 74,90",
    sca: 88,
  },
];

const badgeColor = (badge: string) => {
  if (badge === "Premium" || badge === "Edição limitada") return "bg-gold/15 text-gold border-gold/30";
  if (badge.includes("frutad") || badge.includes("Cítric")) return "bg-sage/10 text-sage border-sage/30";
  return "bg-coffee-light/10 text-coffee-light border-coffee-light/20";
};

const ProductsSection = () => (
  <section id="produtos" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-accent tracking-widest uppercase">Seleção Especial</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Nossos Cafés
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Cada lote é cuidadosamente selecionado, avaliado e torrado para extrair o melhor de cada terroir.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coffees.map((coffee, i) => (
          <motion.div
            key={coffee.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card rounded-xl border border-border hover:shadow-card transition-all duration-300 overflow-hidden"
          >
            {/* Color accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-coffee-medium to-accent" />

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                  {coffee.region}
                </span>
                <span className="text-xs font-bold text-accent bg-sage-light px-2 py-0.5 rounded-full">
                  SCA {coffee.sca}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {coffee.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">
                Processo: {coffee.process}
              </p>
              <p className="text-sm text-coffee-light font-medium mb-4">
                ☕ {coffee.notes}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {coffee.badges.map((b) => (
                  <span
                    key={b}
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${badgeColor(b)}`}
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-bold text-primary">
                  {coffee.price}
                </span>
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                  Comprar
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
