import React from "react";
import { StyledModalContent } from "./content.styled";
import { ModalProps } from "../modal.interfaces";
import { labelledBy } from "../modal.utils";

interface ModalContent extends Omit<ModalProps, "triggerRef"> {
  children: React.ReactNode;
  closeModal: () => void;
  open: boolean;
}


const Dialog = React.forwardRef<HTMLDivElement, ModalContent>(
  ({
    closeModal,
    children,
    id,
    footerContent,
    open,
    title,
  }, contentRef) => {
    const btnRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
      if (open) {
        btnRef.current?.focus();
      }
    }, [open]);
  
    return (
      <StyledModalContent className="modal-dialog modal-dialog-centered">
        <div className="modal-content" ref={contentRef}>
          <div className="modal-header">
            <h4 className="modal-title" id={labelledBy(id)}>
              {title}
            </h4>
            <button
              type="button"
              ref={btnRef}
              onClick={closeModal}
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{open && children}</div>
          {footerContent && <div className="modal-footer">{footerContent}</div>}
        </div>
      </StyledModalContent>
    );
  });
export default Dialog;
