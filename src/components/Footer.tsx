import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background via-secondary/30 to-background border-t border-border">
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">JLB Assessoria Contábil</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Confiança que gera resultados. Há 10 anos oferecendo soluções contábeis completas para empresas em todo o Brasil.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Navegação</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Início
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Sobre
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Serviços
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5584999035663" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">(84) 99903-5663</span>
              </a>
              <a 
                href="mailto:phd.solucoescontbeiss@gmail.com"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm break-all">phd.solucoescontbeiss@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Av. Dão Silveira, 3860 - Sala 02<br />Natal/RN</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Horário de atendimento</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div className="text-sm space-y-1">
                <p>Segunda a quinta:</p>
                <p className="font-medium">08:00 às 18:00</p>
                <p className="mt-2">Sexta-feira:</p>
                <p className="font-medium">08:00 às 17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} JLB Assessoria Contábil. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              CNPJ: 49.985.208/0001-04
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
