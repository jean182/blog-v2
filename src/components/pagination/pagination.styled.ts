import { visuallyHidden } from "@assets/styles";
import styled from "styled-components";

export const StyledPagination = styled.nav`
  display: inline-flex;
  border-radius: 0.375rem;
  position: relative;
  display: inline-flex;
  align-items: center;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: inherit;
  }

  button {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background-color: ${(p) => p.theme.semanticColors.buttonBackground};
    color: ${(p) => p.theme.semanticColors.buttonText};
    border: solid 1px #495057;
    cursor: pointer;

    :focus {
      z-index: 3;
      color: ${(p) => p.theme.semanticColors.buttonTextHovered};
      background-color: ${(p) =>
        p.theme.semanticColors.buttonBackgroundHovered};
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(106, 90, 205, 0.5);
      .dark & {
        box-shadow: 0 0 0 0.25rem rgba(241, 158, 200, 0.5);
      }
    }

    &.previous {
      border-top-left-radius: 0.375rem;
      border-bottom-left-radius: 0.375rem;
    }

    &.next {
      border-top-right-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;
    }

    :hover {
      :not(:disabled) {
        &[aria-current="true"] {
          background-color: ${(p) =>
            p.theme.semanticColors.primaryButtonBackgroundHovered};
        }
        background-color: ${(p) =>
          p.theme.semanticColors.buttonBackgroundHovered};
      }
    }

    &[aria-current="true"] {
      background-color: ${(p) =>
        p.theme.semanticColors.primaryButtonBackground};
      color: ${(p) => p.theme.semanticColors.primaryButtonText};
    }

    :disabled {
      cursor: default;
      color: ${(p) => p.theme.semanticColors.buttonTextDisabled};
    }
  }

  .sr-only {
    ${visuallyHidden}
  }

  svg {
    display: block;
    vertical-align: middle;
    height: 1.25rem;
    width: 1rem;
  }
`;
