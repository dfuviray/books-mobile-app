import { useState } from 'react';

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) return setError(true);

    setData(response.data.items);
  };

  return { data, error, loading, request };
};

export default useApi;
