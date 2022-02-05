import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url, method) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url, { method }) //
      .then(request => {
        console.log(request.data);
        setData(request.data);
      })
      .catch(error => {
        throw new Error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return [data, loading, error];
};

export default useFetch;
