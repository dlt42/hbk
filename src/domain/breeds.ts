import { DetailsContent } from 'ui/components/Details';

import { callApi } from '../api/apiHandler';
import { getConfig } from '../support/config';
import { Breed, Breeds, breedsSchema } from './breeds.types';

const config = getConfig();

export const getBreeds = async () => {
  const baseURL = config.baseUrl;
  const path = config.breedsPath;

  const result = await callApi<Breeds, void, {}>({
    requestHeaders: {
      'x-api-key': config.xApiKey,
    },
    superType: 'nopayload',
    type: 'get',
    schema: breedsSchema,
    urlDetails: {
      baseURL,
      path,
      paramMap: {},
    },
  });
  return result;
};

type GetDisplayDataResponse = {
  resultLabel: string;
  resultValue: string | number | null;
  resultTarget: keyof DetailsContent | null;
} | null;

export const getDisplayData = (
  breed: Breed,
  key: keyof Breed
): GetDisplayDataResponse => {
  if (key === 'image') {
    return null;
  }

  const value = breed[key];
  let resultLabel = key.replaceAll('_', ' ');
  let resultValue: string | number | null = null;
  let resultTarget: keyof DetailsContent | null = null;

  if (typeof value === 'number') {
    resultValue = value;
    resultTarget = 'stats';
  } else if (typeof value === 'boolean') {
    resultValue = value ? 'Yes' : 'No';
    resultTarget = 'attributes';
  } else if (typeof value === 'string') {
    resultValue = value.replaceAll('  ', ' ').trim();
    if (key.endsWith('_url')) {
      resultLabel = resultLabel.substring(0, resultLabel.lastIndexOf(' '));
      resultTarget = 'links';
    } else {
      resultTarget = 'info';
    }
  } else if (typeof value === 'object') {
    resultValue = JSON.stringify(value, undefined, 2)
      .replaceAll('{', '')
      .replaceAll('}', '')
      .replaceAll('  ', ' ')
      .trim();
    resultTarget = 'info';
  }
  return {
    resultLabel,
    resultValue,
    resultTarget,
  };
};
