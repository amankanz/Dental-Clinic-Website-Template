// Dental Clinic Website Template/src/app/components/Hero.tsx
import { MapPin, MessageCircle, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Skeleton } from './ui/skeleton';

interface HeroProps {
  backgroundImage: string;

  name?: string;
  category?: string;
  city?: string;
  address?: string;
  whatsapp?: string;
  mapsUrl?: string;
}


export function Hero({
  backgroundImage,
  name = "BrightSmile Dental Clinic",
  category = "Dental Clinic",
  city = "San Francisco",
  address = "123 Market Street, San Francisco, CA 94102",
  whatsapp = "1234567890",
  mapsUrl = "https://maps.google.com",
}: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative scroll-mt-20 h-[600px] md:h-[700px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {!imageLoaded && (
          <Skeleton className="w-full h-full" />
        )}
        <img
          src={backgroundImage}
          alt="Dental Clinic"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/75 to-blue-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-3">
            {category} • {city}
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-100 mb-8">
            <MapPin className="w-5 h-5" />
            <p className="text-base md:text-lg">
              {address}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
