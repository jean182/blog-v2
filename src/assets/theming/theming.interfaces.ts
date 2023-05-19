import BreakpointUtils from "./breakpoints/breakpoints.utils";
import { ISemanticColors } from "./colors";
import { IStack } from "./stack";

export interface IGlobalTheme {
  breakpoints: BreakpointUtils;
  semanticColors: ISemanticColors;
  stack: IStack;
}
