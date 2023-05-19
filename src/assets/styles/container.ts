import { MAX_WIDTH_VALUES } from "@assets/theming";
import { css } from "styled-components";

export const container = css`
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    ${(p) => p.theme.breakpoints.up("sm")} {
      max-width: ${MAX_WIDTH_VALUES.sm};
    }
    ${(p) => p.theme.breakpoints.up("md")} {
      max-width: ${MAX_WIDTH_VALUES.md};
    }
    ${(p) => p.theme.breakpoints.up("lg")} {
      max-width: ${MAX_WIDTH_VALUES.lg};
    }
    ${(p) => p.theme.breakpoints.up("xl")} {
      max-width: ${MAX_WIDTH_VALUES.xl};
    }
    ${(p) => p.theme.breakpoints.down("lg")} {
      padding-right: 0;
      padding-left: 0;
    }

    /* Needed to enforce a fixed nav behavior */
    main > & {
      padding: 60px 15px 0;
    }
  }
`;
