import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 hidden md:flex items-center justify-center group"
    >
      <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
    </motion.button>
  );
}
