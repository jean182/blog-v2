import styled from "styled-components";

export const StyledBackdrop = styled.div`
  &.modal-backdrop {
    --backdrop-zindex: 1050;
    --backdrop-bg: #000;
    --backdrop-opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--backdrop-zindex);
    width: 100vw;
    height: 100vh;
    background-color: var(--backdrop-bg);
  }

  &.modal-backdrop.fade {
    opacity: 0;
  }

  &.modal-backdrop.show {
    opacity: var(--backdrop-opacity);
  }
`;
