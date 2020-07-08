import { create } from 'apisauce';

const URL = 'https://www.googleapis.com';

const apiClient = create({
  baseURL: URL,
});

export default apiClient;
