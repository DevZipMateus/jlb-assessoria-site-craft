import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(84) 99903-5663",
      link: "https://wa.me/5584999035663",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "phd.solucoescontbeiss@gmail.com",
      link: "mailto:phd.solucoescontbeiss@gmail.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Avenida Dão Silveira, 3860 - Sala 02",
      link: null,
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a quinta: 08:00 às 18:00 | Sexta: 08:00 às 17:00",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Entre em contato</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos prontos para atender sua empresa. Fale com nossos especialistas e descubra como podemos ajudar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 animate-fade-in">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-card-foreground">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-words"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto border-primary/20 shadow-gold">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-card-foreground">
                CNPJ: 49.985.208/0001-04
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
                Confiança que gera resultados
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-accent text-primary-foreground text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/5584999035663", "_blank")}
              >
                Fale com um especialista agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
