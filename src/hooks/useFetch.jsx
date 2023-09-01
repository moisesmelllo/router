import { useState, useEffect } from "react";

// custom hook

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading ] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error); // Set the error state
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  console.log(data);
  return { data, loading, error };
};