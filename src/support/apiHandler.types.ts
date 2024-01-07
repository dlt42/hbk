import { Result } from 'true-myth';
import { Schema } from 'zod';

import { ApiError } from './error.types';

type URLDetails = {
  baseURL: string;
  endpoint: string;
  paramMap?: Record<string, string | number>;
  id?: string;
};

type ResponseDataType = Record<string, object> | Array<unknown>;

type PayloadDataType = Record<string, unknown>;

type ResponseData<T extends ResponseDataType> = T;

type ResponseSchema<T extends ResponseDataType> = Schema<ResponseData<T>>;

type ValidationResult<T extends ResponseDataType> = ApiResponse<T>;

type ApiRequest<
  T extends ResponseDataType,
  P extends PayloadDataType | void,
> = {
  urlDetails: URLDetails;
  headers: Record<string, string>;
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

type ApiResponse<T extends ResponseDataType> = Result<
  ResponseData<T>,
  ApiError
>;

export type {
  ApiRequest,
  ApiResponse,
  PayloadDataType,
  ResponseData,
  ResponseDataType,
  ResponseSchema,
  URLDetails,
  ValidationResult,
};
