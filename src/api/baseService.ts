import axios from "axios";
import Cookies from "js-cookie";

export const baseURL = "https://keep-server-no8s.onrender.com";

export const baseService = axios.create({
  baseURL,
});

export const setToken = () => {
  baseService.defaults.headers.common["Authorization"] =
    "Bearer " + Cookies.get("token");
};
