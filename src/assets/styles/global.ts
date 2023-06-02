import { createGlobalStyle } from "styled-components";
import { codeBlock } from "./code-block";
import { container } from "./container";
import { cssVars } from "./mapped-variables";

const GlobalStyle = createGlobalStyle`
  ${cssVars}
  *, ::after, ::before {
    box-sizing: border-box;
  }

  * {
    transition: background 0.5s ease;
  }

  html {
    height: 100%;
  }


  body {
    font-family: 'Noto Sans', sans-serif;
    line-height: 1.5;
    letter-spacing: normal;
    font-weight: 400;
    flex-direction: column;
    display: flex;
    margin: 0;
    background-color: ${(p) => p.theme.semanticColors.bodyBackground};
    color: ${(p) => p.theme.semanticColors.bodyText};
    margin: 0;

    ${(p) => p.theme.breakpoints.up("sm")} {
      font-size: 1rem;
    }
  }

  header, footer {
    font-family: 'Open Sans', sans-serif;
  }

  main {
    flex-shrink: 0;
  }

  a {
    color: ${(p) => p.theme.semanticColors.link};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
  }

 body {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  #gatsby-focus-wrapper, #___gatsby {
    display:inherit;
    height: inherit;
    flex-direction: inherit;
  }

  ${codeBlock}
  ${container}
  `;

export default GlobalStyle;
