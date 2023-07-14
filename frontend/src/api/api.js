import axios from "axios";
import { cookies } from "../commonjs/common";

export const URL =
  process.env.BASE_URL || "http://localhost:8000/api/";

const api = (BASE_URL) => {
  
  let tokenVal = "";
  // initialize axios
  const service = axios.create({
    baseURL: BASE_URL ?? URL,
    headers: {
      Authorization: tokenVal ?? "",
      "Content-Type": "application/json",
    },
   
  });

  // add a request interceptor
  service.interceptors.request.use(
    async function (config) {
      const cookieToken = await cookies.get();
      if(cookieToken && cookieToken?.toString()?.includes("token")) {
        tokenVal = cookieToken?.split("token=")?.[1];
      }
      if (tokenVal && tokenVal !== "") {
        config.headers.Authorization = "Bearer "+ tokenVal
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  return service;
};

export default api;
