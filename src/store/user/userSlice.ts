import { createSlice } from "@reduxjs/toolkit";

import { User, UserState } from "../../types/types";
import { registerClient } from "./userAction";
import { toast } from "react-toastify";

const initialState: UserState = {
  isAuth: false,
  isLoading: false,
  error: "",
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
      });

    // builder.addCase(addPost.pending, (state) => {
    //   state.isLoadingPosts = true;
    // });
    // builder.addCase(addPost.fulfilled, (state, action) => {
    //   state.isLoadingPosts = false;
    //   state.posts.unshift(action.payload);
    // });
    // builder.addCase(addPost.rejected, (state, action) => {
    //   state.isLoadingPosts = false;
    //   state.error = action.error.message ?? "";
    // });

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
