import BreakpointUtils from "./breakpoints/breakpoints.utils";
import { ISemanticColors } from "./colors";
import { IStack } from "./stack";

/**
 * @description The interface for the GlobalTheme object
 * */
export interface IGlobalTheme {
  breakpoints: BreakpointUtils;
  semanticColors: ISemanticColors;
  stack: IStack;
}
