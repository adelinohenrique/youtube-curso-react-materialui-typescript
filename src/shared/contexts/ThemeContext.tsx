import { ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from './../themes';
import React, { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box } from '@mui/system'

interface ThemeContextData {
themeName: 'light' | 'dark';
toggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};
interface IAppThemeProviderProps {
  children: React.ReactNode
};
export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ( { children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark': 'light');
  }, []); 

  const theme = useMemo (() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Box width="100vm" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
};

