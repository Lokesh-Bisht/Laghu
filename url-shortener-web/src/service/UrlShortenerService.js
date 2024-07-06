import configMap from '../config/env';
import apiCall from './ApiService';

const shortenURL = async(url) => {
  const apiConfig = configMap.apiMap;
  const baseURL = apiConfig.URL_SHORTENER;
  const requestBody = {
    url
  };
  const apiArgs = {
    method: 'POST',
    url: `${baseURL}/shortener`,
    data: requestBody,
    responseType: 'json'
  };
  return apiCall(apiArgs);
};

const fetchOriginalURL = async(shortenUrl) => {
  const apiConfig = configMap.apiMap;
  const baseURL = apiConfig.URL_SHORTENER;
  const apiArgs = {
    method: 'GET',
    url: `${baseURL}/${shortenUrl}`,
    responseType: 'json'
  };
  return apiCall(apiArgs);
};

export { shortenURL, fetchOriginalURL };
