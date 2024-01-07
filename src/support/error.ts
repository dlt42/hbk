import { Result } from 'true-myth';
import { ZodError } from 'zod';

import { ApiResponse, ResponseDataType, URLDetails } from './apiHandler.types';

export const getErrorMessage = (error: unknown) => {
  if (!error) return 'Unknown error';
  return error instanceof Error ? error.message : JSON.stringify(error);
};

// TODO: for large data sets there can be many duplicate errors
// (i.e. a missing attribute for multiple array objects)
// Look to see if there is anything out there that can intelligently squash duplicate errors
// (i.e. reduce multiple errors to one and replace the array index with 'n')
const convertZodError = (error: ZodError) =>
  error.issues.map(
    (i) => `${i.path.length ? `${i.path.join('.')} -> ` : ''}${i.message}`
  );

const processApiRequestError = <T extends ResponseDataType>(
  error: unknown,
  urlDetails: URLDetails
): ApiResponse<T> => {
  return Result.err({
    type: 'REQUEST',
    error: getErrorMessage(error),
    causes: [],
    urlDetails,
  });
};

export { convertZodError, processApiRequestError };