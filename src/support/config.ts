type Config = {
  xApiKey: string;
  baseUrl: string;
  getBreedsEndpoint: string;
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
  const getBreedsEndpoint = getEnvVar('REACT_APP_API_GET_BREEDS_ENDPOINT');
  return {
    xApiKey,
    baseUrl,
    getBreedsEndpoint,
  };
};
