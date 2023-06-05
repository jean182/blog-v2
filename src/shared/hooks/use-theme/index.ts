import * as React from "react";
import { ThemeContext } from "@context";

/**
 * Hook that returns the current theme object
 * @returns theme - The current theme object.
 * */
export default function useTheme() {
  return React.useContext(ThemeContext);
}
