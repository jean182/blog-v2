import { LanguageContext } from "@context";
import { translationArgsRegex } from "@shared/formatting";
import * as React from "react";

type TranslationArgs = (string | number)[];

type TranslationCallback = (
  key: string,
  args?: TranslationArgs
) => string | undefined;

type Translation = {
  lang: string;
  t: TranslationCallback;
};

/**
 * Creates a new string array using the array provided.
 * @param args - The array you want to convert.
 * @returns The new generated string array.
 */
const parseArgs = (args: TranslationArgs) => args.map(String);

/**
 * Reduce callback to create a string replacing the raw string substrings with the arguments provided.
 * @param acc - The string to replace the arguments in
 * @param arg - The argument to replace
 * @returns The string with the arguments replaced
 * */
const toTranslationReduceFn = (acc: string, arg: string, index: number) =>
  acc.replace(`{${index}}`, arg);

/**
 * Hook that returns the current language and a function to translate strings
 * @param place - The place where the strings are located
 * @returns - An object containing the current language and a function to translate strings
 * */
export default function useTranslations(place: string): Translation {
  const { store } = React.useContext(LanguageContext);

  const lang = store.currentLocale;
  const t: TranslationCallback = (key, args) => {
    const rawString = store?.stringModules?.get(place)?.strings.get(key) ?? "";

    return args
      ? parseArgs(args).reduce(toTranslationReduceFn, rawString)
      : rawString;
  };
  return { lang, t };
}
