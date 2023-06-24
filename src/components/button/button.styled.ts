import styled, { css } from "styled-components";

const sharedButtonStyles = css`
  border: none;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 44px;
  border-radius: 2px;
  text-align: center;
  line-height: 1.1;
  transition: 220ms all ease-in-out;

  @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentcolor;
  }
`;

const primaryButtonStyles = css`
  background-color: ${(p) => p.theme.semanticColors.primaryButtonBackground};
  color: ${(p) => p.theme.semanticColors.primaryButtonText};
  border: 1px solid ${(p) => p.theme.semanticColors.primaryButtonBorder};

  &:hover, &:active {
    background-color: ${(p) => p.theme.semanticColors.primaryButtonBackgroundHovered};
  }

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 2px ${(p) => p.theme.semanticColors.primaryButtonBorder};
  }

  &:focus:after {
    content: "";
    position: absolute;
    inset: 2px;
    border: 1px solid transparent;
    outline: rgb(96, 94, 92) solid 1px;
    z-index: 1;
  }
`;

const buttonStyles = css`
  background-color: ${(p) => p.theme.semanticColors.buttonBackground};
  color: ${(p) => p.theme.semanticColors.buttonText};
  border: 1px solid ${(p) => p.theme.semanticColors.buttonBorder};

  &:hover, &:active {
    background-color: ${(p) => p.theme.semanticColors.buttonBackgroundHovered};
  }

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 2px ${(p) => p.theme.semanticColors.buttonBorder};
  }

  &:focus:after {
    content: "";
    position: absolute;
    inset: 2px;
    border: 1px solid transparent;
    outline: rgb(96, 94, 92) solid 1px;
    z-index: 1;
  }
`;

export const StyledButton = styled.button<{
  primary?: boolean;
}>`
  ${sharedButtonStyles}
  ${p => p.primary ? primaryButtonStyles : buttonStyles}
`;
