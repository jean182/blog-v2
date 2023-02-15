import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import * as React from "react";
import { ICodeProps, PreCodeProps } from "./code.interfaces";
import { Filename, Line, LineContent, LineNo, Pre } from "./code.styled";
import { calculateLinesToHighlight, preToCodeBlock } from "./code.utils";

const Code = (props: PreCodeProps) => {
  const { codeString, filename, language, metastring } = props;
  console.log(codeString);
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  return (
    <>
      {filename && (
        <Filename aria-label={filename} className={`filename-${language}`}>
          {filename}
        </Filename>
      )}
      <Highlight
        {...defaultProps}
        {...props}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="gatsby-highlight" data-language={language}>
            <Pre className={className} style={style}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });

                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`;
                }

                return (
                  <Line {...lineProps}>
                    <LineNo className="line-number-style">{i + 1}</LineNo>
                    <LineContent>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </LineContent>
                  </Line>
                );
              })}
            </Pre>
          </div>
        )}
      </Highlight>
    </>
  );
};

const pre = (preProps: ICodeProps) => {
  const props = preToCodeBlock(preProps);

  if (props) {
    return <Code {...props} />;
  } else {
    return (
      <pre
        {...(preProps as React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLPreElement>,
          HTMLPreElement
        >)}
      />
    );
  }
};

export default pre;
