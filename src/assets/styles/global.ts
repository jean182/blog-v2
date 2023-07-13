import { createGlobalStyle } from "styled-components";
import { codeBlock } from "./code-block";
import { container } from "./container";
import { cssVars } from "./mapped-variables";
import { modalStyles } from "./modal.styled";

const GlobalStyle = createGlobalStyle`
  ${cssVars}
  *, ::after, ::before {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    background-color: transparent;
    width: 15px;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 4px solid transparent;
    background-color: var(--scrollbar-thumb);
    background-clip: content-box;
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
    display: flex;
    flex-direction: column;
    margin: 0;
    background-color: ${(p) => p.theme.semanticColors.bodyBackground};
    color: ${(p) => p.theme.semanticColors.bodyText};
    margin: 0;
    overflow: overlay;

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
    overflow: overlay;
  }

  #gatsby-focus-wrapper, #___gatsby {
    display:inherit;
    height: inherit;
    flex-direction: inherit;
  }

  .fade {
    opacity: 0;
    transition: opacity 200ms linear;
  }

  .show {
    opacity: 1;
  }


  ${codeBlock}
  ${container}
  ${modalStyles}
  `;

export default GlobalStyle;
