import styled from "styled-components";

export const StyledTextArea = styled.div`
margin-top: 1rem;
margin-bottom: 1rem;
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  textarea {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${(p) => p.theme.semanticColors.inputText};
    background-color: ${(p) => p.theme.semanticColors.inputBackground};
    background-clip: padding-box;
    border: 1px solid ${(p) => p.theme.semanticColors.inputBorder};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    min-height: calc(1.5em + 0.75rem + calc(var(--border-width) * 2));

    :invalid ~ .invalid-feedback {
      display: block;
    }
  }

  textarea:not(:focus):invalid ~ .error-message {
    display: block; 
  }

  .invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: ${p => p.theme.semanticColors.errorText};
  }
`;
