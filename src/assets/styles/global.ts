import { createGlobalStyle } from "styled-components";
import { codeBlock } from "./code-block";
import { container } from "./container";
import { colorVariables } from "./mapped-colors";

const GlobalStyle = createGlobalStyle`
  ${colorVariables}
  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-family: 'Roboto Serif', serif;
    line-height: 1.5;
    letter-spacing: normal;
    font-weight: 400;
    flex-direction: column;
    display: flex;
    margin: 0;
    background-color: ${(p) => p.theme.semanticColors.bodyBackground};
    color: ${(p) => p.theme.semanticColors.bodyText};

    ${(p) => p.theme.breakpoints.up("sm")} {
      font-size: 1rem;
    }
  }

  main {
    flex-shrink: 0;
  }

  /* Needed to enforce a fixed nav behavior */
  main > * {
    padding: 60px 0;
  }

  a {
    color: ${(p) => p.theme.semanticColors.link};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Condensed', sans-serif;
  }

  ${codeBlock}
  ${container}
  `;

export default GlobalStyle;
