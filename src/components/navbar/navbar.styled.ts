import styled from "styled-components";

export const StyledNavbar = styled.nav`
  font-family: "Roboto Condensed", sans-serif;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: ${(p) => p.theme.semanticColors.bodyBackground};

  &.fixed {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  ${(p) => p.theme.breakpoints.up("md")} {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
  }

  ${(p) => p.theme.breakpoints.down("md")} {
    .collapse.show {
      height: auto;
      display: flex;

      &,
      .nav-group {
        flex-direction: column;
      }
    }
  }

  ${(p) => p.theme.breakpoints.down("md")} {
    margin-right: auto;
  }

  .toggle {
    border: none;
    background: none;
    cursor: pointer;
    margin: 0.5rem 0;
    margin-left: auto;
    padding: 0;
    ${(p) => p.theme.breakpoints.up("md")} {
      display: none;
    }
  }
`;
