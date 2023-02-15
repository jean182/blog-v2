export enum KeyboardEventCodes {
  "Tab" = 9,
  "Enter" = 13,
  "Escape" = 27,
  "Up" = 38,
  "Down" = 40,
  "Space" = 32,
  "S" = 83,
}

/**
 * Utilities for Keyboard events
 */
export default class KeyboardUtils {
  private static doesKeyCodeMatchEvent<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent,
    event: KeyboardEventCodes
  ): boolean {
    const code = key.keyCode || key.which;
    return code === event;
  }

  /**
   * Return true if the given key is the enter key.
   * @param key
   */
  public static isEnterPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Enter);
  }

  /**
   * Return true if the given key is the space key.
   * @param key
   */
  public static isSpacePressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Space);
  }

  /**
   * Return true if the given key is the tab key.
   * @param key
   */
  public static isTabPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Tab);
  }

  /**
   * Returns true if an action key (space or enter) is pressed
   * @param key
   */
  public static isActionKeyPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return (
      KeyboardUtils.isSpacePressed(key) || KeyboardUtils.isEnterPressed(key)
    );
  }
  /**
   * Return true if the given key is the esacpe key.
   * @param key
   */
  public static isEscapePressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Escape);
  }

  /**
   * Return true if the given key is the up key.
   * @param key
   */
  public static isUpPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Up);
  }

  /**
   * Return true if the given key is the down key.
   * @param key
   */
  public static isDownPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Down);
  }

  public static isCtrlOrCommandPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return key.ctrlKey || key.metaKey;
  }

  /**
   * Return true if ctrl + s or cmd + s is pressed
   * @param key
   */
  public static isCtrlSavePressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return (
      KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.S) &&
      KeyboardUtils.isCtrlOrCommandPressed(key)
    );
  }
}
