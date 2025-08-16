import React, { useState } from "react";
import { useTheme, themes, ThemeOption } from "@/hooks/use-theme";

export default function ThemeSelector() {
  const { currentTheme, setTheme, isDarkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
      >
        <div className="flex items-center space-x-2">
          <div 
            className="w-4 h-4 rounded-full shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${themes[currentTheme].primaryStart} 0%, ${themes[currentTheme].primaryEnd} 100%)`
            }}
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden sm:inline">
            {themes[currentTheme].name}
          </span>
        </div>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-xs text-gray-500 dark:text-gray-400`}></i>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 right-0 z-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 p-3 min-w-[280px]">
            <div className="mb-3 pb-3 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                <i className="fas fa-palette mr-2"></i>
                Choose Theme
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(themes).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setTheme(key as ThemeOption);
                      setIsOpen(false);
                    }}
                    className={`flex items-center space-x-2 p-2 rounded-lg transition-all hover:bg-gray-50 dark:hover:bg-gray-700 ${
                      currentTheme === key 
                        ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700' 
                        : 'border border-transparent'
                    }`}
                  >
                    <div 
                      className="w-4 h-4 rounded-full shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primaryStart} 0%, ${theme.primaryEnd} 100%)`
                      }}
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                      {theme.name}
                    </span>
                    {currentTheme === key && (
                      <i className="fas fa-check text-xs text-blue-600 dark:text-blue-400 ml-auto"></i>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                <i className="fas fa-moon mr-2"></i>
                Appearance
              </h3>
              <button
                onClick={() => {
                  toggleDarkMode();
                  setIsOpen(false);
                }}
                className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'} text-sm text-gray-600 dark:text-gray-300`}></i>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>
                <div className={`w-10 h-6 rounded-full transition-colors ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300'} relative`}>
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${isDarkMode ? 'translate-x-5' : 'translate-x-1'}`} />
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}