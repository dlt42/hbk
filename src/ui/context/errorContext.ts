import { createContext } from 'react';

export type HandleError = (error: Error | null) => void;

export type ErrorContextType = {
  error: Error | null;
  handleError: HandleError;
};

export const ErrorContext = createContext<ErrorContextType>(null!);
