import { Result } from 'true-myth';

import {
  ApiRequest,
  ApiResponse,
  PayloadDataType,
  ResponseData,
  ResponseDataType,
  ResponseSchema,
  URLDetails,
} from './apiHandler.types';
import { convertZodError, processApiRequestError } from './error';
import { ApiError } from './error.types';

const constructApiURL = ({
  baseURL,
  endpoint,
  id,
  paramMap,
}: URLDetails): string => {
  const url = new URL(baseURL);
  url.pathname += `${endpoint}`;
  if (id) {
    url.pathname += `/${id}`;
  }
  if (paramMap) {
    const params = new URLSearchParams();
    const pairs = Object.entries(paramMap);
    pairs.forEach(([key, value]) => {
      params.append(key, typeof value === 'number' ? value.toString() : value);
    });
    url.search = params.toString();
  }
  return url.toString();
};

const validateResponse = <T extends ResponseDataType>(
  schema: ResponseSchema<T>,
  response: ResponseData<T>,
  urlDetails: URLDetails
): Result<ResponseData<T>, ApiError> => {
  const parseResult = schema.safeParse(response);
  return parseResult.success
    ? Result.ok(parseResult.data)
    : Result.err({
        type: 'VALIDATION',
        error: 'Zod Validation failure',
        causes: convertZodError(parseResult.error),
        response,
        urlDetails,
      });
};

const callApi = async <
  T extends ResponseDataType,
  P extends void | PayloadDataType,
>(
  params: ApiRequest<T, P>
): Promise<ApiResponse<T>> => {
  const { urlDetails, superType, type, headers: headersParam } = params;
  try {
    const headers = new Headers(
      {
        'Content-Type': 'application/json',
      } && headersParam
    );

    const redirect: RequestRedirect = 'follow';

    const requestOptions = {
      method: type.toUpperCase(),
      headers,
      redirect,
    };

    const url = constructApiURL(urlDetails);

    switch (superType) {
      case 'nopayload': {
        const { schema } = params;
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        return validateResponse(schema, data, urlDetails);
      }
      case 'payload': {
        const { payload } = params;
        const response = await fetch(
          url,
          requestOptions && { body: JSON.stringify(payload) }
        );
        const data = await response.json();
        return Result.ok(data);
      }
    }
  } catch (error) {
    return processApiRequestError(error, urlDetails);
  }
};

export { callApi };
