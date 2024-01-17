import { configureStore } from '@reduxjs/toolkit'
import {blankSplitApi} from "./blankApi.ts";

export const store = configureStore({
  reducer: {
    [blankSplitApi.reducerPath]: blankSplitApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(blankSplitApi.middleware)
})

// window.store = store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
