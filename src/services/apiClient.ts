import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_APP_API_KEY,
  },
});
