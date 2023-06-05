export type IStackKeys = "backdrop" | "codeblock" | "dropdown" | "main" | "nav";
export type IStackRaw = { [key in IStackKeys]: number };
export type IStackParsed = { [key in IStackKeys]: string };

/**
 * @description The interface for the StackUtils class
 * */
export interface IStack {
  /**
   * @description Generates a string of css variables
   * */
  generateVars: () => string;
  /**
   * The stack object with the key -> value being the value a number.
   * (Not recommended to use)
   */
  rawValues: IStackRaw;
  /**
   * The stack object with key -> value being the value the css variable name.
   */
  values: IStackParsed;
}
