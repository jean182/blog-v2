import { IGlobalTheme } from "@assets/theming";

declare module "styled-components" {
  export interface DefaultTheme extends IGlobalTheme {}
}
