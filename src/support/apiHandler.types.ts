import { Result } from 'true-myth';
import { Schema } from 'zod';

import { ApiErrorResponse } from './error.types';

type URLDetails = {
  baseURL: string;
  path: string;
  paramMap?: Record<string, string | number>;
  id?: string;
};

type ResponseDataType = Record<string, object> | Array<unknown>;

type PayloadDataType = Record<string, unknown>;

type ResponseData<T extends ResponseDataType> = T;

type ResponseSchema<T extends ResponseDataType> = Schema<ResponseData<T>>;

type ApiRequest<
  T extends ResponseDataType,
  P extends PayloadDataType | void,
  H,
> = {
  urlDetails: URLDetails;
  requestHeaders: Record<string, string>;
  requiredResponseHeaders?: (keyof H)[];
} & (P extends PayloadDataType
  ? {
      superType: 'payload';
      type: 'patch' | 'put' | 'post';
      payload: P;
      schema: undefined;
    }
  : {
      superType: 'nopayload';
      type: 'delete' | 'get';
      schema: ResponseSchema<T>;
    });

type ApiSuccessResponse<T extends ResponseDataType, H> = {
  data: ResponseData<T>;
  headers: Partial<H>;
};

type ApiResponse<T extends ResponseDataType, H> = Result<
  ApiSuccessResponse<T, H>,
  ApiErrorResponse
>;

export type {
  ApiRequest,
  ApiResponse,
  ApiSuccessResponse,
  PayloadDataType,
  ResponseData,
  ResponseDataType,
  ResponseSchema,
  URLDetails,
};
