import { blankSplitApi as api } from "../blankApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserList: build.query<GetUserListApiResponse, GetUserListApiArg>({
      query: (queryArg) => ({
        url: `/user/list`,
        params: {
          page: queryArg.page,
          search: queryArg.search,
          orderBy: queryArg.orderBy,
        },
      }),
    }),
    getUserByIdTransactions: build.query<
      GetUserByIdTransactionsApiResponse,
      GetUserByIdTransactionsApiArg
    >({
      query: (queryArg) => ({ url: `/user/${queryArg.id}/transactions` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type GetUserListApiResponse = /** status 200 undefined */ {
  data?: User[];
  pages?: number;
};
export type GetUserListApiArg = {
  page?: any;
  search?: any;
  orderBy?: "tokens:asc" | "tokens:desc";
};
export type GetUserByIdTransactionsApiResponse =
  /** status 200 undefined */ Transaction[];
export type GetUserByIdTransactionsApiArg = {
  id: any;
};
export type User = {
  id: string;
  email?: string;
  tg_id?: string;
  name?: string;
  avatar?: string;
  role: "ADMIN" | "USER";
  created_at: string;
};
export type Transaction = {
  id: string;
  provider: "YOOMONEY" | "CRYPTO" | "SYSTEM";
  currency: "RUB" | "USD" | "EUR" | "SYSTEM_TOKEN";
  meta?: object;
  amount: number;
  status: "FAILED" | "SUCCEDED" | "PENDING";
  type: "SUBSCRIPTION" | "WRITE_OFF" | "REPLENISH" | "WITHDRAW";
  plan_id?: string;
  user_id?: string;
  referral_id?: string;
  external_id?: string;
  created_at: string;
};
export const {
  useGetUserListQuery,
  useLazyGetUserListQuery,
  useGetUserByIdTransactionsQuery,
  useLazyGetUserByIdTransactionsQuery,
} = injectedRtkApi;
