import { Breakpoint } from "./breakpoints/breakpoints.interfaces";

type MaxWidthKeys = Exclude<Breakpoint, "xs">;

type MaxWidthValues = { [key in MaxWidthKeys]: string };

export const HEADER_HEIGHT = 70;

export const MAX_WIDTH_VALUES: MaxWidthValues = {
  sm: "540px",
  md: "720px",
  lg: "960px",
  xl: "1140px",
};
