import { css } from "styled-components";

export const navFocusedStyles = css`
  :focus,
  :focus-visible,
  :focus-within {
    outline: 1px solid ${(p) => p.theme.semanticColors.focusBorder};

    ::after {
      content: attr(data-content);
      position: relative;
      border: 0;
    }
  }
`;

export const systemFont = css`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
`;

export const navHoverStyles = css`
  :hover {
    color: ${(p) => p.theme.semanticColors.buttonTextHovered};
    background-color: ${(p) => p.theme.semanticColors.buttonBackgroundHovered};
  }
`;

export const navActiveLinkStyles = css`
  &.active {
    font-weight: 600;
    border: 0px;
    border-radius: 0px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 0px 8px;
    color: ${(p) => p.theme.semanticColors.buttonTextHovered};

    .contrast & {
      color: ${(p) => p.theme.semanticColors.bodyText};
      &:hover {
        color: ${(p) => p.theme.semanticColors.bodyText};
        background-color: inherit;
      }

      &:before {
        background-color: ${(p) =>
          p.theme.semanticColors.buttonBackgroundPressed};
      }
    }

    &:before {
      background-color: ${(p) => p.theme.semanticColors.inputBackgroundChecked};
    }

    &:hover::before {
      left: 0;
      right: 0;
    }
  }
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
