import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService, setToken } from "../../api/baseService";
import { RegisterRequest, User } from "../../types/types";
import Cookies from "js-cookie";
import { AxiosError } from "axios";

interface IUserAuth extends User {
  token: string;
}

export const registerClient = createAsyncThunk<string, RegisterRequest>(
  "auth/registerClient",
  async (user) => {
    try {
      const response = await baseService.post("/client/signup", user);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const authUser = createAsyncThunk(
  "user/authUser",
  async (user: { mail: string; password: string }) => {
    const response = await baseService.post<IUserAuth>("/signin", user);
    Cookies.set("token", response.data.token);
    return response.data;
  }
);

export const checkAuthUser = createAsyncThunk(
  "user/checkAuthUser",
  async (_, { rejectWithValue }) => {
    try {
      setToken();
      const response = await baseService.get<IUserAuth>("/cafe/profile/user");

      return response.data;
    } catch (error) {
      return rejectWithValue(
        (error as AxiosError).response?.data || "Error checking auth"
      );
    }
  }
);
