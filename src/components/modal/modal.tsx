import React from "react";
import { createPortal } from "react-dom";
import { Dialog } from "./dialog";
import { ModalContent } from "./content";
import { ModalImperativeHandle, ModalProps } from "./modal.interfaces";
import { Backdrop } from "./backdrop";

function scrollbarVisible(element: HTMLElement) {
  return element.scrollHeight > element.clientHeight;
}

const Modal = React.forwardRef<ModalImperativeHandle, ModalProps>(
  ({ id, children, title, footerContent }, ref) => {
    const [open, setOpen] = React.useState(false);
    const portalRef = React.useRef<HTMLDivElement | null>(null);
    React.useImperativeHandle(ref, () => ({
      closeModal: () => handleClose(),
      openModal: () => handleOpen(),
    }));

    React.useEffect(() => {
      const classes = ["modal-open", "with-scrollbar", "without-scrollbar"];
      portalRef.current = document.body as HTMLDivElement;
      if (open) {
        const ifScrollable = scrollbarVisible(portalRef.current);
        const scrollStyle = ifScrollable ? "with-scrollbar" : "without-scrollbar";
        portalRef.current?.classList.add("modal-open", scrollStyle);
      } else {
        portalRef.current?.classList.remove(...classes);
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
        <Dialog id={id} show={open}>
          <ModalContent
            open={open}
            closeModal={
              (ref as React.MutableRefObject<ModalImperativeHandle | null>)
                ?.current?.closeModal!
            }
            id={id}
            title={title}
            footerContent={footerContent}
          >
            {children}
          </ModalContent>
        </Dialog>
        {open &&
          portalRef.current &&
          createPortal(<Backdrop />, portalRef.current as HTMLElement)}
      </>
    );
  }
);

export default Modal;
