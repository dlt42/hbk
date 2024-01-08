import { ResponseData, ResponseDataType, URLDetails } from './apiHandler.types';

type ApiErrorBase = {
  error: string;
  causes: string[];
  urlDetails: URLDetails;
};

type RequestError = ApiErrorBase & {
  type: 'REQUEST';
};

type AxiosError = ApiErrorBase & {
  type: 'AXIOS';
  code: string | undefined;
  status: number;
};

type ValidationError = ApiErrorBase & {
  type: 'VALIDATION';
  response: ResponseData<ResponseDataType>;
};

type ApiErrorResponse = RequestError | AxiosError | ValidationError;

export type { ApiErrorResponse };
