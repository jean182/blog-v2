import { Fade } from "@components/fade";
import BaseModal from "@restart/ui/Modal";
import { isScrollVisible } from "@shared/utils/dom.utils";
import React from "react";
import { Backdrop } from "./backdrop";
import { ModalContent } from "./content";
import type { ModalImperativeHandle, ModalProps } from "./modal.interfaces";

const Modal = React.forwardRef<ModalImperativeHandle, ModalProps>(
  ({ id, children, navRef, title, footerContent, triggerRef }, ref) => {
    const [open, setOpen] = React.useState(false);
    const bodyRef = React.useRef(document.body);

    React.useImperativeHandle(ref, () => ({
      closeModal: () => handleClose(),
      openModal: () => handleOpen(),
    }));

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      triggerRef?.current?.focus();
    };

    const onClickOutside = (event: Event) => {
      event.preventDefault();
      handleClose();
    };

    return (
      <BaseModal
        onEscapeKeyDown={handleClose}
        className="modal"
        style={{ display: "block" }}

        renderBackdrop={(props) => <Backdrop {...props} />}
        id={id}
        show={open}
        transition={Fade}
        backdropTransition={Fade}
        onEnter={() => {
          navRef?.current?.setAttribute(
            "style",
            `padding-right: ${isScrollVisible(bodyRef.current) ? "15px" : "0"}`
          );
        }}
        onExited={() => {
          navRef?.current?.removeAttribute("style");
        }}
        enforceFocus={false}
      >
        <ModalContent
          open={open}
          closeModal={handleClose}
          id={id}
          onClickOutside={onClickOutside}
          title={title}
          footerContent={footerContent}
        >
          {children}
        </ModalContent>
      </BaseModal>
    );
  }
);

export default Modal;
