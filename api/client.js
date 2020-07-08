import { create } from 'apisauce';
import cache from '../utility/cache';

const URL = 'https://www.googleapis.com';

const apiClient = create({
  baseURL: URL,
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response);
    return response;
  }

  const data = await cache.get(url);
  return data ? data : response;
};

export default apiClient;
