import { css } from "styled-components";

const codeColors = css`
  :root {
    --code-dark-text: #000000;
    --code-light-text: #fff;
    --css-background: #264de4;
    --graphql-background: #e10098;
    --highlight-background: #168274;
    --highlight-border: #029bce;
    --js-background: #f7df1e;
    --md-background: #f9ac00;
    --ts-background: #007acc;
    --ruby-background: #cc0000;
    --vue-background: #42b883;
  }
  .dark, .contrast {
    --highlight-background: #fff9e0;
  }
`;

export const codeBlock = css`
  ${codeColors}

  .prism-code {
    font-size: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    -webkit-overflow-scrolling: touch;
    background-color: transparent;
    overflow: initial;
  }

  .token {
    display: inline-block;
  }

  p > code,
  li > code {
    background: rgb(1, 22, 39);
    color: rgb(214, 222, 235);
    padding: 0.4em 0.3rem;
  }

  .gatsby-highlight {
    position: relative;
    font-size: 1rem;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }

  .gatsby-highlight > code[class*="language-"],
  .gatsby-highlight > pre[class*="language-"] {
    word-spacing: normal;
    word-break: normal;
    overflow-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    float: left;
    min-width: 100%;
  }

  .line-number-style {
    display: inline-block;
    padding-left: 1em;
    padding-right: 1.5em;
    width: 1.2em;
    user-select: none;
    opacity: 0.3;
    text-align: center;
    position: relative;
  }

  .highlight-line {
    background-color: var(--highlight-background);
    border-left: 4px solid var(--highlight-border);
  }

  .highlight-line .line-number-style {
    opacity: 0.5;
    width: calc(1.2em - 4px);
    left: -2px;
  }

  pre[class*="language-"] {
    padding: 1em 0px;
    margin: 1.5em 0px;
    overflow: auto;
    border-radius: 0.3em;
    background-color: rgb(40, 44, 52);
  }

  pre[class*="language-"] {
    &::before {
      color: #232129;
      font-size: 0.75rem;
      letter-spacing: 0.075em;
      position: absolute;
      right: 1.5rem;
      text-transform: uppercase;
      top: 10px;
      border-radius: 0.3em;
      padding: 0.25rem 0.5rem;
    }
  }

  pre[class$="language-shell"] {
    &::before {
      content: "shell";
      background-color: #d9d7e0;
    }
  }

  pre[class$="language-jsx"] {
    &::before {
      content: "jsx";
      background-color: var(--js-background);
    }
  }

  pre[class$="language-vue"] {
    &::before {
      content: "vue";
      background-color: var(--vue-background);
    }
  }

  pre[class$="language-ruby"] {
    &::before {
      content: "ruby";
      background-color: var(--ruby-background);
      color: var(--code-light-text);
    }
  }

  pre[class$="language-graphql"] {
    &::before {
      content: "GraphQL";
      color: var(--code-light-text);
      background: var(--graphql-background);
    }
  }

  pre[class$="language-js"],
  pre[class$="language-javascript"] {
    &::before {
      content: "js";
      background-color: var(--js-background);
      color: var(--code-dark-text);
    }
  }

  pre[class$="language-json"] {
    &::before {
      content: "json";
      background-color: var(--js-background);
      color: var(--code-dark-text);
    }
  }

  pre[class$="language-mdx"] {
    &::before {
      content: "mdx";
      background-color: var(--md-background);
    }
  }

  pre[class$="language-md"] {
    &::before {
      content: "md";
      background-color: var(--md-background);
    }
  }

  pre[class$="language-css"] {
    &::before {
      content: "css";
      background-color: var(--css-background);
      color: var(--code-light-text);
    }
  }

  pre[class$="language-ts"] {
    &::before {
      content: "ts";
      background-color: var(--ts-background);
      color: var(--code-dark-text);
    }
  }

  pre[class$="language-tsx"] {
    &::before {
      content: "tsx";
      background-color: var(--ts-background);
      color: var(--code-dark-text);
    }
  }

  p,
  ul {
    > code {
      border-radius: 0.3em;
      background-color: rgb(30, 30, 30);
      color: #fff;
      padding: 0.15em 0.2em 0.05em;
      white-space: normal;

      .dark & {
        background-color: rgb(255, 255, 255);
        color: #000000;
      }
    }
  }

  .gatsby-code-title {
    color: var(--code-dark-text);
    padding: 0.3em 0.5em;
    width: max-content;
    margin: 1em 0px -1.6em 1em;
    border-radius: 0.3em;
    position: relative;
    z-index: ${(p) => p.theme.stack.values.codeblock};
    font-size: 0.8em;
    line-height: initial;
    background-color: var(--js-background);
    top: 15px;
  }
`;
