// // locallead/Dental Clinic Website Template/src/app/component/Onboarding.tsx
// import { useState } from 'react';
// import { WelcomeScreen } from './WelcomeScreen';
// import { SetupForm, FormData } from './SetupForm';
// import { ProcessingScreen } from './ProcessingScreen';
// import { SuccessScreen } from './SuccessScreen';
// import { Dashboard } from './Dashboard';
//
// type OnboardingStep = 'welcome' | 'setup' | 'processing' | 'success' | 'dashboard';
//
// export function Onboarding() {
//   const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
//   const [searchData, setSearchData] = useState<FormData | null>(null);
//   const [stats, setStats] = useState(null);
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
//       {currentStep === 'success' && (
//         <SuccessScreen
//           onViewBusinesses={handleViewBusinesses}
//           onRunAnother={handleRunAnother}
//         />
//       )}
//
//       {currentStep === 'dashboard' && (
//         <Dashboard onNewSearch={handleNewSearch} />
//       )}
//     </>
//   );
// }


// locallead/Dental Clinic Website Template/src/app/component/Onboarding.tsx
import { WelcomeScreen } from './WelcomeScreen';
import { SetupForm, FormData } from './SetupForm';
import { ProcessingScreen } from './ProcessingScreen';
import { SuccessScreen } from './SuccessScreen';
import { Dashboard } from './Dashboard';
import { useState, useEffect } from 'react';

type OnboardingStep = 'welcome' | 'setup' | 'processing' | 'success' | 'dashboard';

export function Onboarding() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [searchData, setSearchData] = useState<FormData | null>(null);
  const [stats, setStats] = useState(null);

  // 🔁 Restore state on refresh
  useEffect(() => {
    fetch("/status")
      .then(res => res.json())
      .then(status => {
        if (status.state === "RUNNING") {
          setCurrentStep("processing");
        }

        if (status.state === "DONE") {
          setCurrentStep("dashboard");
        }
      })
      .catch(() => {
        // backend not running — stay on welcome
      });
  }, []);

  const handleGetStarted = () => {
    setCurrentStep('setup');
  };

  const handleBackToWelcome = () => {
    setCurrentStep('welcome');
  };

  const handleFormSubmit = (data: FormData) => {
    setSearchData(data);
    setCurrentStep('processing');
  };

  const handleProcessingComplete = (stats) => {
      localStorage.setItem("lastRunAt", new Date().toISOString());
      setStats(stats);
      setCurrentStep('success');
  };

  const handleViewBusinesses = () => {
    setCurrentStep('dashboard');
  };

  const handleRunAnother = () => {
    setSearchData(null);
    setCurrentStep('setup');
  };

  const handleNewSearch = () => {
    setSearchData(null);
    setCurrentStep('setup');
  };

  return (
    <>
      {currentStep === 'welcome' && (
        <WelcomeScreen onGetStarted={handleGetStarted} />
      )}

      {currentStep === 'setup' && (
        <SetupForm
          onBack={handleBackToWelcome}
          onSubmit={handleFormSubmit}
        />
      )}

      {currentStep === 'processing' && (
        <ProcessingScreen onComplete={handleProcessingComplete} />
      )}

      {currentStep === 'success' && stats && (
          <SuccessScreen
            stats={stats}
            onViewBusinesses={handleViewBusinesses}
            onRunAnother={handleRunAnother}
          />
      )}

      {currentStep === 'dashboard' && (
        <Dashboard onNewSearch={handleNewSearch} />
      )}
    </>
  );
}

