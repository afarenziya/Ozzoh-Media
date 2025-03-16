import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  emailUrl?: string;
  className?: string;
}

export default function TeamCard({ 
  name, 
  role, 
  description, 
  image,
  linkedinUrl,
  twitterUrl,
  emailUrl,
  className
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={cn(
        "rounded-xl p-6 text-center h-full transition-all duration-300",
        className
      )}>
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-2 border-blue-500/30">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-xl font-bold font-syne mb-1">{name}</h4>
        <p className="text-blue-500 mb-4">{role}</p>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className="flex justify-center space-x-4">
          {linkedinUrl && (
            <a 
              href={linkedinUrl} 
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label={`${name}'s LinkedIn`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {twitterUrl && (
            <a 
              href={twitterUrl}
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label={`${name}'s Twitter`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {emailUrl && (
            <a 
              href={`mailto:${emailUrl}`}
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
