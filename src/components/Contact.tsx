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
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Entre em contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender sua empresa. Fale com nossos especialistas e descubra como podemos ajudar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
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
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                CNPJ: 49.985.208/0001-04
              </h3>
              <p className="text-muted-foreground mb-6">
                Confiança que gera resultados
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-accent text-primary-foreground text-lg px-8"
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
