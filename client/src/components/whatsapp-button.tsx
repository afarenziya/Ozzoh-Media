import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsappButton() {
  return (
    <motion.a 
      href="https://wa.me/919315869313" 
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-green-600 transition-colors z-50 shadow-green-500/30"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      aria-label="Contact us on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
