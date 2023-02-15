import { Language } from "prism-react-renderer";

export interface ICodeChildrenProps {
  children: string;
  className: string;
}

export interface ICodeProps {
  children?: React.ReactNode;
}

export interface ICodeUtils {
  children?: {
    type: string;
    props: ICodeChildrenProps;
  };
}

export type ICodeComp = React.ReactElement<ICodeChildrenProps, "code">;

export interface PreCodeProps {
  codeString: string;
  className: string;
  language: Language;
  metastring: string;
  filename?: string;
}
