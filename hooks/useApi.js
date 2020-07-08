import { useState } from 'react';

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  const request = async () => {
    const response = await apiFunc();
    setData(response.data.items);
    if (!response.ok) return setError(true);
  };

  return { data, error, request };
};

export default useApi;
