// // locallead/Dental Clinic Website Template/src/app/component/Onboarding.tsx
// import { WelcomeScreen } from './WelcomeScreen';
// import { SetupForm, FormData } from './SetupForm';
// import { ProcessingScreen } from './ProcessingScreen';
// import { SuccessScreen } from './SuccessScreen';
// import { Dashboard } from './Dashboard';
// import { useState, useEffect } from 'react';
//
// type OnboardingStep = 'welcome' | 'setup' | 'processing' | 'success' | 'dashboard';
//
// export function Onboarding() {
//   const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
//   const [searchData, setSearchData] = useState<FormData | null>(null);
//   const [stats, setStats] = useState(null);
//
//   // 🔁 Restore state on refresh
//   useEffect(() => {
//     fetch("/status")
//       .then(res => res.json())
//       .then(status => {
//         if (status.state === "RUNNING") {
//           setCurrentStep("processing");
//         }
//
//         if (status.state === "DONE") {
//           setCurrentStep("dashboard");
//         }
//       })
//       .catch(() => {
//         // backend not running — stay on welcome
//       });
//   }, []);
//
//   const handleGetStarted = () => {
//     setCurrentStep('setup');
//   };
//
//   const handleBackToWelcome = () => {
//     setCurrentStep('welcome');
//   };
//
//   const handleFormSubmit = (data: FormData) => {
//     setSearchData(data);
//     setCurrentStep('processing');
//   };
//
//   const handleProcessingComplete = (stats) => {
//       localStorage.setItem("lastRunAt", new Date().toISOString());
//       setStats(stats);
//       setCurrentStep('success');
//   };
//
//   const handleViewBusinesses = () => {
//     setCurrentStep('dashboard');
//   };
//
//   const handleRunAnother = () => {
//     setSearchData(null);
//     setCurrentStep('setup');
//   };
//
//   const handleNewSearch = () => {
//     setSearchData(null);
//     setCurrentStep('setup');
//   };
//
//   return (
//     <>
//       {currentStep === 'welcome' && (
//         <WelcomeScreen onGetStarted={handleGetStarted} />
//       )}
//
//       {currentStep === 'setup' && (
//         <SetupForm
//           onBack={handleBackToWelcome}
//           onSubmit={handleFormSubmit}
//         />
//       )}
//
//       {currentStep === 'processing' && (
//         <ProcessingScreen onComplete={handleProcessingComplete} />
//       )}
//
//       {currentStep === 'success' && stats && (
//           <SuccessScreen
//             stats={stats}
//             onViewBusinesses={handleViewBusinesses}
//             onRunAnother={handleRunAnother}
//           />
//       )}
//
//       {currentStep === 'dashboard' && (
//         <Dashboard onNewSearch={handleNewSearch} />
//       )}
//     </>
//   );
// }
//
//

// locallead/Dental Clinic Website Template/src/app/components/Onboarding.tsx

import { useEffect, useState } from "react";
import { WelcomeScreen } from "./WelcomeScreen";
import { SetupForm, FormData } from "./SetupForm";
import { ProcessingScreen } from "./ProcessingScreen";
import { SuccessScreen } from "./SuccessScreen";
import { Dashboard } from "./Dashboard";

type OnboardingStep =
  | "welcome"
  | "setup"
  | "processing"
  | "success"
  | "dashboard";

interface PipelineStats {
  scraped: number;
  qualified: number;
  enriched: number;
  previews: number;
}

export function Onboarding() {
  const [currentStep, setCurrentStep] =
    useState<OnboardingStep>("welcome");

  const [searchData, setSearchData] =
    useState<FormData | null>(null);

  const [stats, setStats] =
    useState<PipelineStats | null>(null);

  const [hydrated, setHydrated] = useState(false);

  const [loadingSuccess, setLoadingSuccess] = useState(false);


  // 🔁 Restore backend + local state on refresh
  useEffect(() => {
    const restoreState = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/status");
        const status = await res.json();

        const successAcknowledged =
          localStorage.getItem("successAcknowledged") === "true";

        // ✅ Restore stats (backend first, localStorage fallback)
        if (status.stats) {
          setStats(status.stats);
          localStorage.setItem(
            "lastStats",
            JSON.stringify(status.stats)
          );
        } else {
          const storedStats = localStorage.getItem("lastStats");
          if (storedStats) {
            setStats(JSON.parse(storedStats));
          }
        }

        if (
          status.state === "RUNNING" ||
          status.state === "STARTING"
        ) {
          setCurrentStep("processing");
        } else if (status.state === "DONE" && status.stats) {
          setCurrentStep(
            successAcknowledged ? "dashboard" : "success"
          );
        } else {
          setCurrentStep("welcome");
        }
      } catch {
        setCurrentStep("welcome");
      } finally {
        setHydrated(true);
      }
    };

    restoreState();
  }, []);

  // 🔄 Ensure stats are loaded when entering SuccessScreen
    useEffect(() => {
      if (currentStep !== "success" || stats) return;

      let cancelled = false;

      const fetchStats = async () => {
        try {
          setLoadingSuccess(true);

          const res = await fetch("http://127.0.0.1:8000/status");
          const status = await res.json();

          if (!cancelled && status.stats) {
            setStats(status.stats);
            localStorage.setItem(
              "lastStats",
              JSON.stringify(status.stats)
            );
          }
        } catch {
          // ignore — user can retry
        } finally {
          if (!cancelled) setLoadingSuccess(false);
        }
      };

      fetchStats();

      return () => {
        cancelled = true;
      };
    }, [currentStep, stats]);


  // 🛑 Prevent white screen before hydration
  if (!hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading…
      </div>
    );
  }

  // ───────── Handlers ─────────

  const handleGetStarted = () => {
    setCurrentStep("setup");
  };

  const handleBackToWelcome = () => {
    setCurrentStep("welcome");
  };

  const handleFormSubmit = (data: FormData) => {
    setSearchData(data);
    setCurrentStep("processing");
  };

  // ✅ MUST receive REAL stats
  const handleProcessingComplete = (pipelineStats: PipelineStats) => {
    localStorage.setItem(
      "lastRunAt",
      new Date().toISOString()
    );
    localStorage.setItem(
      "lastStats",
      JSON.stringify(pipelineStats)
    );
    localStorage.setItem("successAcknowledged", "false");

    setStats(pipelineStats);
    setCurrentStep("success");
  };

  const handleViewBusinesses = () => {
    localStorage.setItem("successAcknowledged", "true");
    setCurrentStep("dashboard");
  };

  const handleRunAnother = () => {
    localStorage.removeItem("successAcknowledged");
    localStorage.removeItem("lastStats");

    setStats(null);
    setSearchData(null);
    setCurrentStep("setup");
  };

  const handleNewSearch = () => {
    handleRunAnother();
  };

  // ───────── Render ─────────

  return (
    <>
      {currentStep === "welcome" && (
        <WelcomeScreen onGetStarted={handleGetStarted} />
      )}

      {currentStep === "setup" && (
        <SetupForm
          onBack={handleBackToWelcome}
          onSubmit={handleFormSubmit}
        />
      )}

      {currentStep === "processing" && (
        <ProcessingScreen
          onComplete={handleProcessingComplete}
        />
      )}

      {/* ✅ CRITICAL FIX: Success renders ONLY with stats */}
      {currentStep === "success" && (
          <>
            {stats ? (
              <SuccessScreen
                stats={stats}
                onViewBusinesses={handleViewBusinesses}
                onRunAnother={handleRunAnother}
              />
            ) : (
              <div className="min-h-screen flex items-center justify-center text-gray-500">
                Preparing your results…
              </div>
            )}
          </>
      )}


      {currentStep === "dashboard" && (
        <Dashboard onNewSearch={handleNewSearch} />
      )}
    </>
  );
}

