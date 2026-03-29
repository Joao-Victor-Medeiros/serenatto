import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const SerenattoFooter = () => (
  <footer id="contato" className="bg-coffee-dark text-cream/80 py-16">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-xl font-bold text-cream mb-4">Serenatto</h3>
          <p className="text-sm leading-relaxed text-cream/60">
            Cafés especiais selecionados das melhores fazendas de Minas Gerais. Qualidade, frescor e
            experiência sensorial em cada xícara.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-cream mb-4 text-sm tracking-wide uppercase">Institucional</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#sobre" className="hover:text-cream transition-colors">Sobre nós</a></li>
            <li><a href="#produtos" className="hover:text-cream transition-colors">Nossos cafés</a></li>
            <li><a href="#educativo" className="hover:text-cream transition-colors">Aprenda</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Política de privacidade</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-cream mb-4 text-sm tracking-wide uppercase">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-sage" /> contato@serenatto.com.br</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-sage" /> (31) 99999-0000</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sage" /> Minas Gerais, Brasil</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-cream mb-4 text-sm tracking-wide uppercase">Redes Sociais</h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-cream/10 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Serenatto Cafés Especiais. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default SerenattoFooter;
