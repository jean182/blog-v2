import * as React from "react";
import {
  ILanguageContext,
  ILanguageContextProviderProps,
  LanguageFileStructure,
  StringModule,
  StringStoreSchema,
} from "./language-context.interfaces";

/**
 * LanguageContext is a React Context that provides the current language
 * and the string modules.
 *  */
export const LanguageContext = React.createContext<ILanguageContext>({
  store: {
    currentLocale: "en",
    stringModules: new Map<String, StringModule>(),
  },
});

const setStrings = (
  acc: Map<string, string>,
  [key, entry]: [string, string]
) => {
  if (!key.startsWith("_")) {
    acc.set(key, entry);
  }
  return acc;
};

/**
 * AppLanguageProvider is a React Context Provider that provides the current language
 * and the string modules.
 * */
export function AppLanguageProvider({
  langKey,
  children,
}: ILanguageContextProviderProps) {
  const [store, setStore] = React.useState<StringStoreSchema>({
    currentLocale: "en",
    stringModules: new Map<String, StringModule>(),
  });

  const setMapInStore = ({
    name,
    strings,
  }: {
    name: string;
    strings: Map<string, string>;
  }) => {
    store.stringModules.set(name, { name, strings });
  };

  /**
   * Process json file and set them as string Modules.
   * @param stringsFile
   */
  function processStrings(stringsFile: LanguageFileStructure) {
    Object.entries(stringsFile).forEach(([key, entry]) => {
      const stringModule = {
        name: key,
        strings: Object.entries(entry).reduce(
          setStrings,
          new Map<string, string>()
        ),
      };
      setMapInStore(stringModule);
    });
  }

  React.useEffect(() => {
    setStore({
      currentLocale: langKey ?? "en",
      stringModules: store.stringModules,
    });
    const stringsFile: LanguageFileStructure =
      require(`../../shared/translations/locales.${
        langKey ?? "en"
      }.json`).strings;

    processStrings(stringsFile);
  }, [langKey]);

  return (
    <LanguageContext.Provider value={{ store }}>
      {children}
    </LanguageContext.Provider>
  );
}
