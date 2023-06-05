export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export type BreakpointValues = { [key in Breakpoint]: number };

export type UnitValue = "px" | "rem";

/**
 * @description The interface for the BreakpointUtils class
 * */
export interface IBreakpoints {
  /**
   * The breakpoint keys.
   * @default ["xs", "sm", "md", "lg", "xl"]
   * */
  keys: Breakpoint[];
  /**
   * The breakpoint values.
   * @default { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 }
   * */
  values: BreakpointValues;
  /**
   * @description up returns a media query string above the provided value.
   * @param key - The breakpoint key
   * @returns A media query string
   * */
  up(key: Breakpoint | number): string;

  /**
   * @description down returns a media query string below the provided value.
   * @param key - The breakpoint key
   * @returns A media query string
   * */
  down(key: Breakpoint | number): string;

  /**
   * @description between returns a media query string between the provided sart and end values.
   * @param start - The start value
   * @param end - The end value
   * @returns A media query string
   * */
  between(start: Breakpoint | number, end: Breakpoint | number): string;

  /**
   * @description only returns a media query string only for the provided value.
   * @param key - The breakpoint key
   * @returns A media query string
   * */
  only(key: Breakpoint): string;

  /**
   * @description width returns the key number value.
   * @param key - The breakpoint key
   * @returns The key number value
   * */
  width(key: Breakpoint): number;
}
