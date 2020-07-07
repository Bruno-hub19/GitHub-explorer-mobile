import React, { createContext, useContext, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';

import light from '../themes/light';
import dark from '../themes/dark';

interface ThemeObjectFormat {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

interface CustomThemeContextFormat {
  themeInUse: ThemeObjectFormat;
  toggleTheme(): void;
}

const CustomThemeContext = createContext<CustomThemeContextFormat>(
  {} as CustomThemeContextFormat,
);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(dark);

  const toggleTheme = useCallback(() => {
    setCurrentTheme(currentTheme.title === 'dark' ? light : dark);
  }, [currentTheme.title]);

  return (
    <CustomThemeContext.Provider
      value={{ toggleTheme, themeInUse: currentTheme }}
    >
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export function useCustomTheme(): CustomThemeContextFormat {
  const context = useContext(CustomThemeContext);

  if (!context) {
    throw new Error(
      'useCustomTheme must be used within an customThemeProvider',
    );
  }

  return context;
}
