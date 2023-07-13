import { css } from "styled-components";

export const modalStyles = css`
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--backdrop-zindex);
    width: 100vw;
    height: 100vh;
    background-color: var(--backdrop-bg);
  }

  .modal-backdrop.fade {
    opacity: 0;
  }

  .modal-backdrop.show {
    opacity: 0.5;
  }

  .modal {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    z-index: var(--modal-zindex);
    display: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;

    &.fade .modal-dialog {
      transition: transform 0.3s ease-out;
      transform: translate(0, -50px);
    }

    &.show .modal-dialog {
      transform: none;
    }

    ${(p) => p.theme.breakpoints.up("md")} {
      --modal-margin: 1.75rem;
      --modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }
  }

  .modal-dialog {
    position: relative;
    width: auto;
    margin: var(--modal-margin);
    pointer-events: none;

    ${(p) => p.theme.breakpoints.up("md")} {
      max-width: var(--modal-width);
      margin-right: auto;
      margin-left: auto;
    }
  }
`;
