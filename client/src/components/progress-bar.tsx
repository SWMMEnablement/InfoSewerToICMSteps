import React from "react";
import { useConversionProgress } from "@/hooks/use-conversion-progress";

export default function ProgressBar() {
  const { getProgressPercentage, getCompletionCount } = useConversionProgress();
  const progressPercentage = getProgressPercentage();
  const { completed, total } = getCompletionCount();

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{completed} of {total} completed</span>
        <span className="text-sm font-medium gradient-text">{progressPercentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div 
          className="progress-bar h-3 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
