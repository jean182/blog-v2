import { animated, useSpring } from "@react-spring/web";
import * as React from "react";
import { StyledHamburger } from "./hamburger.styled";
import { IHamburgerProps } from "./hamburger.interfaces";

const Hamburger = React.forwardRef<
  HTMLButtonElement,
  IHamburgerProps
>(({ onClick, open, ...rest }, ref) => {

  const first = useSpring({
    transform: open
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)",
  });
  const second = useSpring({
    transform: open
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)",
  });
  const third = useSpring({
    transform: open
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)",
  });

  return (
    <button {...rest} ref={ref} onClick={onClick}>
      <div style={{ background: "inherit", padding: "20px" }}>
        <StyledHamburger
          width="40"
          height="32"
          viewBox="0 0 44 44"
          xmlns="http://www.w3.org/2000/svg"
        >
          <animated.rect width="40" height="4" rx="2" style={first} />
          <animated.rect width="40" height="4" rx="2" style={second} />
          <animated.rect width="40" height="4" rx="2" style={third} />
        </StyledHamburger>
      </div>
    </button>
  );
});

export default Hamburger;
