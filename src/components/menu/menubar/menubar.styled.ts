import styled from "styled-components";

export const StyledMenuBar = styled.div`
  font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  padding: 0px 14px 0px 2px;
  height: 44px;
  list-style-type: none;

  .nav-group {
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: inherit;
    position: relative;
    display: flex;
    flex-grow: 1;
    flex-wrap: nowrap;
    align-items: stretch;

    &:last-of-type {
      flex-grow: 0;
    }
  }
`;
