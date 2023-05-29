import * as React from "react";
import {
  ILanguageContext,
  ILanguageContextProviderProps,
  LanguageFileStructure,
  StringModule,
  StringStoreSchema,
} from "./language-context.interfaces";

export const LanguageContext = React.createContext<ILanguageContext>({
  store: {
    currentLocale: "en",
    registeredStringModules: new Map<String, StringModule>(),
  },
});

export function AppLanguageProvider({
  langKey,
  children,
}: ILanguageContextProviderProps) {
  const [store, setStore] = React.useState<StringStoreSchema>({
    currentLocale: "en",
    registeredStringModules: new Map<String, StringModule>(),
  });
  const [translations, setTranslations] = React.useState<{
    name: string;
    strings: Map<string, string>;
  }>();

  const setMapInStore = ({
    name,
    strings,
  }: {
    name: string;
    strings: Map<string, string>;
  }) => {
    store.registeredStringModules.set(name, { name, strings });
  };

  /**
   * Process Strings and set them as string Modules.
   * @param stringsFile
   */
  function processStrings(stringsFile: LanguageFileStructure) {
    for (const name of Object.keys(stringsFile)) {
      const stringModule = {
        name,
        strings: new Map<string, string>(),
      };

      const jsonStrings = stringsFile[name];
      for (const key of Object.keys(jsonStrings)) {
        if (!key.startsWith("_")) {
          stringModule.strings.set(key, jsonStrings[key]);
        }
      }

      setMapInStore(stringModule);
    }
  }

  React.useEffect(() => {
    setStore({
      currentLocale: langKey ?? "en",
      registeredStringModules: store.registeredStringModules,
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
