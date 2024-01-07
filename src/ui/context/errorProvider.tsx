import React, { ReactNode, useMemo, useState } from 'react';

import { getErrorMessage } from '../../support/error';
import Button from '../../ui/components/Button';
import ErrorMessage from '../../ui/components/ErrorMessage';
import { ErrorContext, HandleError } from './errorContext';

export function ErrorProvider({ children }: { children: ReactNode }) {
  const [error, setError] = useState<Error | null>(null);
  const value = useMemo(() => {
    const handleError: HandleError = (errorToHandle) => {
      setError(
        new Error(
          JSON.stringify({
            msg: getErrorMessage(errorToHandle),
            context: 'ErrorContext',
          })
        )
      );
    };
    return { error, handleError };
  }, [error]);
  return (
    <ErrorContext.Provider value={value}>
      {error !== null ? (
        <div className='m-5 text-center'>
          Error handled by error context: <ErrorMessage error={error} />
          <Button
            onClick={() => {
              setError(null);
            }}
          >
            Clear
          </Button>
        </div>
      ) : (
        children
      )}
    </ErrorContext.Provider>
  );
}
