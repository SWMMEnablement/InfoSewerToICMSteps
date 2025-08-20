import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useConversionProgress } from "@/hooks/use-conversion-progress";
import ProgressBar from "@/components/progress-bar";

interface TabItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

const tabs: TabItem[] = [
  { id: 'overview', icon: 'fas fa-info-circle', title: 'Overview', subtitle: 'Getting Started' },
  { id: 'documentation', icon: 'fas fa-book', title: 'Documentation', subtitle: 'InfoSewer References' },
  { id: 'step1', icon: 'fas fa-circle-nodes', title: 'Step 1', subtitle: 'Import Nodes & Subcatchments' },
  { id: 'step2', icon: 'fas fa-route', title: 'Step 2', subtitle: 'Import Links & Geometry' },
  { id: 'step3', icon: 'fas fa-water', title: 'Step 3', subtitle: 'Import Manhole Hydraulics' },
  { id: 'step4', icon: 'fas fa-pipe', title: 'Step 4', subtitle: 'Import Link Hydraulics' },
  { id: 'step5', icon: 'fas fa-pump-soap', title: 'Step 5', subtitle: 'Import Pump Hydraulics' },
  { id: 'step6', icon: 'fas fa-cogs', title: 'Step 6', subtitle: 'Import Pump Controls' },
  { id: 'step7', icon: 'fas fa-tint', title: 'Step 7', subtitle: 'Import Subcatchment DWF' },
  { id: 'step8', icon: 'fas fa-flask', title: 'Step 8', subtitle: 'Import Wet Well Hydraulics' },
  { id: 'step9', icon: 'fas fa-cloud-rain', title: 'Step 9', subtitle: 'Configure RDII Hydrographs' },
];

export default function Sidebar() {
  const isMobile = useIsMobile();
  const { currentStep, showStep, sidebarOpen, setSidebarOpen } = useConversionProgress();

  const sidebarClasses = isMobile 
    ? `fixed z-40 w-80 bg-white shadow-lg border-r border-gray-200 h-full overflow-y-auto transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`
    : 'w-80 bg-white shadow-lg lg:shadow-none border-r border-gray-200 h-full overflow-y-auto';

  const handleTabClick = (stepId: string) => {
    showStep(stepId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <nav className={sidebarClasses}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
            <i className="fas fa-exchange-alt text-white text-xl"></i>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">InfoSewer</h1>
            <p className="text-sm text-gray-500">Conversion Guide</p>
          </div>
        </div>
        
        <ProgressBar />
      </div>

      {/* Navigation Tabs */}
      <div className="p-4 space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab w-full p-4 rounded-xl text-left transition-all duration-300 ${
              currentStep === tab.id ? 'tab-active' : 'tab-inactive'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <div className="flex items-center space-x-3">
              <i className={`${tab.icon} w-5`}></i>
              <div>
                <div className="font-medium">{tab.title}</div>
                <div className="text-sm opacity-75">{tab.subtitle}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Close button for mobile */}
      {isMobile && (
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={() => setSidebarOpen(false)}
            className="w-full py-2 px-4 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <i className="fas fa-times mr-2"></i>Close Menu
          </button>
        </div>
      )}
    </nav>
  );
}
