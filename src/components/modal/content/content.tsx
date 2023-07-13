import { useFocusTrap, useOutsideClick } from "@shared/hooks";
import React from "react";
import type { ModalProps } from "../modal.interfaces";
import { labelledBy } from "../modal.utils";
import { StyledModalContent } from "./content.styled";

interface ModalContent extends Omit<ModalProps, "navRef" | "triggerRef"> {
  children: React.ReactNode;
  closeModal: () => void;
  onClickOutside: (event: Event) => void;
  open: boolean;
}

function Content({
  closeModal,
  children,
  id,
  footerContent,
  onClickOutside,
  open,
  title,
}: ModalContent) {
  const contentRef = useFocusTrap();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (open) {
      btnRef.current?.focus();
    }
  }, [open]);

  useOutsideClick(contentRef, onClickOutside);

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
        <div className="modal-body">{children}</div>
        {footerContent && <div className="modal-footer">{footerContent}</div>}
      </div>
    </StyledModalContent>
  );
}

export default Content;
