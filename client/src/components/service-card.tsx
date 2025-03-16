import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  learnMoreLink?: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  learnMoreLink = "#",
  className
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={cn(
        "service-card h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border-white/5 backdrop-blur-md",
        className
      )}>
        <CardHeader>
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
            {icon}
          </div>
          <CardTitle className="font-syne">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">{description}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <a 
            href={learnMoreLink} 
            className="text-blue-500 font-medium inline-flex items-center hover:underline"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
