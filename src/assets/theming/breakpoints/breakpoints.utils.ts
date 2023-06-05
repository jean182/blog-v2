import {
  Breakpoint,
  BreakpointValues,
  IBreakpoints,
  UnitValue,
} from "./breakpoints.interfaces";

/**
 * @description A utility class for breakpoints
 * */
export default class BreakpointUtils implements IBreakpoints {
  private step;
  private unit;
  public keys: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];
  public values: BreakpointValues = {
    xs: 256,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  };

  constructor(step: number, unit: UnitValue) {
    this.step = step;
    this.unit = unit;
  }

  between(start: Breakpoint | number, end: Breakpoint | number) {
    const startValue = typeof start !== "number" ? this.values[start] : start;
    const endValue = typeof end !== "number" ? this.values[end] : end;

    const endIndex = typeof end !== "number" ? this.keys.indexOf(end) : -1;

    if (startValue > endValue) {
      throw new Error("End value must be greater than Start value");
    }

    return (
      `@media (min-width:${startValue}${this.unit}) and ` +
      `(max-width:${
        (endIndex !== -1 ? this.values[this.keys[endIndex]] : endValue) -
        this.step / 100
      }${this.unit})`
    );
  }

  down(key: Breakpoint | number) {
    if (typeof key === "number") {
      return `@media (max-width:${key - this.step / 100}${
        this.unit
      })`;
    }
    const endIndex = this.keys.indexOf(key);
    const upperbound = this.values[this.keys[endIndex]];

    if (endIndex === this.keys.length) {
      // down from the biggest breakpoint applies to all sizes
      return this.up("xs");
    }
    return `@media (max-width:${upperbound - this.step / 100}${
      this.unit
    })`;
  }

  up(key: Breakpoint | number) {
    const value = typeof key === "number" ? key : this.values[key];
    return `@media (min-width:${value}${this.unit})`;
  }

  only(key: Breakpoint) {
    if (this.keys.indexOf(key) + 1 < this.keys.length) {
      return this.between(key, this.keys[this.keys.indexOf(key) + 1]);
    }

    return this.up(key);
  }

  width(key: Breakpoint) {
    return this.values[key];
  }
}
