import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Entry } from "models/entry";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getBudgetEntries: builder.query<Entry[], void>({
      query: () => `budget-entries`,
    }),
  }),
});

export const { useGetBudgetEntriesQuery } = baseApi;
