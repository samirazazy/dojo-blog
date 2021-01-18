import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [Data, setData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error('can not load data from server');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, [url, Error]);

  return { Data, Loading, Error };
};

export default useFetch;
