import { Language } from "prism-react-renderer";
import styled from "styled-components";

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
  width: 100%;
`;

export const Filename = styled.div`
  padding: 0.3em 0.5em;
  width: max-content;
  margin: 1em 0px -1.6em 1em;
  border-radius: 0.3em;
  position: relative;
  z-index: 1;
  font-size: 0.8em;
  line-height: initial;
  top: 15px;

  &.filename-shell {
    background-color: #d9d7e0;
  }

  &.filename-jsx {
    background-color: var(--js-background);
  }

  &.filename-vue {
    background-color: var(--vue-background);
  }

  &.filename-ruby {
    background-color: var(--ruby-background);
    color: var(--code-light-text);
  }

  &.filename-graphql {
    color: var(--code-light-text);
    background: var(--graphql-background);
  }

  &.filename-json,
  &.filename-js,
  &.filename-javascript,
  &.filename-jsx {
    background-color: var(--js-background);
    color: var(--code-dark-text);
  }

  &.filename-mdx,
  &.filename-md {
    background-color: var(--md-background);
  }

  &.filename-css {
    background-color: var(--css-background);
    color: var(--code-light-text);
  }

  &.filename-ts,
  &.filename-tsx {
    background-color: var(--ts-background);
    color: var(--code-dark-text);
  }
`;
