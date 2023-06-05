import { LanguageContext } from "@context";
import * as React from "react";

type Translation = {
  lang: string;
  t: (key: string) => string | undefined;
};

/**
 * Hook that returns the current language and a function to translate strings
 * @param place - The place where the strings are located
 * @returns - An object containing the current language and a function to translate strings
 * */
export default function useTranslations(place: string): Translation {
  const { store } = React.useContext(LanguageContext);
  return {
    lang: store.currentLocale,
    t: (key: string) => store?.stringModules?.get(place)?.strings.get(key),
  };
}
