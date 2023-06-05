import React from "react";

/**
 * Hook that returns the previous value of the passed value
 * @param value - Value to track
 * @returns {T} previous - The previous value of the passed value
 * */
export default function usePrevious<T>(value: T): T {
  const ref: any = React.useRef<T>();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
