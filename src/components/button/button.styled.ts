import styled, { css } from "styled-components";

const sharedButtonStyles = css`
  --btn-padding-x: 0.75rem;
  --btn-padding-y: 0.375rem;
  --btn-font-family: "Noto Sans", sans-serif;
  --btn-font-size: 1rem;
  --btn-font-weight: 400;
  --btn-line-height: 1.5;

  --btn-color: ${(p) => p.theme.semanticColors.buttonText};
  --btn-bg: ${(p) => p.theme.semanticColors.buttonBackground};
  --btn-border-color: ${(p) => p.theme.semanticColors.buttonBorder};
  --btn-hover-color: ${(p) => p.theme.semanticColors.buttonTextHovered};
  --btn-hover-bg: ${(p) => p.theme.semanticColors.buttonBackgroundHovered};
  --btn-hover-border-color: ${(p) => p.theme.semanticColors.buttonBorder};
  --btn-focus-shadow-rgb: 80, 68, 155;
  --btn-active-color: #fff;
  --btn-active-bg: #0a58ca;
  --btn-active-border-color: #0a53be;
  --btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --btn-disabled-color: #fff;
  --btn-disabled-bg: #0d6efd;
  --btn-disabled-border-color: #0d6efd;
  --btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--btn-focus-shadow-rgb), 0.5);

  display: inline-block;
  padding: var(--btn-padding-y) var(--btn-padding-x);
  font-family: var(--btn-font-family);
  font-size: var(--btn-font-size);
  font-weight: var(--btn-font-weight);
  line-height: var(--btn-line-height);
  color: var(--btn-color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 1px solid var(--btn-border-color);
  border-radius: 0.375rem;
  background-color: var(--btn-bg);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :focus:not(:focus-visible) {
    outline: 0;
  }

  :active {
    color: var(--btn-active-color);
    background-color: var(--btn-active-bg);
    border-color: var(--btn-active-border-color);
  }

  :hover {
    color: var(--btn-hover-color);
    background-color: var(--btn-hover-bg);
    border-color: var(--btn-hover-border-color);
  }

  :focus-visible {
    color: var(--btn-hover-color);
    background-color: var(--btn-hover-bg);
    border-color: var(--btn-hover-border-color);
    outline: 0;
    box-shadow: var(--btn-focus-box-shadow);
  }

  .contrast & {
    --btn-focus-shadow-rgb: 255, 255, 1;
  }
`;

const primaryButtonStyles = css`
  --btn-color: ${(p) => p.theme.semanticColors.primaryButtonText};
  --btn-bg: ${(p) => p.theme.semanticColors.primaryButtonBackground};
  --btn-border-color: ${(p) => p.theme.semanticColors.primaryButtonBorder};
  --btn-hover-color: ${(p) => p.theme.semanticColors.primaryButtonTextHovered};
  --btn-hover-bg: ${(p) =>
    p.theme.semanticColors.primaryButtonBackgroundHovered};
  --btn-hover-border-color: ${(p) =>
    p.theme.semanticColors.primaryButtonBorder};
  --btn-focus-shadow-rgb: 80, 68, 155;
  --btn-active-color: #fff;
  --btn-active-bg: #0a58ca;
  --btn-active-border-color: #0a53be;
  --btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --btn-disabled-color: #fff;
  --btn-disabled-bg: #0d6efd;
  --btn-disabled-border-color: #0d6efd;

  .dark & {
    --btn-focus-shadow-rgb: 245, 182, 214;
  }
`;

export const StyledButton = styled.button<{
  primary?: boolean;
}>`
  ${sharedButtonStyles}
  ${(p) => p.primary && primaryButtonStyles}
`;
