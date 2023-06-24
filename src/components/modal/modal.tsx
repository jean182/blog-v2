import { useFocusTrap, useOutsideClick } from "@shared/hooks";
import { domUtils } from "@shared/utils";
import React from "react";
import { Backdrop } from "./backdrop";
import { ModalContent } from "./content";
import { Dialog } from "./dialog";
import { ModalImperativeHandle, ModalProps } from "./modal.interfaces";

const Modal = React.forwardRef<ModalImperativeHandle, ModalProps>(
  ({ id, children, title, footerContent }, ref) => {
    const [open, setOpen] = React.useState(false);
    const bodyRef = React.useRef(document.body);
    const dialogRef = useFocusTrap();
    useOutsideClick([dialogRef], () => handleClose);

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
    };

    return (
      <>
        <Dialog ref={dialogRef} id={id} open={open}>
          <ModalContent
            open={open}
            closeModal={handleClose}
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
