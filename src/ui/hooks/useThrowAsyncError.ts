import { useState } from 'react';

export const useThrowAsyncError = () => {
  const [, setState] = useState();

  return (error: unknown) => {
    setState(() => {
      throw error;
    });
  };
};
