import { BookOpen, Award, Clock, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Conteúdo Premium",
    description: "Material didático de alta qualidade desenvolvido por especialistas",
  },
  {
    icon: Clock,
    title: "Aprenda no Seu Ritmo",
    description: "Acesso vitalício aos cursos, estude quando e onde quiser",
  },
  {
    icon: Award,
    title: "Certificado Reconhecido",
    description: "Certificados de conclusão para impulsionar sua carreira",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Equipe de suporte pronta para ajudar em sua jornada",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Por Que Escolher Nossos Cursos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma experiência de aprendizado completa e transformadora
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
