import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PortfolioCardProps {
  title: string;
  categories: string[];
  image: string;
  caseStudyUrl?: string;
  className?: string;
}

export default function PortfolioCard({
  title,
  categories,
  image,
  caseStudyUrl = "#",
  className
}: PortfolioCardProps) {
  return (
    <motion.div 
      className={cn(
        "group relative rounded-xl overflow-hidden h-64",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1621]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold font-syne">{title}</h3>
        <p className="text-gray-300 mb-4">{categories.join(', ')}</p>
        <a 
          href={caseStudyUrl} 
          className="text-blue-500 inline-flex items-center font-medium"
        >
          View Case Study <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
