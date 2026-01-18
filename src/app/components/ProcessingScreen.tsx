// // locallead/Dental Clinic Website Template/src/app/components/ProcessingScreen.tsx
// import { motion } from 'motion/react';
// import { Search, Database, Globe, Sparkles, Loader2 } from 'lucide-react';
// import { useEffect, useState } from 'react';
//
// interface ProcessingScreenProps {
//   onComplete: () => void;
// }
//
// export function ProcessingScreen({ onComplete }: ProcessingScreenProps) {
//   const [currentStep, setCurrentStep] = useState(0);
//
//   const steps = [
//     {
//       icon: Search,
//       title: 'Scanning Google Maps',
//       description: 'Searching for businesses in your area...',
//     },
//     {
//       icon: Database,
//       title: 'Collecting business details',
//       description: 'Gathering contact info, reviews, and more...',
//     },
//     {
//       icon: Globe,
//       title: 'Generating previews',
//       description: 'Creating professional website previews...',
//     },
//     {
//       icon: Sparkles,
//       title: 'Finalizing results',
//       description: 'Almost done, preparing your dashboard...',
//     },
//   ];
//
//   useEffect(() => {
//     // Simulate progress through steps
//     const stepDuration = 2000; // 2 seconds per step
//
//     const interval = setInterval(() => {
//       setCurrentStep((prev) => {
//         if (prev < steps.length - 1) {
//           return prev + 1;
//         } else {
//           clearInterval(interval);
//           // Complete after a short delay
//           setTimeout(() => {
//             onComplete();
//           }, 1500);
//           return prev;
//         }
//       });
//     }, stepDuration);
//
//     return () => clearInterval(interval);
//   }, [onComplete]);
//
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-2xl w-full"
//       >
//         {/* Main Card */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
//               className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6"
//             >
//               <Loader2 className="w-8 h-8 text-blue-600" />
//             </motion.div>
//
//             <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//               Generating leads…
//             </h1>
//
//             <p className="text-gray-600 max-w-md mx-auto">
//               Please don't close this window. Chrome may open and close automatically during this process.
//             </p>
//           </div>
//
//           {/* Progress Steps */}
//           <div className="space-y-4 mb-8">
//             {steps.map((step, index) => {
//               const isActive = index === currentStep;
//               const isComplete = index < currentStep;
//
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className={`flex items-start gap-4 p-4 rounded-xl transition-all ${
//                     isActive
//                       ? 'bg-blue-50 border-2 border-blue-200'
//                       : isComplete
//                       ? 'bg-green-50 border-2 border-green-200'
//                       : 'bg-gray-50 border-2 border-gray-100'
//                   }`}
//                 >
//                   <div
//                     className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
//                       isActive
//                         ? 'bg-blue-600'
//                         : isComplete
//                         ? 'bg-green-600'
//                         : 'bg-gray-300'
//                     }`}
//                   >
//                     {isActive ? (
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
//                       >
//                         <step.icon className="w-5 h-5 text-white" />
//                       </motion.div>
//                     ) : (
//                       <step.icon className="w-5 h-5 text-white" />
//                     )}
//                   </div>
//
//                   <div className="flex-1 pt-1">
//                     <h3
//                       className={`font-semibold mb-1 ${
//                         isActive || isComplete ? 'text-gray-900' : 'text-gray-500'
//                       }`}
//                     >
//                       {step.title}
//                     </h3>
//                     <p
//                       className={`text-sm ${
//                         isActive ? 'text-blue-700' : isComplete ? 'text-green-700' : 'text-gray-400'
//                       }`}
//                     >
//                       {isActive ? step.description : isComplete ? 'Complete ✓' : 'Waiting...'}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//
//           {/* Progress Bar */}
//           <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
//             <motion.div
//               initial={{ width: '0%' }}
//               animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
//               transition={{ duration: 0.5 }}
//               className="h-full bg-blue-600 rounded-full"
//             />
//           </div>
//
//           <p className="text-center text-sm text-gray-500 mt-4">
//             {Math.round(((currentStep + 1) / steps.length) * 100)}% complete
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// locallead/Dental Clinic Website Template/src/app/components/ProcessingScreen.tsx
import { motion } from 'motion/react';
import { Search, Database, Globe, Sparkles, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchStatus } from "@/app/lib/status";

interface ProcessingScreenProps {
  onComplete: () => void;
}

export function ProcessingScreen({ onComplete }: ProcessingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: 'Scanning Google Maps',
      description: 'Searching for businesses in your area...',
    },
    {
      icon: Database,
      title: 'Collecting business details',
      description: 'Gathering contact info, reviews, and more...',
    },
    {
      icon: Globe,
      title: 'Generating previews',
      description: 'Creating professional website previews...',
    },
    {
      icon: Sparkles,
      title: 'Finalizing results',
      description: 'Almost done, preparing your dashboard...',
    },
  ];

  useEffect(() => {
    let isMounted = true;

    const interval = setInterval(async () => {
      try {
        const status = await fetchStatus();

        if (!isMounted) return;

        switch (status.state) {
          case "SCRAPING":
            setCurrentStep(0);
            break;
          case "FILTERING":
            setCurrentStep(1);
            break;
          case "ENRICHING":
            setCurrentStep(2);
            break;
          case "GENERATING":
            setCurrentStep(3);
            break;
          case "DONE":
            onComplete();
            break;
        }
      } catch (err) {
        console.error("Status polling failed", err);
      }
    }, 1500); // poll every 1.5s

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [onComplete, steps.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6"
            >
              <Loader2 className="w-8 h-8 text-blue-600" />
            </motion.div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Generating leads…
            </h1>

            <p className="text-gray-600 max-w-md mx-auto">
              Please don't close this window. Chrome may open automatically.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-8">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const isComplete = index < currentStep;

              return (
                <div
                  key={index}
                  className={`flex gap-4 p-4 rounded-xl border-2 transition-all ${
                    isActive
                      ? 'bg-blue-50 border-blue-200'
                      : isComplete
                      ? 'bg-green-50 border-green-200'
                      : 'bg-gray-50 border-gray-100'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isActive
                        ? 'bg-blue-600'
                        : isComplete
                        ? 'bg-green-600'
                        : 'bg-gray-300'
                    }`}
                  >
                    <step.icon className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-sm">
                      {isActive
                        ? step.description
                        : isComplete
                        ? 'Complete ✓'
                        : 'Waiting...'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            {Math.round(((currentStep + 1) / steps.length) * 100)}% complete
          </p>
        </div>
      </motion.div>
    </div>
  );
}

