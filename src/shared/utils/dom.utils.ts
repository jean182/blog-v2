/**
 * Check if the scroll is visible in the viewport.
 * @param element
 * @returns boolean whether the element has the scrollbar visible or not.
 */
export function isScrollVisible(element: HTMLElement) {
  return element.scrollHeight > element.clientHeight;
}

/**
 * Function to check if an element is not in a disabled state.
 * @param el
 * @returns boolean whether the element is disabled or not.
 * */
export const notDisabled = (el: Element) => !el.hasAttribute("disabled");

/**
 * Checks whether the event target is the element or one of its children.
 * @param target
 * @returns boolean whether the event target is the element or one of its children.
 * */
export const hasEventTarget = (target: Node | null) => (element: Node) =>
  !element || element.contains(target as Node);
