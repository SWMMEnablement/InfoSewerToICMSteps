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
  { id: 'overview', icon: 'fas fa-info-circle', title: 'Overview', subtitle: 'Start Here + Recommended Path' },
  { id: 'toolkit-ids', icon: 'fas fa-fingerprint', title: 'ID Checker', subtitle: 'Validate Node/Link IDs' },
  { id: 'toolkit-validator', icon: 'fas fa-file-csv', title: 'CSV Validator', subtitle: 'Check Import Fields' },
  { id: 'toolkit-sql', icon: 'fas fa-wrench', title: 'SQL Builder', subtitle: 'Generate Fix Scripts' },
  { id: 'toolkit-readiness', icon: 'fas fa-clipboard-check', title: 'Readiness Check', subtitle: 'Pre-Conversion Checklist' },
  { id: 'step1', icon: 'fas fa-circle-nodes', title: 'Step 1', subtitle: 'Import Nodes & Subcatchments' },
  { id: 'step2', icon: 'fas fa-route', title: 'Step 2', subtitle: 'Import Links & Geometry' },
  { id: 'step3', icon: 'fas fa-water', title: 'Step 3', subtitle: 'Import Manhole Hydraulics' },
  { id: 'step4', icon: 'fas fa-pipe', title: 'Step 4', subtitle: 'Import Link Hydraulics' },
  { id: 'step5', icon: 'fas fa-pump-soap', title: 'Step 5', subtitle: 'Import Pump Hydraulics' },
  { id: 'step6', icon: 'fas fa-cogs', title: 'Step 6', subtitle: 'Import Pump Controls' },
  { id: 'step7', icon: 'fas fa-tint', title: 'Step 7', subtitle: 'Import Subcatchment DWF' },
  { id: 'step8', icon: 'fas fa-flask', title: 'Step 8', subtitle: 'Import Wet Well Hydraulics' },
  { id: 'step9', icon: 'fas fa-cloud-rain', title: 'Step 9', subtitle: 'Configure RDII Hydrographs' },
  { id: 'errors', icon: 'fas fa-bug', title: 'Error Lookup', subtitle: 'Troubleshooting Guide' },
  { id: 'documentation', icon: 'fas fa-book', title: 'Documentation', subtitle: 'InfoSewer References' },
];

const stepIds = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8', 'step9'];

export default function Sidebar() {
  const isMobile = useIsMobile();
  const { currentStep, showStep, sidebarOpen, setSidebarOpen, toggleStepComplete, isStepComplete, getCompletionCount } = useConversionProgress();
  const { completed, total } = getCompletionCount();

  const sidebarClasses = isMobile 
    ? `fixed z-40 w-80 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 h-full overflow-y-auto transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`
    : 'w-80 bg-white dark:bg-gray-800 shadow-lg lg:shadow-none border-r border-gray-200 dark:border-gray-700 h-full overflow-y-auto';

  const handleTabClick = (stepId: string) => {
    showStep(stepId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <nav className={sidebarClasses}>
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 gradient-primary rounded flex items-center justify-center shadow-lg">
            <i className="fas fa-exchange-alt text-white text-xs"></i>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">InfoSewer</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Conversion Guide</p>
          </div>
        </div>
        
        <ProgressBar />

        <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
          {completed} of {total} steps completed
        </div>
      </div>

      <div className="p-4 space-y-2">
        {tabs.map((tab) => {
          const isStep = stepIds.includes(tab.id);
          const isCompleted = isStep && isStepComplete(tab.id);
          const isFirstStep = tab.id === 'step1';
          const isFirstToolkit = tab.id === 'toolkit-ids';

          return (
            <React.Fragment key={tab.id}>
              {isFirstToolkit && (
                <div className="pt-3 pb-1 px-2">
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-emerald-200 dark:bg-emerald-700"></div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                      <i className="fas fa-toolbox text-[9px]"></i>Interactive Toolkit
                    </span>
                    <div className="h-px flex-1 bg-emerald-200 dark:bg-emerald-700"></div>
                  </div>
                </div>
              )}
              {isFirstStep && (
                <div className="pt-3 pb-1 px-2">
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-200 dark:bg-gray-600"></div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center gap-1">
                      <i className="fas fa-history text-[9px]"></i>Legacy 9-Step Path
                    </span>
                    <div className="h-px flex-1 bg-gray-200 dark:bg-gray-600"></div>
                  </div>
                </div>
              )}
              <div className="flex items-center">
                {isStep && (
                  <button
                    className="flex-shrink-0 mr-2 w-5 h-5 flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStepComplete(tab.id);
                    }}
                  >
                    {isCompleted ? (
                      <i className="fas fa-check-circle text-green-500 text-lg"></i>
                    ) : (
                      <i className="far fa-circle text-gray-400 dark:text-gray-500 text-lg"></i>
                    )}
                  </button>
                )}
                <button
                  className={`tab flex-1 p-4 rounded-xl text-left transition-all duration-300 ${
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
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {isMobile && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button 
            onClick={() => setSidebarOpen(false)}
            className="w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <i className="fas fa-times mr-2"></i>Close Menu
          </button>
        </div>
      )}
    </nav>
  );
}
