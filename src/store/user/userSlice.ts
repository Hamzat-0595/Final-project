import { createSlice } from "@reduxjs/toolkit";

import { User, UserState } from "../../types/types";
import { authUser, registerClient } from "./userAction";
import { toast } from "react-toastify";

const initialState: UserState = {
  isAuth: false,
  isLoading: false,
  error: "",
  token: "",
  user: {} as User,
};

export const userSlice = createSlice({
  initialState,
  reducers: {},
  name: "user",

  extraReducers: (builder) => {
    //   builder.addCase(getPosts.pending, (state) => {
    //     state.isLoadingPosts = true;
    //   });
    //   builder.addCase(getPosts.fulfilled, (state, action) => {
    //     state.isLoadingPosts = false;
    //     state.posts = action.payload;
    //   });
    //   builder.addCase(getPosts.rejected, (state, action) => {
    //     state.isLoadingPosts = false;
    //     state.error = action.error.message ?? "";
    //   });

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

    // builder.addCase(deletePost.pending, (state) => {
    //   state.isLoadingPosts = true;
    // });
    // builder.addCase(deletePost.fulfilled, (state, action) => {
    //   state.posts = state.posts.filter((post) => post._id !== action.payload);
    //   state.isLoadingPosts = false;
    // });
    // builder.addCase(deletePost.rejected, (state, action) => {
    //   state.isLoadingPosts = false;
    //   state.error = action.error.message ?? "";
    // });
  },
});

export default userSlice.reducer;
