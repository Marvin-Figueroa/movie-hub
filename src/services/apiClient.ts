import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_APP_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + id).then((res) => res.data);
  };

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
