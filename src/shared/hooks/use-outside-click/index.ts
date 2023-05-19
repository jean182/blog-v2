import React from "react";
import { CustomizedMouseEvent } from "@shared/interfaces";

/**
 * Hook that handles outside click event of the passed refs
 *
 * @param refs array of refs
 * @param handler a handler function to be called when clicked outside
 */
export default function useOutsideClick(
  refs: Array<React.RefObject<unknown>>,
  handler?: () => void | ((arg: unknown) => void)
) {
  React.useEffect(() => {
    const listener: (event: CustomizedMouseEvent) => void = (event) => {
      const elements = refs
        .map((ref) => ref?.current)
        .filter(Boolean) as Node[];
      if (
        elements.some(
          (element) => !element || element.contains(event.target as Node)
        )
      ) {
        // Do nothing if clicking ref's element or descendent elements
        return;
      }

      if (handler) {
        handler();
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}
