import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function WhatsAppFAB() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-200 flex items-center justify-center group md:hidden"
    >
      <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
    </motion.a>
  );
}
