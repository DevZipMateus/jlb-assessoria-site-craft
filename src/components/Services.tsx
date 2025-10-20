import { Calendar, FileText, Calculator, BarChart3, ClipboardCheck, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Assessoria contábil",
      description: "Gestão completa da contabilidade da sua empresa com transparência e qualidade",
    },
    {
      icon: Calculator,
      title: "Consultoria fiscal",
      description: "Planejamento e otimização tributária para reduzir custos legalmente",
    },
    {
      icon: ClipboardCheck,
      title: "Departamento pessoal",
      description: "Gestão completa de folha de pagamento e obrigações trabalhistas",
    },
    {
      icon: BarChart3,
      title: "Planejamento estratégico",
      description: "Análises e relatórios para decisões mais assertivas e crescimento sustentável",
    },
    {
      icon: Shield,
      title: "Compliance e regularização",
      description: "Garantia de conformidade com todas as normas e legislações vigentes",
    },
    {
      icon: Calendar,
      title: "Gestão de obrigações",
      description: "Cumprimento de prazos e entrega de todas as obrigações acessórias",
    },
  ];

  const plans = [
    {
      title: "Plano anual",
      description: "Solução completa com duração de 12 meses",
      features: ["Suporte contínuo", "Relatórios mensais", "Consultoria estratégica"],
    },
    {
      title: "Plano bienal",
      description: "Dois anos de parceria com condições diferenciadas",
      features: ["Condições especiais", "Estabilidade contratual", "Acompanhamento estratégico"],
      highlight: true,
    },
    {
      title: "Plano trienal",
      description: "Três anos com máxima otimização de custos",
      features: ["Melhores condições", "Parceria de longo prazo", "Prioridade no atendimento"],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Services */}
        <div className="mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Nossos serviços</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Soluções completas em contabilidade, gestão fiscal e trabalhista para empresas de todos os segmentos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold hover:-translate-y-1"
                >
                  <CardHeader className="pb-3 sm:pb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-card-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Plans */}
        <div className="animate-fade-in">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Planos personalizados</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Escolha o plano ideal para sua empresa com condições diferenciadas e suporte contínuo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-border transition-all duration-300 hover:shadow-gold hover:-translate-y-1 ${
                  plan.highlight
                    ? "border-primary/50 shadow-gold ring-2 ring-primary/20"
                    : ""
                }`}
              >
                <CardHeader className="pb-3 sm:pb-6">
                  {plan.highlight && (
                    <div className="inline-block self-start mb-2 px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-primary text-xs font-semibold">Mais popular</span>
                    </div>
                  )}
                  <CardTitle className="text-xl sm:text-2xl text-card-foreground">{plan.title}</CardTitle>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlight ? "default" : "outline"}
                    className={
                      plan.highlight
                        ? "w-full bg-primary hover:bg-accent text-primary-foreground text-sm sm:text-base"
                        : "w-full border-primary/60 text-foreground hover:bg-secondary text-sm sm:text-base"
                    }
                    onClick={() => window.open("https://wa.me/5584999035663", "_blank")}
                  >
                    Solicitar proposta
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
