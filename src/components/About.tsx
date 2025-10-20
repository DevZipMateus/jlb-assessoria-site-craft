import { CheckCircle2, Target, Heart, Lightbulb, Award, Shield, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Ética e transparência",
      description: "Agir com honestidade e clareza em todas as relações",
    },
    {
      icon: CheckCircle2,
      title: "Responsabilidade",
      description: "Cumprir prazos e compromissos com rigor e profissionalismo",
    },
    {
      icon: Heart,
      title: "Sigilo e confiança",
      description: "Preservar a confidencialidade das informações dos clientes",
    },
    {
      icon: Award,
      title: "Excelência técnica",
      description: "Buscar atualização constante e aplicar boas práticas contábeis",
    },
    {
      icon: Users,
      title: "Compromisso com o cliente",
      description: "Oferecer soluções personalizadas e apoio consultivo",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Utilizar tecnologia e métodos modernos para otimizar processos",
    },
    {
      icon: TrendingUp,
      title: "Sustentabilidade",
      description: "Atuar de forma responsável, considerando impactos sociais e econômicos",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Missão */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4 sm:mb-6">
            <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">Nossa missão</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
            Garantir informações contábeis seguras, transparentes e de qualidade, que auxiliem na tomada de decisão e no crescimento sustentável dos clientes, assegurando o cumprimento das obrigações legais e contribuindo para a gestão eficiente dos negócios.
          </p>
        </div>

        {/* História */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-foreground">Nossa história</h2>
          <Card className="border-primary/20 shadow-gold">
            <CardContent className="p-6 sm:p-8">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                Há 10 anos, a JLB Consultoria Contábil nasceu de uma oportunidade e de um sonho. Tudo começou quando seu fundador recebeu um convite especial de seu ex-patrão para se tornar sócio em um novo empreendimento contábil. A parceria foi o ponto de partida para uma jornada marcada por dedicação, ética e o desejo de fazer contabilidade de um jeito diferente — mais próximo, estratégico e humano.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Com sede em Natal (RN) e atuação em todo o Brasil e no exterior, a JLB Consultoria Contábil cresceu apoiada em um propósito claro: oferecer soluções contábeis completas que gerem segurança, transparência e crescimento sustentável para empresas de todos os portes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ao longo de sua trajetória, a JLB se consolidou como uma parceira de confiança para seus clientes, aliando experiência técnica, inovação e atendimento personalizado. Hoje, celebra 10 anos de conquistas e continua olhando para o futuro com o mesmo entusiasmo do início — com foco em resultados, evolução contínua e compromisso com a excelência.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <div className="animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-foreground">Nossos valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold hover:-translate-y-1"
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-card-foreground">{value.title}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
