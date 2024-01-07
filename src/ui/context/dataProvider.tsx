import React, { ReactNode, useEffect, useState } from 'react';

import { getBreeds } from '../../domain/breeds';
import { Breeds } from '../../domain/breeds.types';
import { DataContext } from './dataContext';

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [breeds, setBreeds] = useState<Breeds>([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const result = await getBreeds();
      if (result.isErr) {
        setBreeds(() => {
          throw result.error;
        });
      } else {
        setBreeds(result.value);
      }
    };
    fetchBreeds();
  }, []);

  return (
    <DataContext.Provider value={{ breeds }}>{children}</DataContext.Provider>
  );
};
