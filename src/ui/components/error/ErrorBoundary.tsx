import React, { Component } from 'react';

import Button from '../Button';
import ErrorMessage from './ErrorMessage';

type ErrorBoundaryState = {
  error: Error | null;
};

type ErrorBoundaryProps = {
  children: JSX.Element;
  currentError: Error | null;
  className?: string;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: props.currentError };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  public render(): JSX.Element {
    const { children } = this.props;
    const { error } = this.state;
    const { className } = this.props;
    const clear = () => {
      this.setState({ error: null });
    };
    return error ? (
      <div
        className={
          (className ? `${className} ` : ``) +
          'flex flex-col flex-wrap items-center justify-around gap-2 border border-solid border-gray-800 bg-white p-2'
        }
      >
        <ErrorMessage error={error} />
        <Button
          onClick={() => {
            clear();
          }}
        >
          Clear
        </Button>
      </div>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
