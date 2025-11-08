import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CourseSquad } from "@/components/CourseSquad";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  const featuredCourses = [
    {
      title: "Desenvolvimento Web Completo",
      description: "Aprenda a criar sites e aplicações web modernas do zero com as tecnologias mais atuais do mercado",
      price: "R$ 497,00",
      originalPrice: "R$ 997,00",
      duration: "40 horas",
      students: "1.2k",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      badge: "Mais Vendido",
    },
    {
      title: "Marketing Digital Avançado",
      description: "Domine estratégias de marketing digital e transforme sua presença online em resultados reais",
      price: "R$ 397,00",
      originalPrice: "R$ 797,00",
      duration: "30 horas",
      students: "980",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      badge: "Destaque",
    },
    {
      title: "Design Gráfico Profissional",
      description: "Desenvolva habilidades profissionais em design gráfico e crie projetos incríveis",
      price: "R$ 447,00",
      originalPrice: "R$ 897,00",
      duration: "35 horas",
      students: "756",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    },
  ];

  const businessCourses = [
    {
      title: "Gestão de Projetos",
      description: "Aprenda metodologias ágeis e técnicas modernas de gerenciamento de projetos",
      price: "R$ 347,00",
      originalPrice: "R$ 697,00",
      duration: "25 horas",
      students: "645",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      title: "Finanças Pessoais",
      description: "Controle suas finanças e construa patrimônio com estratégias comprovadas",
      price: "R$ 297,00",
      originalPrice: "R$ 597,00",
      duration: "20 horas",
      students: "892",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
      badge: "Popular",
    },
    {
      title: "Empreendedorismo Digital",
      description: "Construa e escale seu negócio online com estratégias práticas e eficazes",
      price: "R$ 547,00",
      originalPrice: "R$ 1.097,00",
      duration: "45 horas",
      students: "534",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      badge: "Novo",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <CourseSquad
        title="Cursos em Destaque"
        subtitle="Desenvolva habilidades essenciais com nossos cursos mais populares"
        courses={featuredCourses}
      />
      <CourseSquad
        title="Cursos de Negócios"
        subtitle="Impulsione sua carreira e aprenda a gerenciar melhor seus recursos"
        courses={businessCourses}
      />
      <CTASection />
    </div>
  );
};

export default Index;
