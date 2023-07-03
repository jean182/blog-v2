import { LanguageContext } from "@context";
import { StringModule } from "@context/language-context/language-context.interfaces";
import * as React from "react";

type TranslationArgs = (string | number)[];

type PrepareTranslationCallback = (
  place: StringModule | undefined
) => TranslationCallback;

type TranslationCallback = (
  key: string,
  args?: TranslationArgs
) => string | undefined;

type Translation = {
  lang: string;
  t: TranslationCallback;
};

type TranslationOrTranslations<T> = T extends string[]
  ? Translation[]
  : Translation;

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
export default function useTranslations<T extends string | string[]>(
  args: T
): TranslationOrTranslations<T> {
  const { store } = React.useContext(LanguageContext);
  const lang = store.currentLocale;

  const getModule = (place: string): StringModule | undefined =>
    store?.stringModules?.get(place);

  const toTranslationFn: PrepareTranslationCallback =
    (module) => (key, args) => {
      const rawString = module?.strings.get(key) ?? "";

      return args
        ? parseArgs(args).reduce(toTranslationReduceFn, rawString)
        : rawString;
    };

  if (Array.isArray(args)) {
    const modules = args.map((place) => getModule(place));
    return modules.reduce<Translation[]>((acc, module) => {
      const t = toTranslationFn(module);
      return [...acc, { lang, t }];
    }, []) as TranslationOrTranslations<T>;
  }
  const module = getModule(args as string);
  const t: TranslationCallback = toTranslationFn(module);
  return { lang, t } as TranslationOrTranslations<T>;
}
