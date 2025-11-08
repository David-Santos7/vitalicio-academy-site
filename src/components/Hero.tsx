import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-primary-foreground">
              Oferta por Tempo Limitado
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Transforme Seu Futuro com{" "}
            <span className="text-accent">Conhecimento de Elite</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Acesse cursos exclusivos ministrados por especialistas. Aprenda no seu ritmo
            e alcance resultados extraordinários.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="cta" size="xl" className="group">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="xl" className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-card/20">
              Ver Cursos
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-8 text-primary-foreground/80">
            <div>
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm">Alunos Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm">Cursos Disponíveis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">4.9</div>
              <div className="text-sm">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
