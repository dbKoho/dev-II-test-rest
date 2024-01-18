import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const dataJSON = await response.json();
      setData(dataJSON);
    };
    fetchData();
  }, [url]);
  return { data };
};
