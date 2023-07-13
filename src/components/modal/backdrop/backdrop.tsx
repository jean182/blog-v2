import React from "react";
import { StyledBackdrop } from "./backdrop.styled";

type BackdropProps = {
  onClick: (event: React.SyntheticEvent) => void;
};

function Backdrop({ onClick }: BackdropProps) {
  return (
    <StyledBackdrop onClick={onClick} className="modal-backdrop fade show" />
  );
}

export default Backdrop;
