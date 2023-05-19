import {
  IStack,
  IStackKeys,
  IStackParsed,
  IStackRaw,
} from "./stack.interfaces";

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

  private generateParsedStack = (): IStackParsed =>
    this.toKeys().reduce<IStackParsed>(
      (obj, key) => ({
        ...obj,
        [key]: `var(${this.toCssVarName(key)})`,
      }),
      {} as IStackParsed
    );

  private toKeys = () => Object.keys(this.rawValues) as IStackKeys[];

  private toCssVarName = (name: string) =>
    "--".concat(this.varNameOverride ?? "zindex", "-", name);

  public generateVars = () =>
    Object.entries(this.rawValues)
      .map(([name, value]) => `${this.toCssVarName(name)}: ${value}; `)
      .join("");
}
