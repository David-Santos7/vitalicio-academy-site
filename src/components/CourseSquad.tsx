import { CourseCard } from "./CourseCard";

interface CourseSquadProps {
  title: string;
  subtitle: string;
  courses: Array<{
    title: string;
    description: string;
    price: string;
    originalPrice?: string;
    duration: string;
    students: string;
    rating: string;
    image: string;
    badge?: string;
  }>;
}

export const CourseSquad = ({ title, subtitle, courses }: CourseSquadProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
