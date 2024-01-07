import { Breeds } from 'domain/breeds.types';
import { createContext, useContext } from 'react';

type DataContextValue = {
  breeds: Breeds;
};

export const DataContext = createContext<DataContextValue>(null!);

export const useData = () => useContext(DataContext);
