import { createSlice } from "@reduxjs/toolkit";

import { User, UserState } from "../../types/types";
import { authUser, checkAuthUser, registerClient } from "./userAction";
import { toast } from "react-toastify";

const initialState: UserState = {
  isAuth: false,
  isLoading: true,
  error: "",
  token: "",
  user: {} as User,
};
export const userSlice = createSlice({
  initialState,

  name: "user",
  reducers: {
    logoutReduser: (state) => {
      state.user = {} as UserState["user"];
      state.isLoading = false;
      state.isAuth = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerClient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerClient.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success(action.payload, {
          autoClose: 3000,
        });
      })
      .addCase(registerClient.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        toast.error(action.error.message, {
          autoClose: 3000,
        });
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuth = true;
        state.token = action.payload.token;
      });

    builder.addCase(checkAuthUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkAuthUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
    });
    builder.addCase(checkAuthUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload as string;
    });
  },
});

export const { logoutReduser } = userSlice.actions;

export default userSlice.reducer;
