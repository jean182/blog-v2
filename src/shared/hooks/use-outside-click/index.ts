import React from "react";
import { CustomizedMouseEvent } from "@shared/interfaces";
import { domUtils } from "@shared/utils";

/**
 * Hook that runs a callback when a click occurs outside of the passed references
 * @param refs - Refs to the elements that should be ignored
 * @param handler - Callback to run when a click occurs outside of the passed ref
 * */
export default function useOutsideClick(
  refs: Array<React.RefObject<unknown>>,
  handler?: () => void | ((arg: unknown) => void)
) {
  React.useEffect(() => {
    const listener: (event: CustomizedMouseEvent) => void = (event) => {
      const elements = refs
        .map((ref) => ref?.current)
        .filter(Boolean) as Node[];
      const isTargetCallback = domUtils.hasEventTarget(event.target as Node);
      if (elements.some(isTargetCallback)) {
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
