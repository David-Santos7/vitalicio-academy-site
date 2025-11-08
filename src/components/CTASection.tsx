import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Acesso vitalício a todos os materiais",
  "Atualizações gratuitas de conteúdo",
  "Certificado de conclusão",
  "Suporte direto com instrutores",
];

export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground animate-fade-in">
            Pronto Para Começar Sua Jornada?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-slide-up">
            Junte-se a centenas de alunos que já transformaram suas vidas através da educação
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-primary-foreground/90 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-left">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button variant="cta" size="xl" className="group bg-accent hover:bg-accent/90 min-w-[200px]">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-primary-foreground/70">
              ✨ Oferta especial válida por tempo limitado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
