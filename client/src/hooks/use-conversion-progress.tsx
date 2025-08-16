import React, { createContext, useContext, useState, useEffect } from "react";

interface ConversionProgressContextType {
  currentStep: string;
  showStep: (step: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  getProgressPercentage: () => number;
}

const ConversionProgressContext = createContext<ConversionProgressContextType | undefined>(undefined);

const steps = [
  'overview', 'step1', 'step2', 'step3', 'step4', 
  'step5', 'step6', 'step7', 'step8', 'step9'
];

export function ConversionProgressProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Load saved progress
  useEffect(() => {
    try {
      const saved = localStorage.getItem('icm-converter-progress');
      if (saved && steps.includes(saved)) {
        setCurrentStep(saved);
      }
    } catch (e) {
      console.log('LocalStorage not available');
    }
  }, []);

  const showStep = (step: string) => {
    setCurrentStep(step);
    
    // Save progress
    try {
      localStorage.setItem('icm-converter-progress', step);
    } catch (e) {
      console.log('LocalStorage not available');
    }
  };

  const getProgressPercentage = () => {
    const stepIndex = steps.indexOf(currentStep);
    return Math.round((stepIndex / (steps.length - 1)) * 100);
  };

  const value = {
    currentStep,
    showStep,
    sidebarOpen,
    setSidebarOpen,
    getProgressPercentage,
  };

  return (
    <ConversionProgressContext.Provider value={value}>
      {children}
    </ConversionProgressContext.Provider>
  );
}

export function useConversionProgress() {
  const context = useContext(ConversionProgressContext);
  if (context === undefined) {
    throw new Error('useConversionProgress must be used within a ConversionProgressProvider');
  }
  return context;
}

// For easier use, we can also export the provider as a component wrapper
export function withConversionProgress<P extends object>(Component: React.ComponentType<P>) {
  return function WrappedComponent(props: P) {
    return (
      <ConversionProgressProvider>
        <Component {...props} />
      </ConversionProgressProvider>
    );
  };
}
