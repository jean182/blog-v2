export * from "./constants";
export * from "./colors"
export * from "./theming.interfaces";
import breakpoints from "./breakpoints";
import { colors } from "./colors";
import stack from "./stack";
import { IGlobalTheme } from "./theming.interfaces";

const theme: IGlobalTheme = { breakpoints, semanticColors: colors, stack }

export default theme;
