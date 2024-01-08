import { callApi } from '../api/apiHandler';
import { getConfig } from '../support/config';
import { Cats, catsSchema } from './cats.types';

const config = getConfig();

export type CatSearchParams = {
  limit: number;
  page: number;
  size: 'thumb' | 'small' | 'med' | 'full';
  order: 'ASC' | 'DESC';
  breed_ids: string[] | undefined;
};

type PaginationResponseHeaders = {
  'Pagination-Count': number;
  'Pagination-Limit': number;
  'Pagination-Page': number;
};

export const getCats = async (catSearchParams: CatSearchParams) => {
  const baseURL = config.baseUrl;
  const path = config.catsSearchPath;

  const result = await callApi<Cats, void, PaginationResponseHeaders>({
    requestHeaders: {
      'x-api-key': config.xApiKey,
    },
    superType: 'nopayload',
    type: 'get',
    schema: catsSchema,
    urlDetails: {
      baseURL,
      path,
      paramMap: catSearchParams,
    },
    requiredResponseHeaders: [
      'Pagination-Count',
      'Pagination-Limit',
      'Pagination-Page',
    ],
  });
  return result;
};
