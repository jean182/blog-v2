import * as React from "react";
import {
  IThemeContext,
  IThemeContextProviderProps,
  ThemeValue,
} from "./theme-context.interfaces";
import { isBrowser } from "@shared/utils";

export { IThemeContext, IThemeContextProviderProps, ThemeValue };

declare global {
  interface Window {
    __theme: ThemeValue;
    __onThemeChange: () => void;
    __setPreferredTheme: (theme: ThemeValue) => void;
  }
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: isBrowser() ? window?.__theme : "light",
  setTheme: () => {},
});

export function AppThemeProvider({ children }: IThemeContextProviderProps) {
  const initialValue = isBrowser() ? window?.__theme : "light";
  const [theme, setTheme] = React.useState(initialValue);

  React.useEffect(() => {
    try {
      if (isBrowser()) {
        window.__onThemeChange = () => {
          setTheme(window.__theme);
        };
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const setPreferredTheme = (receivedTheme: ThemeValue) => {
    try {
      if (isBrowser()) {
        window.__setPreferredTheme(receivedTheme);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setPreferredTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
