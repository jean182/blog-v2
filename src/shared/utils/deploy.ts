/**
 * @description Check if the code is running on the browser or not
 * @returns True if the code is running on the browser, false otherwise
 * */
export const isBrowser = () => typeof window !== "undefined";
