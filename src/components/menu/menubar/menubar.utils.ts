export default class MoveUtils {
  public static first = () => 0;

  public static last = (items: Set<HTMLDivElement | null>) => items.size - 1;

  public static next = (
    items: Set<HTMLDivElement | null>,
    currentIndex: number
  ) => (currentIndex === items.size - 1 ? 0 : currentIndex + 1);

  public static previous = (
    items: Set<HTMLDivElement | null>,
    currentIndex: number
  ) => (currentIndex === 0 ? items.size - 1 : currentIndex - 1);

  public static match = (
    set: Set<HTMLDivElement | null>,
    currentIndex: number,
    key: string
  ) => {
    const items = Array.from(set);

    // Reorder the array, starting with the currentNode
    const reorderedItems = [
      ...items.slice(currentIndex),
      ...items.slice(0, currentIndex),
    ];

    // Find all nodes that begin with the pressed letter
    const matches = reorderedItems.filter((menuItem) => {
      const { textContent } = menuItem?.firstChild as HTMLDivElement;
      const firstLetter = textContent?.toLowerCase().charAt(0);
      console.log(firstLetter);
      console.log(key);
      return key === firstLetter;
    });

    // Exit early if there are no matches
    if (!matches.length) {
      return;
    }

    // If the focused item is a match, focus the next match.
    // Otherwise, focus the first match
    const currentNode = items[currentIndex];
    const nextMatch = matches.includes(currentNode) ? matches[1] : matches[0];
    const index = items.findIndex((item) => {
      return item === nextMatch;
    });

    return index;
  };
}
