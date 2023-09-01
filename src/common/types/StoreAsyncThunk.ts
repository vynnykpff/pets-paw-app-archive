import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { AsyncThunk } from "@reduxjs/toolkit";

export interface StoreAsyncThunk<T> {
  asyncThunk: AsyncThunk<any, any, any>;
  storeHandler: StoreAsyncThunkHandler<T>;
}
