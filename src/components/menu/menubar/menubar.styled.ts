import styled from "styled-components";

export const StyledMenuBar = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;

  &.collapse {
    display: none;
    ${(p) => p.theme.breakpoints.up("md")} {
      display: flex;
      flex-basis: auto;
    }
  }

  .nav-group {
    display: flex;

    margin-right: auto;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;

    ${(p) => p.theme.breakpoints.up("md")} {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;

      &:last-of-type {
        margin-left: auto;
        margin-right: 0;
      }
    }
  }
`;
