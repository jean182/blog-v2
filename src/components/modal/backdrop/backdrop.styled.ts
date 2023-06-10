import styled from "styled-components";

export const StyledBackdrop = styled.div`
  &.fade {
    transition: opacity 0.15s linear;
  }

  &.modal-backdrop {
    --bs-backdrop-zindex: 1050;
    --bs-backdrop-bg: #000;
    --bs-backdrop-opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--bs-backdrop-zindex);
    width: 100vw;
    height: 100vh;
    background-color: var(--bs-backdrop-bg);
  }

  &.modal-backdrop.fade {
    opacity: 0;
  }

  &.modal-backdrop.show {
    opacity: var(--bs-backdrop-opacity);
  }
`;
