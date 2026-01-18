// // locallead/Dental Clinic Website Template/src/app/component/Dashboard.tsx
// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "motion/react";
// import { Rocket } from "lucide-react";
// import { BusinessCard } from "./BusinessCard";
//
// /* -------------------------
//    Types
// ------------------------- */
// interface BusinessIndexItem {
//   slug: string;
//   name: string;
//   category: string;
//   city: string;
//   rating?: number;
//   review_count?: number;
//   preview?: string;
// }
//
// interface DashboardProps {
//   onNewSearch: () => void;
// }
//
// /* -------------------------
//    Dashboard Component
// ------------------------- */
// export function Dashboard({onNewSearch}:DashboardProps) {
//     const [pipelineState, setPipelineState] = useState<"IDLE" | "RUNNING" | "DONE">("IDLE");
//     const [businesses, setBusinesses] = useState<BusinessIndexItem[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [lastRunAt, setLastRunAt] = useState<string | null>(null);
//
//
//   /* -------------------------
//      Load dashboard index
//   ------------------------- */
//   useEffect(() => {
//       const saved = localStorage.getItem("lastRunAt");
//       if (saved) {
//         setLastRunAt(saved);
//       }
//   }, []);
//
//   useEffect(() => {
//     fetch("/data/businesses/index.json")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to load index.json");
//         return res.json();
//       })
//       .then((data) => {
//         setBusinesses(data.businesses || []);
//       })
//       .catch((err) => {
//         console.error("Dashboard load error:", err);
//         setBusinesses([]);
//       })
//       .finally(() => setLoading(false));
//
//     fetch("/status")
//     .then(res => res.json())
//     .then(status => {
//       setPipelineState(status.state);
//     })
//     .catch(() => {
//       setPipelineState("IDLE");
//     });
//   }, []);
//
//   /* -------------------------
//      Actions
//   ------------------------- */
//   const handlePreview = (slug: string) => {
//     window.open(`/preview/${slug}`, "_blank");
//   };
//
//
//   const handleDeploy = (slug: string) => {
//     const repoUrl = "https://github.com/amankanz/locallead"; // change if needed
//     const projectName = `locallead-${slug}`;
//
//     const vercelUrl =
//       `https://vercel.com/new` +
//       `?repository-url=${encodeURIComponent(repoUrl)}` +
//       `&project-name=${projectName}`;
//
//     window.open(vercelUrl, "_blank");
//   };
//
//   /* -------------------------
//      Render
//   ------------------------- */
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation Bar */}
//       <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//               <div className="flex flex-col">
//                 <h1 className="text-xl font-semibold text-gray-900">
//                   LocalLead Preview
//                 </h1>
//                 <p className="text-xs text-gray-500">
//                   Preview & deploy local business websites
//                 </p>
//                 {lastRunAt && (
//                   <p className="text-xs text-gray-400 mt-1">
//                     Last run: {new Date(lastRunAt).toLocaleString()}
//                   </p>
//                 )}
//
//                 <p className={`text-xs ${navigator.onLine ? "text-green-600" : "text-gray-400"} mt-1`}>
//                   {navigator.onLine ? "Online" : "Offline"}
//                 </p>
//               </div>
//
//               <button
//                   onClick={onNewSearch}
//                   disabled={pipelineState === "RUNNING"}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition
//                     ${
//                       pipelineState === "RUNNING"
//                         ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                         : "bg-blue-600 text-white hover:bg-blue-700"
//                     }`}
//                 >
//                   {pipelineState === "RUNNING" ? "Pipeline Running…" : "New Search"}
//               </button>
//           </div>
//         </div>
//       </nav>
//
//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//         {/* Page Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-8 sm:mb-12"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
//             Business Previews
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Select a business to preview and deploy its website
//           </p>
//         </motion.div>
//
//         {/* Loading State */}
//         {loading && (
//           <div className="text-center py-16 text-gray-500">
//             Loading businesses…
//           </div>
//         )}
//
//         {/* Business Cards Grid */}
//         {!loading && businesses.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {businesses.map((business, index) => (
//               <BusinessCard
//                 key={business.slug}
//                 business={business}
//                 index={index}
//                 onPreview={() => handlePreview(business.slug)}
//                 onDeploy={() => handleDeploy(business.slug)}
//               />
//             ))}
//           </div>
//         )}
//
//         {/* Empty State */}
//         {!loading && businesses.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-16"
//           >
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
//               <Rocket className="w-8 h-8 text-gray-400" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               No businesses yet
//             </h3>
//             <p className="text-gray-600">
//               Business listings will appear here once they're generated.
//             </p>
//           </motion.div>
//         )}
//       </main>
//     </div>
//   );
// }
//


// locallead/Dental Clinic Website Template/src/app/component/Dashboard.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { BusinessCard } from "./BusinessCard";
import { Star, ExternalLink, Rocket, MapPin, Plus, Wifi, WifiOff, Clock } from 'lucide-react';

/* -------------------------
   Types
------------------------- */
interface BusinessIndexItem {
  slug: string;
  name: string;
  category: string;
  city: string;
  rating?: number;
  review_count?: number;
  preview?: string;
}

interface DashboardProps {
  onNewSearch: () => void;
}

/* -------------------------
   Dashboard Component
------------------------- */
export function Dashboard({onNewSearch}:DashboardProps) {
    const [pipelineState, setPipelineState] = useState<"IDLE" | "RUNNING" | "DONE">("IDLE");
    const [businesses, setBusinesses] = useState<BusinessIndexItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [lastRunAt, setLastRunAt] = useState<string | null>(null);
    const [isOnline, setIsOnline] = useState(true);


  /* -------------------------
     Load dashboard index
  ------------------------- */
  useEffect(() => {
      const saved = localStorage.getItem("lastRunAt");
      if (saved) {
        setLastRunAt(saved);
      }

    // Check online status
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);


    fetch("/data/businesses/index.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load index.json");
        return res.json();
      })
      .then((data) => {
        setBusinesses(data.businesses || []);
      })
      .catch((err) => {
        console.error("Dashboard load error:", err);
        setBusinesses([]);
      })
      .finally(() => setLoading(false));

    fetch("/status")
    .then(res => res.json())
    .then(status => {
      setPipelineState(status.state);
    })
    .catch(() => {
      setPipelineState("IDLE");
    });

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);


  /* -------------------------
     Actions
  ------------------------- */
  const handlePreview = (slug: string) => {
    window.open(`/preview/${slug}`, "_blank");
  };


  const handleDeploy = (slug: string) => {
    const repoUrl = "https://github.com/amankanz/locallead"; // change if needed
    const projectName = `locallead-${slug}`;

    const vercelUrl =
      `https://vercel.com/new` +
      `?repository-url=${encodeURIComponent(repoUrl)}` +
      `&project-name=${projectName}`;

    window.open(vercelUrl, "_blank");
  };

  /* -------------------------
     Render
  ------------------------- */
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Left Section - Brand & Title */}
            <div className="flex flex-col min-w-0">
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                LocalLead Preview
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block truncate">
                Preview & deploy local business websites
              </p>
            </div>

            {/* Center Section - Status Badges (hidden on small screens) */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              {/* Online Status */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-full">
                {isOnline ? (
                  <>
                    <Wifi className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-xs font-medium text-green-700">Online</span>
                  </>
                ) : (
                  <>
                    <WifiOff className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs font-medium text-gray-500">Offline</span>
                  </>
                )}
              </div>

              {/* Last Run Time */}
              {lastRunAt && (
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs text-gray-600">
                    {new Date(lastRunAt).toLocaleDateString()} {new Date(lastRunAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              )}

              {/* Pipeline Status */}
              {pipelineState === "RUNNING" && (
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 rounded-full">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-blue-700">Processing</span>
                </div>
              )}
            </div>

            {/* Right Section - Action Button */}
            {onNewSearch && (
              <button
                onClick={onNewSearch}
                disabled={pipelineState === "RUNNING"}
                className={`inline-flex items-center px-3 sm:px-4 py-2 font-medium rounded-lg transition-all duration-200 flex-shrink-0 text-sm ${
                  pipelineState === "RUNNING"
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
                }`}
              >
                <Plus className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">
                  {pipelineState === "RUNNING" ? "Processing..." : "New Search"}
                </span>
              </button>
            )}
          </div>

          {/* Mobile Status Bar - Shows on small screens below main nav */}
          <div className="flex lg:hidden items-center gap-2 pb-3 overflow-x-auto">
            {/* Online Status */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-full flex-shrink-0">
              {isOnline ? (
                <>
                  <Wifi className="w-3 h-3 text-green-600" />
                  <span className="text-xs font-medium text-green-700">Online</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3 h-3 text-gray-400" />
                  <span className="text-xs font-medium text-gray-500">Offline</span>
                </>
              )}
            </div>

            {/* Last Run Time */}
            {lastRunAt && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-full flex-shrink-0">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-600">
                  {new Date(lastRunAt).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                </span>
              </div>
            )}

            {/* Pipeline Status */}
            {pipelineState === "RUNNING" && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 rounded-full flex-shrink-0">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-blue-700">Processing</span>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Business Previews
          </h2>
          <p className="text-gray-600 text-lg">
            Select a business to preview and deploy its website
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16 text-gray-500">
            Loading businesses…
          </div>
        )}

        {/* Business Cards Grid */}
        {!loading && businesses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business, index) => (
              <BusinessCard
                key={business.slug}
                business={business}
                index={index}
                onPreview={() => handlePreview(business.slug)}
                onDeploy={() => handleDeploy(business.slug)}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && businesses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Rocket className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No businesses yet
            </h3>
            <p className="text-gray-600">
              Business listings will appear here once they're generated.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}


