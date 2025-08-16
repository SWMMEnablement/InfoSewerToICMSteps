import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeOption = 
  | 'ocean' 
  | 'sunset' 
  | 'forest' 
  | 'lavender' 
  | 'corporate' 
  | 'midnight'
  | 'autumn'
  | 'arctic';

interface ThemeContextType {
  currentTheme: ThemeOption;
  setTheme: (theme: ThemeOption) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = {
  ocean: {
    name: 'Ocean Blue',
    primaryStart: 'hsl(210 100% 56%)',
    primaryEnd: 'hsl(220 95% 65%)',
    secondaryStart: 'hsl(195 85% 45%)',
    secondaryEnd: 'hsl(210 90% 55%)',
    accentStart: 'hsl(200 80% 60%)',
    accentEnd: 'hsl(215 85% 70%)',
  },
  sunset: {
    name: 'Sunset Orange',
    primaryStart: 'hsl(25 95% 53%)',
    primaryEnd: 'hsl(45 100% 60%)',
    secondaryStart: 'hsl(15 90% 55%)',
    secondaryEnd: 'hsl(35 95% 65%)',
    accentStart: 'hsl(20 85% 58%)',
    accentEnd: 'hsl(40 90% 68%)',
  },
  forest: {
    name: 'Forest Green',
    primaryStart: 'hsl(140 70% 45%)',
    primaryEnd: 'hsl(160 75% 55%)',
    secondaryStart: 'hsl(130 65% 40%)',
    secondaryEnd: 'hsl(150 70% 50%)',
    accentStart: 'hsl(135 68% 42%)',
    accentEnd: 'hsl(155 72% 52%)',
  },
  lavender: {
    name: 'Lavender Purple',
    primaryStart: 'hsl(260 60% 65%)',
    primaryEnd: 'hsl(280 65% 75%)',
    secondaryStart: 'hsl(250 55% 60%)',
    secondaryEnd: 'hsl(270 60% 70%)',
    accentStart: 'hsl(255 58% 62%)',
    accentEnd: 'hsl(275 62% 72%)',
  },
  corporate: {
    name: 'Corporate Gray',
    primaryStart: 'hsl(215 25% 27%)',
    primaryEnd: 'hsl(215 30% 40%)',
    secondaryStart: 'hsl(210 20% 25%)',
    secondaryEnd: 'hsl(210 25% 35%)',
    accentStart: 'hsl(212 22% 26%)',
    accentEnd: 'hsl(212 27% 37%)',
  },
  midnight: {
    name: 'Midnight Blue',
    primaryStart: 'hsl(240 50% 25%)',
    primaryEnd: 'hsl(260 55% 35%)',
    secondaryStart: 'hsl(230 45% 20%)',
    secondaryEnd: 'hsl(250 50% 30%)',
    accentStart: 'hsl(235 47% 22%)',
    accentEnd: 'hsl(255 52% 32%)',
  },
  autumn: {
    name: 'Autumn Warmth',
    primaryStart: 'hsl(15 85% 55%)',
    primaryEnd: 'hsl(35 90% 65%)',
    secondaryStart: 'hsl(10 80% 50%)',
    secondaryEnd: 'hsl(30 85% 60%)',
    accentStart: 'hsl(12 82% 52%)',
    accentEnd: 'hsl(32 87% 62%)',
  },
  arctic: {
    name: 'Arctic Teal',
    primaryStart: 'hsl(185 85% 45%)',
    primaryEnd: 'hsl(200 90% 55%)',
    secondaryStart: 'hsl(180 80% 40%)',
    secondaryEnd: 'hsl(195 85% 50%)',
    accentStart: 'hsl(182 82% 42%)',
    accentEnd: 'hsl(197 87% 52%)',
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>('ocean');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme and dark mode preference
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('icm-converter-theme') as ThemeOption;
      const savedDarkMode = localStorage.getItem('icm-converter-dark-mode');
      
      if (savedTheme && themes[savedTheme]) {
        setCurrentTheme(savedTheme);
      }
      
      if (savedDarkMode) {
        setIsDarkMode(savedDarkMode === 'true');
      }
    } catch (e) {
      console.log('LocalStorage not available');
    }
  }, []);

  // Apply theme to CSS variables
  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;
    
    root.style.setProperty('--primary-start', theme.primaryStart);
    root.style.setProperty('--primary-end', theme.primaryEnd);
    root.style.setProperty('--secondary-start', theme.secondaryStart);
    root.style.setProperty('--secondary-end', theme.secondaryEnd);
    root.style.setProperty('--accent-start', theme.accentStart);
    root.style.setProperty('--accent-end', theme.accentEnd);
  }, [currentTheme]);

  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const setTheme = (theme: ThemeOption) => {
    setCurrentTheme(theme);
    try {
      localStorage.setItem('icm-converter-theme', theme);
    } catch (e) {
      console.log('LocalStorage not available');
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    try {
      localStorage.setItem('icm-converter-dark-mode', newDarkMode.toString());
    } catch (e) {
      console.log('LocalStorage not available');
    }
  };

  const value = {
    currentTheme,
    setTheme,
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}