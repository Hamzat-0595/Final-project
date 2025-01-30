import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://keep-server-no8s.onrender.com",
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: "/",
      }),
    }),
  }),
});
