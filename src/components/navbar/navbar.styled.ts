import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: ${(p) => p.theme.semanticColors.bodyBackground};

  &.fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: ${(p) => p.theme.stack.values.nav};
  }

  ${(p) => p.theme.breakpoints.up("md")} {
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 0.5rem 1rem;
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

  .dropdown-toggle {
    display: block;
    white-space: nowrap;
    text-decoration: none;
    width: 100%;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
  }
`;
