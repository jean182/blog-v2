export interface IThemeContextProviderProps {
  children: React.ReactNode;
}

export type ThemeValue = "light" | "dark" | "contrast";

export interface IThemeContext {
  theme: ThemeValue;
  setTheme: (theme: ThemeValue) => void;
}
