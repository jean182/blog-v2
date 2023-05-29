import React from "react";
import { IErrorBoundaryProps, IErrorBoundaryState } from "./error.interfaces";

export default class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    // initialize the error state
    this.state = { hasError: false };
  }

  // if an error happened, set the state to true
  static getDerivedStateFromError(error: Error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { isHead = false } = this.props;
    // if error happened, return a fallback component
    if (hasError) {
      return isHead ? <>An Error has ocurred</> : <h1>An Error has ocurred</h1>;
    }

    return this.props.children;
  }
}
