import React, { Component } from 'react';

import { getErrorMessage } from '../../support/error';
import { HandleError } from '../context/errorContext';
import Button from './Button';
import ErrorMessage from './ErrorMessage';

type ErrorBoundaryState = {
  error: Error | null;
};

type ErrorBoundaryProps = {
  children: JSX.Element;
  handleError: HandleError | null;
  currentError: Error | null;
  boundaryLocation: string;
  throwUnhandled: boolean;
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
    const { handleError, boundaryLocation, throwUnhandled } = this.props;
    this.setState({ error });
    if (handleError === null) {
      if (throwUnhandled) {
        throw error;
      }
      return;
    }
    const msg = getErrorMessage(error);
    const context = `Error caught by ErrorBoundary in ${boundaryLocation}`;
    handleError(new Error(JSON.stringify({ msg, context })));
  }

  public render(): JSX.Element {
    const { children } = this.props;
    const { error } = this.state;
    const { throwUnhandled, handleError, boundaryLocation, className } =
      this.props;
    const clear = () => {
      this.setState({ error: null });
    };
    return error && !handleError && !throwUnhandled ? (
      <div
        className={
          (className ? `${className} ` : ``) +
          'flex flex-col flex-wrap items-center justify-around gap-2 border border-solid border-gray-800 bg-white p-2'
        }
      >
        Error handled by ErrorBoundary in {boundaryLocation}:
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
