import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

export const useData = <T, K>(
  endpoint: string,
  extractData: (response: T) => K[]
) => {
  const [data, setData] = useState<K[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<T>(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(extractData(res.data));
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, loading };
};
