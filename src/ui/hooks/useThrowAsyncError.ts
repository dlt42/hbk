import { useMemo, useState } from 'react';

export const useThrowAsyncError = () => {
  const [, setState] = useState();

  return useMemo(
    () => (error: unknown) => {
      setState(() => {
        throw error;
      });
    },
    []
  );
};
