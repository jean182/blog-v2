import styled from "styled-components";

export const StyledDialog = styled.div`
  --bs-modal-zindex: 1055;
  --bs-modal-width: 500px;
  --bs-modal-padding: 1rem;
  --bs-modal-margin: 0.5rem;
  --bs-modal-color: ${(p) => p.theme.semanticColors.menuItemText};
  --bs-modal-bg: ${(p) => p.theme.semanticColors.menuBackground};
  --bs-modal-border-color: rgba(255, 255, 255, 0.15);
  --bs-modal-border-width: 1px;
  --bs-modal-border-radius: 0.5rem;
  --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --bs-modal-inner-border-radius: calc(0.5rem - 1px);
  --bs-modal-header-padding-x: 1rem;
  --bs-modal-header-padding-y: 1rem;
  --bs-modal-header-padding: 1rem 1rem;
  --bs-modal-header-border-color: #495057;
  --bs-modal-header-border-width: 1px;
  --bs-modal-title-line-height: 1.5;
  --bs-modal-footer-gap: 0.5rem;
  --bs-modal-footer-bg: ;
  --bs-modal-footer-border-color: #495057;
  --bs-modal-footer-border-width: 1px;

  &.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--bs-modal-zindex);
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
      --bs-modal-margin: 1.75rem;
      --bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }
  }
`;
