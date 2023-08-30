import axios from "axios";

const api_url = import.meta.env.VITE_API_HOST;
const api_port = import.meta.env.VITE_API_PORT;

const api = axios.create({
  baseURL: `${api_url}${(api_port && `:${api_port}`) || ""}/api/`,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default api;
