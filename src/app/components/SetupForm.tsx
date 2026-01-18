// // locallead/Dental Clinic Website Template/src/app/components/SetupForm.tsx
// import { motion } from 'motion/react';
// import { ArrowLeft, AlertCircle, Rocket } from 'lucide-react';
// import { useState } from 'react';
//
// interface SetupFormProps {
//   onBack: () => void;
//   onSubmit: (data: FormData) => void;
// }
//
// export interface FormData {
//   businessType: string;
//   location: string;
//   maxResults: number;
// }
//
// export function SetupForm({ onBack, onSubmit }: SetupFormProps) {
//   const [formData, setFormData] = useState<FormData>({
//     businessType: '',
//     location: '',
//     maxResults: 10,
//   });
//
//   const [errors, setErrors] = useState({
//     businessType: '',
//     location: '',
//   });
//
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//
//     // Validation
//     const newErrors = {
//       businessType: '',
//       location: '',
//     };
//
//     if (!formData.businessType.trim()) {
//       newErrors.businessType = 'Please enter a business type';
//     }
//
//     if (!formData.location.trim()) {
//       newErrors.location = 'Please enter a location';
//     }
//
//     setErrors(newErrors);
//
//     // If no errors, submit
//     if (!newErrors.businessType && !newErrors.location) {
//       onSubmit(formData);
//     }
//   };
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
//           <div className="mb-8">
//             <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
//               Set up your lead search
//             </h1>
//             <p className="text-gray-600">
//               Tell us what kind of businesses you're looking for
//             </p>
//           </div>
//
//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Business Type */}
//             <div>
//               <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Business Type / Niche *
//               </label>
//               <input
//                 type="text"
//                 id="businessType"
//                 value={formData.businessType}
//                 onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
//                 placeholder="e.g. dental clinics, salons, restaurants"
//                 className={`w-full px-4 py-3 rounded-xl border-2 ${
//                   errors.businessType ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
//                 } focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all`}
//               />
//               {errors.businessType && (
//                 <p className="mt-2 text-sm text-red-600">{errors.businessType}</p>
//               )}
//             </div>
//
//             {/* Location */}
//             <div>
//               <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Location *
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 value={formData.location}
//                 onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                 placeholder="e.g. Kampala, Uganda"
//                 className={`w-full px-4 py-3 rounded-xl border-2 ${
//                   errors.location ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
//                 } focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all`}
//               />
//               {errors.location && (
//                 <p className="mt-2 text-sm text-red-600">{errors.location}</p>
//               )}
//             </div>
//
//             {/* Max Results */}
//             <div>
//               <label htmlFor="maxResults" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Max Results
//               </label>
//               <input
//                 type="number"
//                 id="maxResults"
//                 min="1"
//                 max="50"
//                 value={formData.maxResults}
//                 onChange={(e) => setFormData({ ...formData, maxResults: parseInt(e.target.value) || 10 })}
//                 className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
//               />
//               <p className="mt-2 text-sm text-gray-500">
//                 How many businesses should we collect?
//               </p>
//             </div>
//
//             {/* Info Box */}
//             <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 flex gap-3">
//               <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
//               <div>
//                 <p className="text-sm text-amber-900 font-medium mb-1">
//                   Browser window will open
//                 </p>
//                 <p className="text-sm text-amber-800">
//                   When you click Run, a Chrome browser may open automatically.
//                   This is expected - LocalLead uses it to collect public business data.
//                 </p>
//               </div>
//             </div>
//
//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button
//                 type="button"
//                 onClick={onBack}
//                 className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
//               >
//                 <ArrowLeft className="w-5 h-5 mr-2" />
//                 Back
//               </button>
//
//               <button
//                 type="submit"
//                 className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
//               >
//                 <Rocket className="w-5 h-5 mr-2" />
//                 Run Lead Generator
//               </button>
//             </div>
//           </form>
//         </div>
//       </motion.div>
//     </div>
//   );
// }


// locallead/Dental Clinic Website Template/src/app/components/SetupForm.tsx
import { motion } from 'motion/react';
import { ArrowLeft, AlertCircle, Rocket } from 'lucide-react';
import { useState } from 'react';
import { runPipeline } from "@/app/lib/api";

interface SetupFormProps {
  onBack: () => void;
  onSubmit: (data: FormData) => void;
}

export interface FormData {
  businessType: string;
  location: string;
  maxResults: number;
}

export function SetupForm({ onBack, onSubmit }: SetupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");


  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    location: '',
    maxResults: 10,
  });

  const [errors, setErrors] = useState({
    businessType: '',
    location: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitError("");

      console.log(formData)

      const newErrors = {
        businessType: '',
        location: '',
      };

      if (!formData.businessType.trim()) {
        newErrors.businessType = 'Please enter a business type';
      }

      if (!formData.location.trim()) {
        newErrors.location = 'Please enter a location';
      }

      setErrors(newErrors);

      if (newErrors.businessType || newErrors.location) return;

      try {
        setIsSubmitting(true);

        await runPipeline(formData);

        // Backend accepted → move to processing screen
        onSubmit(formData);

      } catch (err) {
        setSubmitError("Failed to start lead generation. Make sure backend is running.");
      } finally {
        setIsSubmitting(false);
      }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Set up your lead search
            </h1>
            <p className="text-gray-600">
              Tell us what kind of businesses you're looking for
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Type */}
            <div>
              <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                Business Type / Niche *
              </label>
              <input
                type="text"
                id="businessType"
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                placeholder="e.g. dental clinics, salons, restaurants"
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  errors.businessType ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                } focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all`}
              />
              {errors.businessType && (
                <p className="mt-2 text-sm text-red-600">{errors.businessType}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Kampala, Uganda"
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  errors.location ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                } focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all`}
              />
              {errors.location && (
                <p className="mt-2 text-sm text-red-600">{errors.location}</p>
              )}
            </div>

            {/* Max Results */}
            <div>
              <label htmlFor="maxResults" className="block text-sm font-semibold text-gray-700 mb-2">
                Max Results
              </label>
              <input
                type="number"
                id="maxResults"
                min="1"
                max="50"
                value={formData.maxResults}
                onChange={(e) => setFormData({ ...formData, maxResults: parseInt(e.target.value) || 10 })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <p className="mt-2 text-sm text-gray-500">
                How many businesses should we collect?
              </p>
            </div>

            {/* Info Box */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-amber-900 font-medium mb-1">
                  Browser window will open
                </p>
                <p className="text-sm text-amber-800">
                  When you click Run, a Chrome browser may open automatically.
                  This is expected - LocalLead uses it to collect public business data.
                </p>
              </div>
            </div>

            {submitError && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-sm text-red-700">
                {submitError}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>

              <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 inline-flex items-center justify-center px-6 py-3
                    ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
                    text-white font-semibold rounded-xl shadow-lg transition-all`}
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Starting..." : "Run Lead Generator"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

