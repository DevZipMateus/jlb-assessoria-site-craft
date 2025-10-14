import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/75"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-secondary rounded-full">
            <span className="text-secondary-foreground font-semibold text-sm">
              10 anos de excelência contábil
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            JLB Assessoria Contábil
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-muted-foreground">
            Garantindo informações seguras e transparentes para o crescimento sustentável do seu negócio
          </h2>

          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl">
            Soluções contábeis completas com atendimento personalizado em todo o Brasil. Confiança que gera resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground text-lg px-8 py-6 h-auto"
              onClick={() => window.open("https://wa.me/5584999035663", "_blank")}
            >
              Solicitar consultoria
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/60 text-foreground hover:bg-secondary text-lg px-8 py-6 h-auto"
              onClick={() => {
                const element = document.getElementById("about");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              Conheça nossa história
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
              <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">Segurança e sigilo</h3>
                <p className="text-sm text-muted-foreground">Total confidencialidade das suas informações</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
              <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">Crescimento sustentável</h3>
                <p className="text-sm text-muted-foreground">Estratégias para resultados duradouros</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
              <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">Atendimento nacional</h3>
                <p className="text-sm text-muted-foreground">Presença em todo Brasil e exterior</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
