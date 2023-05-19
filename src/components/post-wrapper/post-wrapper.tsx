import React from "react";
import { useTrail, animated, config } from "@react-spring/web";
import { IPostWrapperProps } from "./post-wrapper.interfaces";

const Wrapper = ({ children }: IPostWrapperProps) => {
  const childrenArray = React.Children.toArray(children);
  const trail = useTrail(childrenArray.length, {
    xy: [0, 0],
    opacity: 1,
    from: { xy: [30, 50], opacity: 0 },
    config: config.gentle,
    delay: 200,
  });

  return (
    <section>
      {trail.map(({ xy, opacity }, index) => (
        <animated.div
          key={index}
          style={{
            opacity,
            transform: xy.to((x, y) => `translate3d(${x}px,${y}px,0)`),
          }}
        >
          {childrenArray[index]}
        </animated.div>
      ))}
    </section>
  );
};

export default Wrapper;
