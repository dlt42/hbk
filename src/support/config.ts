type Config = {
  xApiKey: string;
  baseUrl: string;
  breedsPath: string;
  catsSearchPath: string;
};

const getEnvVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw Error(`${name} is not configured`);
  }
  return value;
};

export const getConfig = (): Config => {
  const xApiKey = getEnvVar('REACT_APP_X_API_KEY');
  const baseUrl = getEnvVar('REACT_APP_API_BASE_URL');
  const breedsPath = getEnvVar('REACT_APP_API_BREEDS_PATH');
  const catsSearchPath = getEnvVar('REACT_APP_API_CATS_SEARCH_PATH');
  return {
    xApiKey,
    baseUrl,
    breedsPath,
    catsSearchPath,
  };
};
