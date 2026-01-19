// // locallead/Dental Clinic Website Template/src/app/components/SuccessScreen.tsx
// import { motion } from 'motion/react';
// import { CheckCircle, Eye, RefreshCw } from 'lucide-react';
//
// interface SuccessScreenProps {
//   stats: {
//     scraped: number;
//     qualified: number;
//     enriched: number;
//     previews: number;
//   };
//   onViewBusinesses: () => void;
//   onRunAnother: () => void;
// }
//
// export function SuccessScreen({ stats, onViewBusinesses, onRunAnother }: SuccessScreenProps) {
//     const successRate =
//   stats.scraped > 0
//     ? Math.round((stats.previews / stats.scraped) * 100)
//     : 0;
//
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-2xl w-full"
//       >
//         {/* Main Card */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
//           {/* Success Icon */}
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
//             className="text-center mb-8"
//           >
//             <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
//               <CheckCircle className="w-12 h-12 text-green-600" />
//             </div>
//           </motion.div>
//
//           {/* Header */}
//           <div className="text-center mb-12">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
//             >
//               Your leads are ready 🎉
//             </motion.h1>
//
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-xl text-gray-600 max-w-md mx-auto"
//             >
//               We've successfully generated business previews for you.
//             </motion.p>
//           </div>
//
//           {/* Stats (Optional) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="grid grid-cols-3 gap-4 mb-12"
//           >
//             <div className="bg-blue-50 rounded-xl p-4 text-center">
//               <div className="text-2xl font-bold text-blue-600 mb-1">{stats.scraped}</div>
//               <div className="text-xs text-gray-600">Businesses Found</div>
//             </div>
//             <div className="bg-purple-50 rounded-xl p-4 text-center">
//               <div className="text-2xl font-bold text-purple-600 mb-1">{stats.previews}</div>
//               <div className="text-xs text-gray-600">Previews Created</div>
//             </div>
//             <div className="bg-green-50 rounded-xl p-4 text-center">
//               <div className="text-2xl font-bold text-green-600 mb-1">{successRate}%</div>
//               <div className="text-xs text-gray-600">Success Rate</div>
//             </div>
//           </motion.div>
//
//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="space-y-4"
//           >
//             <button
//               onClick={onViewBusinesses}
//               className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
//             >
//               <Eye className="w-5 h-5 mr-2" />
//               View Businesses
//             </button>
//
//             <button
//               onClick={onRunAnother}
//               className="w-full inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
//             >
//               <RefreshCw className="w-5 h-5 mr-2" />
//               Run another search
//             </button>
//           </motion.div>
//         </div>
//
//         {/* Footer Note */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           className="text-center mt-6"
//         >
//           <p className="text-sm text-gray-500">
//             You can now preview and deploy these websites
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
//



// locallead/Dental Clinic Website Template/src/app/components/SuccessScreen.tsx
import { motion } from 'motion/react';
import { CheckCircle, Eye, RefreshCw } from 'lucide-react';

interface SuccessScreenProps {
  stats: {
    scraped: number;
    qualified: number;
    enriched: number;
    previews: number;
  };
  onViewBusinesses: () => void;
  onRunAnother: () => void;
}

export function SuccessScreen({ stats, onViewBusinesses, onRunAnother }: SuccessScreenProps) {
    const successRate =
  stats.scraped > 0
    ? Math.round((stats.enriched / stats.scraped) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </motion.div>

          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Your leads are ready 🎉
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-md mx-auto"
            >
              We've successfully generated business previews for you.
            </motion.p>
          </div>

          {/* Stats (Optional) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{stats.scraped}</div>
              <div className="text-xs text-gray-600">Businesses Found</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">{stats.enriched}</div>
              <div className="text-xs text-gray-600">Previews Created</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{successRate}%</div>
              <div className="text-xs text-gray-600">Success Rate</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <button
              onClick={onViewBusinesses}
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Businesses
            </button>

            <button
              onClick={onRunAnother}
              className="w-full inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Run another search
            </button>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-6"
        >
          <p className="text-sm text-gray-500">
            You can now preview and deploy these websites
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}


