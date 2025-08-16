import React, { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useConversionProgress } from "@/hooks/use-conversion-progress";
import Sidebar from "@/components/sidebar";
import StepContent from "@/components/step-content";

export default function ConversionGuide() {
  const isMobile = useIsMobile();
  const { currentStep, showStep, sidebarOpen, setSidebarOpen } = useConversionProgress();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      
      const steps = [
        'overview', 'step1', 'step2', 'step3', 'step4', 
        'step5', 'step6', 'step7', 'step8', 'step9'
      ];
      
      const currentIndex = steps.indexOf(currentStep);
      
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          if (currentIndex < steps.length - 1) {
            showStep(steps[currentIndex + 1]);
          }
          break;
        
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          if (currentIndex > 0) {
            showStep(steps[currentIndex - 1]);
          }
          break;
        
        case 'Home':
          e.preventDefault();
          showStep('overview');
          break;
        
        case 'End':
          e.preventDefault();
          showStep('step9');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, showStep]);

  return (
    <div className="bg-gray-50 font-inter min-h-screen">
      {/* Mobile Header */}
      {isMobile && (
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <i className="fas fa-exchange-alt text-2xl gradient-text"></i>
            <h1 className="text-lg font-semibold text-gray-800">InfoSewer Converter</h1>
          </div>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <i className="fas fa-bars text-gray-600"></i>
          </button>
        </div>
      )}

      <div className="flex min-h-screen">
        <Sidebar />
        
        {/* Overlay for mobile */}
        {isMobile && sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <StepContent step={currentStep} />
          </div>
        </main>
      </div>
    </div>
  );
}
