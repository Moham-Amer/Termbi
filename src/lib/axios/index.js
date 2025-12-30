import axios from "axios";

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});



httpClient.interceptors.request.use(
  config => {
        config.headers["Authorization"] = localStorage.getItem("access_token");
        console.log(config.headers["Authorization"]);
        console.log(httpClient);
    return config;
  },
  error => {
    Promise.reject(error);
  }
);