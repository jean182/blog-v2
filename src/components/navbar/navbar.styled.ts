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

  .container-fluid {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-right: auto;
    margin-left: auto;
    ${(p) => p.theme.breakpoints.down("md")} {
      padding: 0;
    }
  }

  & > .container-fluid {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
  }

  ${(p) => p.theme.breakpoints.up("md")} {
    flex-wrap: nowrap;
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

  .dropdown-toggle {
    display: block;
    white-space: nowrap;
    text-decoration: none;
    width: 100%;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
  }
`;
