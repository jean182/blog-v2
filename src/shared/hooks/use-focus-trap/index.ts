import KeyboardUtils from "@shared/keyboard";
import React from "react";

const FOCUSABLE_ELEMENTS =
  'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

export default function useFocusTrap() {
  const ref = React.useRef<HTMLDivElement>(null);

  // Focus trap function
  function handleFocus(event: KeyboardEvent) {
    const els = Array.from(
      ref.current?.querySelectorAll(FOCUSABLE_ELEMENTS) ?? []
    );
    // Array of all the focusable elements in the array.
    const focusableEls = els.filter(
      (el) => !el.hasAttribute("disabled")
    ) as HTMLElement[];
    // First focusable element
    const firstFocusableEl = focusableEls[0];
    // Last focusable element
    const lastFocusableEl = focusableEls[focusableEls.length - 1];

    // Logic to focus only the current modal focusable items.
    if (!KeyboardUtils.isTabPressed(event)) {
      return;
    }

    if (event.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        event.preventDefault();
      }
    } else if (document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus();
      event.preventDefault();
    }
  }

  React.useEffect(() => {
    // Add event listener to focus trap
    const currentRef = ref.current!;
    currentRef.addEventListener("keydown", handleFocus);

    return () => {
      // rRemove event listener to focus trap
      currentRef.removeEventListener("keydown", handleFocus);
    };
  }, []);

  return ref;
}
