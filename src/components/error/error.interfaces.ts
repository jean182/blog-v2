export interface IErrorBoundaryProps {
  children: React.ReactNode;
  isHead?: boolean;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}
