import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company?: string;
  rating: number;
  image: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  name,
  position,
  company,
  rating,
  image,
  className
}: TestimonialCardProps) {
  return (
    <Card className={cn("rounded-xl p-6 h-full", className)}>
      <div className="text-blue-500 mb-4 flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star 
            key={index}
            className={cn(
              "h-4 w-4 mr-1",
              index < rating ? "fill-blue-500" : "",
              index === Math.floor(rating) && rating % 1 !== 0 ? "fill-blue-500/50" : ""
            )}
          />
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">
            {position}{company ? `, ${company}` : ''}
          </p>
        </div>
      </div>
    </Card>
  );
}
