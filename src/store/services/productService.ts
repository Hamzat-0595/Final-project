import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICafe, ICategory, IProduct } from "../../models/IProduct";
import { RootState } from "../store";
import { Orders, SetOrderRequest } from "../../types/types";

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
  tagTypes: ["ORDERS"],
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], string | unknown>({
      query: (categoryId) => ({
        url: `/food${categoryId ? `/category/${categoryId}` : ""}`,
      }),
      providesTags: () => ["ORDERS"],
    }),
    fetchAllCategorys: build.query<ICategory[], unknown>({
      query: () => ({
        url: "/categories",
      }),
    }),
    fetchOrders: build.query<Orders[], void>({
      query: () => "orders",
    }),
    postOrder: build.mutation<string, SetOrderRequest>({
      query: (Orders) => ({
        url: "/orders",
        method: "POST",
        body: Orders,
      }),
      invalidatesTags: ["ORDERS"],
    }),
    fetchAllCafe: build.query<ICafe[], unknown>({
      query: () => ({
        url: "/cafe",
      }),
    }),
  }),
});

export const {
  useFetchAllProductsQuery,
  useFetchAllCategorysQuery,
  useFetchOrdersQuery,
  usePostOrderMutation,
  useFetchAllCafeQuery,
} = productAPI;
