import styled from "styled-components";

export const StyledGoToPost = styled.nav`
  padding: 0.5rem 0;

  .previous {
    grid-area: prev;
    justify-content: start;
  }

  .next {
    grid-area: next;
    justify-content: end;
  }

  ul {
    list-style-type: none;
    display: grid;
    grid-template-areas:
      "prev next"
      "prev next";
    margin-right: 0;
    margin-left: 0;
    padding: 0%;
    margin-top: auto;
  }

  a {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
    display: inherit;
    flex-shrink: 0;
    align-items: center;
    margin-right: auto;
  }

  li:has(.next),
  li:not(.previous) {
    margin-left: auto;
  }

  li:has(.previous),
  li:not(.next) {
    margin-right: auto;
  }
`;
