import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustSignals() {
  return (
    <section className="bg-white py-6 md:py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
        >
          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
            </div>
            <span className="text-lg font-semibold text-gray-900">4.6</span>
          </div>

          {/* Review Count */}
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-base">Based on</span>
            <span className="font-semibold text-gray-900">127 reviews</span>
          </div>

          {/* Verified Badge */}
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Verified Google Business</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
