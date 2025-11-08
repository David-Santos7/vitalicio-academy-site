import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  duration: string;
  students: string;
  rating: string;
  image: string;
  badge?: string;
  delay?: number;
}

export const CourseCard = ({
  title,
  description,
  price,
  originalPrice,
  duration,
  students,
  rating,
  image,
  badge,
  delay = 0,
}: CourseCardProps) => {
  return (
    <Card 
      className="group overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {badge && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-medium">
            {badge}
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold text-foreground">{rating}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{students}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground line-clamp-2 mb-4">{description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <div>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through mr-2">
              {originalPrice}
            </span>
          )}
          <span className="text-2xl font-bold text-primary">{price}</span>
        </div>
        <Button variant="cta" size="sm">
          Inscrever-se
        </Button>
      </CardFooter>
    </Card>
  );
};
