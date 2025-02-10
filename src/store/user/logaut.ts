import { baseService } from "../../api/baseService";
import { logoutReduser } from "./userSlice";

import Cookies from "js-cookie";

export const logout = () => {
  return (dispatch: any) => {
    Cookies.remove("token");

    dispatch(logoutReduser());
  };
};
baseService.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      return logout();
    }
    return error;
  }
);
