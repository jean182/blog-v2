import { ModalTransitionComponent } from "@restart/ui/esm/Modal";
import React from "react";
import { Transition, TransitionStatus } from "react-transition-group";

const FADE_DURATION = 200;

const fadeClassNames: Record<TransitionStatus, string> = {
  entering: "show",
  entered: "show",
  exited: "",
  exiting: "",
  unmounted: "",
};

const Fade: ModalTransitionComponent = ({ children, ...props }) => (
  <Transition {...props} timeout={FADE_DURATION}>
    {(status, innerProps) =>
      React.cloneElement(children, {
        ...innerProps,
        className: `${children.props.className} fade ${fadeClassNames[status]}`,
      })
    }
  </Transition>
);

export default Fade;
