import {
  IStack,
  IStackKeys,
  IStackParsed,
  IStackRaw,
} from "./stack.interfaces";

/**
 * @description A utility class for generating a stack
 * */
export default class Stack implements IStack {
  private base = 0;
  private above: number;
  private below: number;
  private varNameOverride: string | undefined;
  public rawValues: IStackRaw;
  public values: IStackParsed;

  constructor(above?: number, varNameOverride?: string) {
    this.above = above ?? 1;
    this.below = above ? -Math.abs(above) : -1;
    this.varNameOverride = varNameOverride;
    this.rawValues = this.generateRawStack();
    this.values = this.generateParsedStack();
  }

  /**
   * @description Generates a raw stack object
   * */
  private generateRawStack(): IStackRaw {
    const { above, base, below } = this;
    const backdrop = base + below;
    const main = base;
    const nav = base + above;
    const codeblock = nav + above;
    const dropdown = nav + above;
    return {
      backdrop,
      codeblock,
      dropdown,
      main,
      nav,
    };
  }

  /**
   * @description Generates a parsed stack object
   * */
  private generateParsedStack = (): IStackParsed =>
    this.toKeys().reduce<IStackParsed>(
      (obj, key) => ({
        ...obj,
        [key]: `var(${this.toCssVarName(key)})`,
      }),
      {} as IStackParsed
    );

  /**
   * @description Converts the raw stack object to an array of keys
   * */
  private toKeys = () => Object.keys(this.rawValues) as IStackKeys[];

  /**
   * @description Converts a stack key to a css variable name
   * */
  private toCssVarName = (name: string) =>
    "--".concat(this.varNameOverride ?? "zindex", "-", name);

  public generateVars = () =>
    Object.entries(this.rawValues)
      .map(([name, value]) => `${this.toCssVarName(name)}: ${value}; `)
      .join("");
}
