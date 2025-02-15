import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory, IProduct } from "../../models/IProduct";
import { RootState } from "../store";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://keep-server-no8s.onrender.com",
    prepareHeaders: (headers, api) => {
      const token = (api.getState() as RootState).user.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["food"],
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], string | unknown>({
      query: (categoryId) => ({
        url: `/food${categoryId ? `/category/${categoryId}` : ""}`,
      }),
      providesTags: ["food"],
    }),
    fetchAllCategorys: build.query<ICategory[], unknown>({
      query: () => ({
        url: "/categories",
      }),
    }),
    postProduct: build.mutation<unknown, FormData>({
      query: (product) => ({
        url: "/food",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["food"],
    }),
  }),
});

export const { useFetchAllProductsQuery, useFetchAllCategorysQuery, usePostProductMutation } =
  productAPI;
