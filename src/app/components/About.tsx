
// Dental Clinic Website Template/src/app/components/About.tsx
import { AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  description?: string;
}

export function About({ description }: AboutProps) {
  const hasDescription = Boolean(description);
  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-8">
            About Our Clinic
          </h2>

          {hasDescription ? (
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {description}
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At BrightSmile Dental Clinic, we are committed to providing exceptional dental care in a comfortable and modern environment. Our team of experienced dentists and hygienists use the latest technology to ensure you receive the best possible treatment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 15 years of experience serving the San Francisco community, we pride ourselves on building lasting relationships with our patients. From routine cleanings to complex procedures, we're here to keep your smile bright and healthy.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
