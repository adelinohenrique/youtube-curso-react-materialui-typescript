import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { lightTheme } from './shared/themes';

export const App =() => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <AppRoutes />    
      </BrowserRouter>      
    </ThemeProvider>
    
  );
}
