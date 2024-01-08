import React, { ReactNode, useEffect, useState } from 'react';

import { getBreeds } from '../../domain/breeds';
import { Breeds } from '../../domain/breeds.types';
import { useThrowAsyncError } from '../hooks/useThrowAsyncError';
import { DataContext } from './dataContext';

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const throwError = useThrowAsyncError();
  const [breeds, setBreeds] = useState<Breeds>([]);
  useEffect(() => {
    const fetchBreeds = async () => {
      const result = await getBreeds();
      console.log(JSON.stringify(result));
      if (result.isErr) {
        throwError(result.error);
      } else {
        setBreeds(result.value.data);
      }
    };
    fetchBreeds();
  }, [throwError]);

  return (
    <DataContext.Provider value={{ breeds }}>{children}</DataContext.Provider>
  );
};
