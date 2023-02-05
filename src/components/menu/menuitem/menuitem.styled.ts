import styled, { css } from "styled-components";

const focusedStyles = css`
  :focus {
    outline: 0;
    ::after {
      content: "";
      position: absolute;
      inset: 3px;
      border: 1px solid transparent;
      outline: rgb(96, 94, 92) solid 1px;
      z-index: 1;
    }

    &.active {
      outline: rgb(96, 94, 92) solid 1px;
    }
  }
`;

const hoverStyles = css`
  :hover {
    color: rgb(32, 31, 30);
    background-color: rgb(243, 242, 241);
  }
`;

const activeStyles = css`
  &.active {
    font-weight: 600;
    border: 0px;
    border-radius: 0px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 0px 8px;
    color: rgb(50, 49, 48);

    &:before {
      background-color: rgb(0, 120, 212);
      bottom: 0px;
      content: "";
      height: 2px;
      left: 8px;
      position: absolute;
      right: 8px;
      transition: left 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s,
        right 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s;
    }

    &:after {
      color: transparent;
      content: attr(data-content);
      display: block;
      font-weight: 700;
      height: 1px;
      overflow: hidden;
      visibility: hidden;
    }
  }
`;

const sharedAnchorStyles = css`
  a {
    ${focusedStyles}

    ${activeStyles}

    ${hoverStyles}

    &:before {
      background-color: transparent;
      bottom: 0px;
      content: "";
      height: 2px;
      left: 8px;
      position: absolute;
      right: 8px;
      transition: left 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s,
        right 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s;
    }

    outline: transparent;
    position: relative;
    font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
      -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    font-weight: 400;
    border: 0px;
    border-radius: 0px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    padding: 0px 8px;
    text-decoration: none;
    text-align: center;
    height: 44px;
    color: rgb(50, 49, 48);
    background-color: transparent;
    line-height: 44px;
    margin-right: 8px;
    user-select: none;

    span {
      display: flex;
      height: 100%;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const StyledMenuItem = styled.div`
  display: inherit;
  flex-shrink: 0;

  ${sharedAnchorStyles}
`;
