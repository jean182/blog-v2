import { useFocusTrap, useOutsideClick } from "@shared/hooks";
import { domUtils } from "@shared/utils";
import React from "react";
import { Backdrop } from "./backdrop";
import { ModalContent } from "./content";
import { Dialog } from "./dialog";
import { ModalImperativeHandle, ModalProps } from "./modal.interfaces";

const Modal = React.forwardRef<ModalImperativeHandle, ModalProps>(
  ({ id, children, title, footerContent, triggerRef }, ref) => {
    const [open, setOpen] = React.useState(false);
    const bodyRef = React.useRef(document.body);
    const dialogRef = useFocusTrap();
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => ({
      closeModal: () => handleClose(),
      openModal: () => handleOpen(),
    }));

    React.useEffect(() => {
      const classes = ["modal-open", "with-scrollbar", "without-scrollbar"];
      if (open) {
        const [modalOpen, withScrollbar, withoutScrollbar] = classes;
        const ifScrollable = domUtils.isScrollVisible(bodyRef.current);
        const scrollStyle = ifScrollable ? withScrollbar : withoutScrollbar;
        bodyRef.current?.classList.add(modalOpen, scrollStyle);
      } else {
        bodyRef.current?.classList.remove(...classes);
      }
    }, [open]);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      triggerRef?.current?.focus();
    };

    const onClickOutside = (event: Event) => {
      if (!open) {
        return;
      }
      event.preventDefault();
      handleClose();
    };

    useOutsideClick(contentRef, onClickOutside);

    return (
      <>
        <Dialog ref={dialogRef} handleClose={handleClose} id={id} open={open}>
          <ModalContent
            open={open}
            closeModal={handleClose}
            ref={contentRef}
            id={id}
            title={title}
            footerContent={footerContent}
          >
            {children}
          </ModalContent>
        </Dialog>
        {open && <Backdrop dialogRef={dialogRef} />}
      </>
    );
  }
);

export default Modal;
