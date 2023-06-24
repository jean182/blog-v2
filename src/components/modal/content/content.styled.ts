import styled from "styled-components";

export const StyledModalContent = styled.div`
  &.modal-dialog {
    position: relative;
    width: auto;
    margin: var(--bs-modal-margin);
    pointer-events: none;

    ${(p) => p.theme.breakpoints.up("md")} {
      max-width: var(--bs-modal-width);
      margin-right: auto;
      margin-left: auto;
    }
  }

  &.modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - var(--bs-modal-margin) * 2);
  }

  .modal & {
    .modal-content {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      color: var(--bs-modal-color);
      pointer-events: auto;
      background-color: var(--bs-modal-bg);
      background-clip: padding-box;
      border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
      border-radius: var(--bs-modal-border-radius);
      outline: 0;
    }
  }

  .modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: var(--bs-modal-header-padding);
    border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
    border-top-left-radius: var(--bs-modal-inner-border-radius);
    border-top-right-radius: var(--bs-modal-inner-border-radius);

    .modal-title {
      margin: 0;
      font-size: 16px;
      line-height: var(--bs-modal-title-line-height);
    }

    [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
      cursor: pointer;
    }

    .btn-close {
      --bs-btn-close-color: ${(p) => p.theme.semanticColors.bodyText};
      --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e");
      --bs-btn-close-opacity: 0.5;
      --bs-btn-close-hover-opacity: 0.75;
      --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
      --bs-btn-close-focus-opacity: 1;
      --bs-btn-close-disabled-opacity: 0.25;
      --bs-btn-close-white-filter: invert(1) grayscale(100%) brightness(200%);
      .dark & {
        filter: var(--bs-btn-close-white-filter);
      }
      box-sizing: content-box;
      width: 1em;
      height: 1em;
      color: ${p => p.theme.semanticColors.bodyText};
      background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat;
      border: 0;
      border-radius: 0.375rem;
      opacity: var(--bs-btn-close-opacity);
      padding: calc(var(--bs-modal-header-padding-y) * .5) calc(var(--bs-modal-header-padding-x) * .5);
      margin: calc(-.5 * var(--bs-modal-header-padding-y)) calc(-.5 * var(--bs-modal-header-padding-x)) calc(-.5 * var(--bs-modal-header-padding-y)) auto;
      :focus:not(:focus-visible) {
        outline: 0;
      }
      :focus {
        outline: 0;
        box-shadow: var(--bs-btn-close-focus-shadow);
        opacity: var(--bs-btn-close-focus-opacity);
      }
}
}
  }

  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: var(--bs-modal-padding);
  }

  .modal-footer {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);
    background-color: var(--bs-modal-footer-bg);
    border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);
    border-bottom-right-radius: var(--bs-modal-inner-border-radius);
    border-bottom-left-radius: var(--bs-modal-inner-border-radius);
  }
`;
