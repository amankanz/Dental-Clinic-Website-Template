import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Skeleton } from './ui/skeleton';

interface LocationProps {
  mapImage: string;
}

export function Location({ mapImage }: LocationProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Conveniently located in the heart of San Francisco
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Map Preview */}
              <div className="relative h-80 md:h-96 bg-gray-100">
                {!imageLoaded && (
                  <Skeleton className="w-full h-full rounded-none" />
                )}
                <img
                  src={mapImage}
                  alt="Clinic Location"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Location Details */}
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      BrightSmile Dental Clinic
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 Market Street<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}