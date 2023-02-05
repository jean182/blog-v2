export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export type BreakpointValues = { [key in Breakpoint]: number };

export type UnitValue = "px" | "rem";

export interface IBreakpoints {
  /**
   * The breakpoint keynames stored in an array.
   * "xs" | "sm" | "md" | "lg" | "xl".
   */
  keys: Breakpoint[];
  /**
   * The breakpoint object with the keynames size values.
   */
  values: BreakpointValues;
  /**
   * Returns a media query string above the provided value.
   */
  up(key: Breakpoint | number): string;
  /**
   * Returns a media query string below the provided value.
   */
  down(key: Breakpoint | number): string;
  /**
   * Returns a media query string between the provided sart and end values.
   */
  between(start: Breakpoint | number, end: Breakpoint | number): string;
  /**
   * Returns a media query string only for the provided value.
   */
  only(key: Breakpoint): string;
  /**
   * The key number value.
   */
  width(key: Breakpoint): number;
}
