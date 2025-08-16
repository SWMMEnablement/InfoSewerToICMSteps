import React from "react";
import { useConversionProgress } from "@/hooks/use-conversion-progress";

export default function ProgressBar() {
  const { currentStep, getProgressPercentage } = useConversionProgress();
  const progressPercentage = getProgressPercentage();

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">Progress</span>
        <span className="text-sm font-medium gradient-text">{progressPercentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="progress-bar h-3 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
