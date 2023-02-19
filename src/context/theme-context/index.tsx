import * as React from "react";
import {
  IThemeContext,
  IThemeContextProviderProps,
  ThemeValue,
} from "./theme-context.interfaces";

declare global {
  interface Window {
    __theme: ThemeValue;
    __onThemeChange: () => void;
    __setPreferredTheme: (theme: ThemeValue) => void;
  }
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: window?.__theme ?? "light",
  setTheme: () => {},
});

export function AppThemeProvider({ children }: IThemeContextProviderProps) {
  const initialValue = window?.__theme ?? "light";
  const [theme, setTheme] = React.useState(initialValue);

  React.useEffect(() => {
    try {
      window.__onThemeChange = () => {
        setTheme(window.__theme);
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

  const setPreferredTheme = (receivedTheme: ThemeValue) => {
    try {
      window.__setPreferredTheme(receivedTheme);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: setPreferredTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
