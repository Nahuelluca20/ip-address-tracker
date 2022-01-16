import { useCallback, useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState();

  const fetchData = useCallback(async () => {

    try {
      const response = await fetch(url);

      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (e) {
      console.log(e)
    } 
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
  };
}

export default useFetch