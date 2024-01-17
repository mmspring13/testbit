import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_URL} from "../common/constants.ts";

export const blankSplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL,
  }),
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
})
