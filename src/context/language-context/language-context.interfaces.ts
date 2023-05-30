export type LanguageFileStructure = {[key: string]: { [key: string]: string; }}
export interface StringModule {
  name: string;
  strings: Map<string, string>;
  locale?: string;
}

export interface StringStoreSchema {
  currentLocale: string;
  stringModules: Map<String, StringModule>;
}

export interface ILanguageContextProviderProps {
  children: React.ReactNode;
  langKey?: string;
}

export interface ILanguageContext {
  store: StringStoreSchema;
}
