// locallead/Dental Clinic Website Template/src/app/components/Service.tsx
import { Sparkles, Smile, Stethoscope, Scissors, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesProps {
  hasServices?: boolean;
}

export function Services({ hasServices = true }: ServicesProps) {
  const services: Service[] = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Teeth Cleaning',
      description: 'Professional cleaning and polishing for a brighter smile',
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our cosmetic treatments',
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Root Canal',
      description: 'Expert endodontic treatment with minimal discomfort',
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Braces & Orthodontics',
      description: 'Straighten your teeth with modern orthodontic solutions',
    },
  ];

  const placeholderServices: Service[] = [
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Service Not Listed',
      description: 'Contact us to learn about available treatments',
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Service Not Listed',
      description: 'Contact us to learn about available treatments',
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Service Not Listed',
      description: 'Contact us to learn about available treatments',
    },
  ];

  const displayServices = hasServices ? services : placeholderServices;

  return (
    <section id="services" className="scroll-mt-20 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 ${
                  !hasServices ? 'border-dashed border-gray-300' : ''
                }`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                  hasServices ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  hasServices ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Dental Clinic Website Template/src/app/components/Service.tsx
/*
import { Sparkles, Smile, Stethoscope, Scissors, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface ServiceItem {
  title: string;
  description: string;
  type?: 'cleaning' | 'cosmetic' | 'root_canal' | 'orthodontics';
}

interface ServicesProps {
  services?: ServiceItem[];
}

const serviceIconMap: Record<string, ReactNode> = {
  cleaning: <Sparkles className="w-8 h-8" />,
  cosmetic: <Smile className="w-8 h-8" />,
  root_canal: <Stethoscope className="w-8 h-8" />,
  orthodontics: <Scissors className="w-8 h-8" />,
  default: <AlertCircle className="w-8 h-8" />,
};

const placeholderServices: ServiceItem[] = [
  {
    title: 'Service Not Listed',
    description: 'Contact us to learn about available treatments',
  },
  {
    title: 'Service Not Listed',
    description: 'Contact us to learn about available treatments',
  },
  {
    title: 'Service Not Listed',
    description: 'Contact us to learn about available treatments',
  },
];

export function Services({ services }: ServicesProps) {
  const hasServices = Boolean(services && services.length > 0);
  const displayServices = hasServices ? services! : placeholderServices;

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 ${
                  !hasServices ? 'border-dashed border-gray-300' : ''
                }`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                  hasServices ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'
                }`}>
                  {serviceIconMap[service.type ?? 'default']}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  hasServices ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
*/