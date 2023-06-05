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
 * Utility class for keyboard events
 * @remarks This class is used to handle keyboard events in the application.
 * */
export default class KeyboardUtils {
  /**
   * @description Checks if the key code matches the event
   * @param key - The key to check
   * @param event - The event to check
   * @returns True if the key code matches the event, false otherwise
   * */
  private static doesKeyCodeMatchEvent<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent,
    event: KeyboardEventCodes
  ): boolean {
    const code = key.keyCode || key.which;
    return code === event;
  }

  /**
   * @description Checks if the key code is the enter key
   * @param key - The key to check
   * @returns True if the key code is the enter key, false otherwise
   * */
  public static isEnterPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Enter);
  }

  /**
   * @description Checks if the key code is the space key
   * @param key - The key to check
   * @returns True if the key code is the space key, false otherwise
   * */
  public static isSpacePressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Space);
  }

  /**
   * @description Checks if the key code is the tab key
   * @param key - The key to check
   * @returns True if the key code is the tab key, false otherwise
   * */
  public static isTabPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Tab);
  }

  /**
   * @description Checks if the key code is an action key (enter or space)
   * @param key - The key to check
   * @returns True if the key code is an action key, false otherwise
   * */
  public static isActionKeyPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return (
      KeyboardUtils.isSpacePressed(key) || KeyboardUtils.isEnterPressed(key)
    );
  }

  /**
   * @description Checks if the key code is the escape key
   * @param key - The key to check
   * @returns True if the key code is the escape key, false otherwise
   * */
  public static isEscapePressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Escape);
  }

  /**
   * @description Checks if the key code is the up key
   * @param key - The key to check
   * @returns True if the key code is the up key, false otherwise
   * */
  public static isUpPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Up);
  }

  /**
   * @description Checks if the key code is the down key
   * @param key - The key to check
   * @returns True if the key code is the down key, false otherwise
   * */
  public static isDownPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.Down);
  }

  /**
   * @description Checks if the key code is the ctrl or command key
   * @param key - The key to check
   * @returns True if the key code is the ctrl or command key, false otherwise
   * */
  public static isCtrlOrCommandPressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return key.ctrlKey || key.metaKey;
  }

  /**
   * @description Checks if the key code is the ctrl + s or command + s key
   * @param key - The key to check
   * @returns True if the key code is the ctrl + s or command + s key, false otherwise
   * */
  public static isCtrlSavePressed<T = HTMLElement>(
    key: React.KeyboardEvent<T> | KeyboardEvent
  ): boolean {
    return (
      KeyboardUtils.doesKeyCodeMatchEvent(key, KeyboardEventCodes.S) &&
      KeyboardUtils.isCtrlOrCommandPressed(key)
    );
  }
}
