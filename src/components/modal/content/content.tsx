import React from "react";
import { StyledModalContent } from "./content.styled";
import { useFocusTrap, useOutsideClick } from "@shared/hooks";
import KeyboardUtils from "@shared/keyboard";
import { ModalProps } from "../modal.interfaces";
import { labelledBy } from "../modal.utils";

interface BackdropProps extends ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
  open: boolean;
}

export default function ModalContent({
  closeModal,
  children,
  id,
  footerContent,
  open,
  title,
}: BackdropProps) {
  const contentRef = useFocusTrap();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (KeyboardUtils.isEscapePressed(event)) {
      closeModal();
    }
  };
  useOutsideClick([contentRef], closeModal);

  React.useEffect(() => {
    if (open) btnRef.current?.focus();
  }, [open]);

  return (
    <StyledModalContent
      ref={contentRef}
      className="modal-dialog modal-dialog-centered"
      onKeyDown={onKeyDown}
    >
      <div className="modal-content">
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
        {footerContent && (
          <div className="modal-footer">{footerContent}</div>
        )}
      </div>
    </StyledModalContent>
  );
}
