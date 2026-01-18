import { motion } from 'motion/react';
import { Search, Globe, Eye, Users, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  const steps = [
    {
      icon: Search,
      title: 'Choose niche & location',
      description: 'Select the type of business and where to search',
    },
    {
      icon: Globe,
      title: 'Scan Google Maps',
      description: 'LocalLead finds businesses automatically',
    },
    {
      icon: Eye,
      title: 'Browser opens (normal)',
      description: 'A Chrome window helps us collect data',
    },
    {
      icon: Users,
      title: 'Previews generated',
      description: 'Each business gets a professional website preview',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full"
      >
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6"
            >
              <Search className="w-8 h-8 text-blue-600" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            >
              Welcome to LocalLead
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Find local businesses, generate instant website previews, and turn leads into clients.
            </motion.p>
          </div>

          {/* Steps */}
          <div className="space-y-6 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">{index + 1}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
                <step.icon className="w-5 h-5 text-gray-400 mt-3 flex-shrink-0" />
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <button
              onClick={onGetStarted}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>

            <p className="mt-4 text-sm text-gray-500">
              No coding required • Takes a few minutes
            </p>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          Trusted by freelancers, agencies, and growth marketers
        </motion.p>
      </motion.div>
    </div>
  );
}
