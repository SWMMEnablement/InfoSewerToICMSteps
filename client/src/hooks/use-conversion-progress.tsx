import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface ConversionProgressContextType {
  currentStep: string;
  showStep: (step: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  getProgressPercentage: () => number;
  completedSteps: Set<string>;
  toggleStepComplete: (stepId: string) => void;
  isStepComplete: (stepId: string) => boolean;
  getCompletionCount: () => { completed: number; total: number };
}

const ConversionProgressContext = createContext<ConversionProgressContextType | undefined>(undefined);

const steps = [
  'overview', 'step1', 'step2', 'step3', 'step4', 
  'step5', 'step6', 'step7', 'step8', 'step9',
  'errors', 'documentation'
];

const TOTAL_STEPS = 9;

export function ConversionProgressProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const saved = localStorage.getItem('icm-converter-progress');
      if (saved && steps.includes(saved)) {
        setCurrentStep(saved);
      }
    } catch (e) {
      console.log('LocalStorage not available');
    }

    try {
      const savedCompleted = localStorage.getItem('icm-converter-completed-steps');
      if (savedCompleted) {
        const parsed = JSON.parse(savedCompleted);
        if (Array.isArray(parsed)) {
          setCompletedSteps(new Set(parsed));
        }
      }
    } catch (e) {
      console.log('LocalStorage not available');
    }
  }, []);

  const showStep = (step: string) => {
    setCurrentStep(step);
    try {
      localStorage.setItem('icm-converter-progress', step);
    } catch (e) {
      console.log('LocalStorage not available');
    }
  };

  const toggleStepComplete = useCallback((stepId: string) => {
    setCompletedSteps(prev => {
      const next = new Set(prev);
      if (next.has(stepId)) {
        next.delete(stepId);
      } else {
        next.add(stepId);
      }
      try {
        localStorage.setItem('icm-converter-completed-steps', JSON.stringify(Array.from(next)));
      } catch (e) {
        console.log('LocalStorage not available');
      }
      return next;
    });
  }, []);

  const isStepComplete = useCallback((stepId: string) => {
    return completedSteps.has(stepId);
  }, [completedSteps]);

  const getCompletionCount = useCallback(() => {
    const stepIds = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8', 'step9'];
    const completed = stepIds.filter(id => completedSteps.has(id)).length;
    return { completed, total: TOTAL_STEPS };
  }, [completedSteps]);

  const getProgressPercentage = useCallback(() => {
    const { completed } = getCompletionCount();
    return Math.round((completed / TOTAL_STEPS) * 100);
  }, [getCompletionCount]);

  const value = {
    currentStep,
    showStep,
    sidebarOpen,
    setSidebarOpen,
    getProgressPercentage,
    completedSteps,
    toggleStepComplete,
    isStepComplete,
    getCompletionCount,
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

export function withConversionProgress<P extends object>(Component: React.ComponentType<P>) {
  return function WrappedComponent(props: P) {
    return (
      <ConversionProgressProvider>
        <Component {...props} />
      </ConversionProgressProvider>
    );
  };
}
