import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../api/baseService";
import { RegisterRequest, User } from "../../types/types";
import Cookies from "js-cookie";

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
