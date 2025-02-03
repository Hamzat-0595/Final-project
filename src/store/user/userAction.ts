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
      //  await baseService.post("/signin", user);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const registerCafe = createAsyncThunk<string, RegisterRequest>(
  "auth/registerCafe",
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

// export const getPosts = createAsyncThunk("user/getPosts", async () => {
//   const response = await baseService.get("/posts");
//   return response.data;
// });

// export const addPost = createAsyncThunk<IPost, Pick<IPost, "description">>(
//   "users/addPosts",
//   async (arg) => {
//     const response = await baseService.post("/posts", {
//       description: arg.description,
//     });
//     return response.data;
//   }
// );

// export const deletePost = createAsyncThunk<string, Pick<IPost, "_id">>(
//   "users/deletePost",
//   async (arg) => {
//     await baseService.delete(`/posts/${arg._id}`);
//     return arg._id;
//   }
// );
