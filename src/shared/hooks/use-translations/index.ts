import { LanguageContext } from "@context";
import * as React from "react";

/**
 * Custom hook to get translated strings.
 *
 *
 * @param place - The page to look for strings.
 * @returns An object with the current locale and 't' callback to get the desired string by passing the key.
 *
 * @beta
 */
export default function useTranslations(place: string) {
  const { store } = React.useContext(LanguageContext);
  return {
    lang: store.currentLocale,
    t: (key: string) =>
      store?.stringModules?.get(place)?.strings.get(key),
  };
}
