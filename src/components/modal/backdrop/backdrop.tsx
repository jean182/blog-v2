import React from "react";
import { createPortal } from "react-dom";
import { StyledBackdrop } from "./backdrop.styled";

type BackdropProps = {
  dialogRef: React.MutableRefObject<HTMLDivElement | null>;
};

function Backdrop({ dialogRef }: BackdropProps) {
  React.useEffect(() => {
    dialogRef.current?.classList.add("show");
    return () => {
      dialogRef.current?.classList.remove("show");
    };
  }, []);
  return createPortal(
    <StyledBackdrop className="modal-backdrop fade show" />,
    document.body
  );
}

export default Backdrop;
