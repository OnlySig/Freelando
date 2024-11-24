import axios from "axios";
import { StoreToken } from "../utils/StoreToken";

const http = axios.create({
  baseURL: "http://localhost:8080/",
});

http.interceptors.request.use(
  function (config) {
    const token = StoreToken.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Token foi adicionado pelo interceptador do axios <3");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

const rotasAserIgnoradas = ["auth/login", "auth/refresh"];

const tryRefreshTk = async () => {
  const token = StoreToken.refreshToken;
  const { data } = await axios.get("http://localhost:8080/auth/refresh", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  StoreToken.definirTokens(data.access_token, data.refresh_token);
  return data;
};

const handleError401 = async (error) => {
  await tryRefreshTk().then(() => http(error.config));
  return Promise.reject(error);
};

http.interceptors.response.use(
  (res) => res, // <- "final feliz, range status code 2xx"
  async function (error) {
    // <- "final triste, range status code !== 2xx"
    if (
      error.response.status === 401 &&
      !rotasAserIgnoradas.includes(error.config.url)
    ) {
      return handleError401(error);
    }
    return Promise.reject(error);
  },
);

export default http;
