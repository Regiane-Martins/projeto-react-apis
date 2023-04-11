import axios from "axios";
import { useEffect, useState } from "react";

export const useResquestData = (url, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((er) => {
        setIsLoading(false);
      });
  }, [url]);
  return [data, isLoading];
};
