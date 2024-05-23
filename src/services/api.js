import axios from "axios";
import { getItem } from "../helpers/storege";

axios.defaults.baseURL = "https://pch14.uz";

axios.interceptors.request.use((config) => {
  const token = getItem("token");
  const authorization = token ? `Bearer ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;
